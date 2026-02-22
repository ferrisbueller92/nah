import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    const apiKey = process.env.KLAVIYO_API_KEY;
    const listId = process.env.KLAVIYO_LIST_ID;

    if (!apiKey || !listId) {
      // Fallback: log to console when Klaviyo isn't configured yet
      console.log(`[WAITLIST] ${email} — ${new Date().toISOString()}`);
      return NextResponse.json({ success: true, message: "Signed up (dev mode)" });
    }

    // Create or update profile in Klaviyo
    const profileRes = await fetch("https://a.klaviyo.com/api/profiles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        revision: "2024-10-15",
      },
      body: JSON.stringify({
        data: {
          type: "profile",
          attributes: {
            email,
            properties: {
              source: "nah-landing-page",
              signup_date: new Date().toISOString(),
            },
          },
        },
      }),
    });

    let profileId: string;

    if (profileRes.status === 409) {
      // Profile already exists — extract ID from the duplicate response
      const dupData = await profileRes.json();
      profileId = dupData.errors?.[0]?.meta?.duplicate_profile_id;
      if (!profileId) {
        return NextResponse.json({ success: true, message: "Already signed up" });
      }
    } else if (profileRes.ok) {
      const profileData = await profileRes.json();
      profileId = profileData.data.id;
    } else {
      console.error("[WAITLIST] Klaviyo profile creation failed:", await profileRes.text());
      return NextResponse.json({ error: "Signup failed. Try again." }, { status: 500 });
    }

    // Subscribe profile to list
    await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        revision: "2024-10-15",
      },
      body: JSON.stringify({
        data: [{ type: "profile", id: profileId }],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[WAITLIST] Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
