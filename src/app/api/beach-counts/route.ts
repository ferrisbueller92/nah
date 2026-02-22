import { NextResponse } from "next/server";

export const revalidate = 60; // cache for 60 seconds

export async function GET() {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json({});
  }

  try {
    // Fetch all profiles in the NAH waitlist with their properties
    const profiles: { attributes?: { properties?: { beach?: string } } }[] = [];
    let nextUrl: string | null =
      `https://a.klaviyo.com/api/lists/${listId}/profiles/?fields[profile]=properties&page[size]=100`;

    while (nextUrl) {
      const res: Response = await fetch(nextUrl, {
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          revision: "2024-10-15",
        },
      });
      if (!res.ok) break;
      const data = await res.json();
      profiles.push(...(data.data || []));
      nextUrl = data.links?.next || null;
    }

    // Count signups per beach
    const counts: Record<string, number> = {};
    for (const profile of profiles) {
      const beach = profile.attributes?.properties?.beach;
      if (beach) {
        counts[beach] = (counts[beach] || 0) + 1;
      }
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("[BEACH-COUNTS] Error:", error);
    return NextResponse.json({});
  }
}
