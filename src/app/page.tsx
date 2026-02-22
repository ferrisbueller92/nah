"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Connection failed. Try again.");
      setStatus("error");
    }
  }

  return (
    <main>
      {/* ═══════ HERO ═══════ */}
      <section className="gradient-sunburst relative overflow-hidden min-h-[100vh] flex items-center justify-center">
        {/* Background watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[clamp(200px,30vw,400px)] uppercase text-white/[0.15] leading-none">
            NAH.
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Brand wordmark — first thing people see */}
          <h1 className="font-display text-[clamp(80px,15vw,160px)] text-white uppercase leading-[0.85] tracking-[0.02em] mb-6 animate-fade-in-up">
            NAH<span className="text-contrast">.</span>
          </h1>

          {/* Tagline in Permanent Marker */}
          <p className="font-accent text-[clamp(24px,5vw,44px)] text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Mate, you&apos;re cooked.
          </p>

          {/* Accent bar */}
          <div className="w-[60px] h-[4px] bg-contrast mx-auto mb-10 animate-fade-in-up delay-200" />

          {/* Subtitle — acronym reveal */}
          <p className="font-body text-[14px] md:text-[16px] text-white/70 uppercase tracking-[0.15em] mb-12 animate-fade-in-up delay-200">
            <span className="text-white font-bold">N</span>eed{" "}
            <span className="text-white font-bold">A</span>{" "}
            <span className="text-white font-bold">H</span>and?{" "}
            <span className="mx-2">&mdash;</span> Automated sunscreen for Australian beaches
          </p>

          {/* Waitlist CTA */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-in-up delay-300"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 bg-white/15 text-white placeholder-white/50 font-body text-[15px] border-2 border-white/30 outline-none focus:border-white transition-colors"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-8 py-3.5 bg-contrast text-white font-body font-bold text-[15px] uppercase tracking-[0.08em] hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "..."
                : status === "success"
                ? "YOU'RE IN"
                : "JOIN THE WAITLIST"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-white/90 text-sm mt-3 font-body animate-fade-in-up">
              Legend. We&apos;ll let you know when we launch.
            </p>
          )}
          {status === "error" && (
            <p className="text-white text-sm mt-3 font-body">{errorMsg}</p>
          )}
          <p className="font-data text-[11px] text-white/40 mt-8 uppercase tracking-[0.1em] animate-fade-in-up delay-400">
            Coming to Bondi
          </p>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="bg-base py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-body text-[13px] font-bold text-accent uppercase tracking-[0.15em] mb-3">
            How it works
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] uppercase leading-[1.05] mb-4">
            Four steps. Thirty seconds.
          </h2>
          <p className="font-body text-lg text-neutral-600 max-w-[55ch] mb-16">
            We didn&apos;t over-engineer this. Step in, tap, get sprayed, walk out.
            Your back will thank you.
          </p>

          <div className="grid md:grid-cols-4 gap-0">
            <div className="p-8 md:p-10 border border-neutral-200 border-b-0 md:border-b md:border-r-0">
              <div className="font-display text-[56px] text-accent leading-none mb-4">
                01
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Step In
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                Walk into the booth on the beach. No booking. No app. No
                account. Just step in.
              </p>
            </div>
            <div className="p-8 md:p-10 border border-neutral-200 border-b-0 md:border-b md:border-r-0">
              <div className="font-display text-[56px] text-accent leading-none mb-4">
                02
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Tap & Pay
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                $5 on the card reader. $15 for a family of 4. Cashless. Takes 2 seconds.
              </p>
            </div>
            <div className="p-8 md:p-10 border border-neutral-200 border-b-0 md:border-b md:border-r-0">
              <div className="font-display text-[56px] text-accent leading-none mb-4">
                03
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Get Sprayed
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                16 HVLP nozzles across 4 zones &mdash; head, torso, arms, legs. SPF 50+
                TGA-compliant sunscreen in 30 seconds. No missed spots.
              </p>
            </div>
            <div className="p-8 md:p-10 border border-neutral-200">
              <div className="font-display text-[56px] text-accent leading-none mb-4">
                04
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Walk Out
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                60 seconds to dry. Full UV protection. Go enjoy the beach.
                You&apos;re welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WARNING LABEL ═══════ */}
      <section className="bg-contrast py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="border-2 border-accent p-8 md:p-12 relative">
            <span className="absolute -top-3 left-6 bg-contrast px-3 font-display text-[14px] text-accent uppercase tracking-[0.15em]">
              Warning
            </span>
            <p className="font-accent text-[clamp(18px,3vw,24px)] text-base/90 leading-relaxed mb-6">
              18% of beachgoers have zero sunscreen. 86% don&apos;t reapply
              within 2 hours. The problem isn&apos;t that people forget &mdash;
              it&apos;s that applying cream is messy, slow, and annoying.
            </p>
            <p className="font-accent text-[clamp(18px,3vw,24px)] text-accent leading-relaxed">
              NAH fixes all three.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="font-display text-[clamp(48px,8vw,80px)] text-error uppercase leading-none mb-2">
                #1
              </div>
              <p className="font-body text-lg text-neutral-400">
                Australia has the highest rate of skin cancer in the world.
              </p>
            </div>
            <div>
              <div className="font-display text-[clamp(48px,8vw,80px)] text-accent uppercase leading-none mb-2">
                17,443
              </div>
              <p className="font-body text-lg text-neutral-400">
                New melanoma cases in Australia this year alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY NAH ═══════ */}
      <section className="bg-base py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-body text-[13px] font-bold text-accent uppercase tracking-[0.15em] mb-3">
            Why NAH
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] uppercase leading-[1.05] mb-16">
            Because your excuses ran out.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                Zero Missed Spots
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                360&deg; coverage
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                16 HVLP nozzles spray every angle across 4 zones. Your back, your ears,
                the tops of your feet &mdash; all covered. No more patchy application
                or begging your mate to get your shoulders.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                Proper Protection
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                SPF 50+ TGA-Listed
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                Same active ingredients as the stuff at Priceline. TGA-listed,
                broad spectrum, made by an Australian contract lab. Not some
                dodgy spray &mdash; proper sunscreen.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                Cheaper Than a Flat White
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                $5 &mdash; or $15 for the family
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                A bottle of sunscreen costs $15-30 and won&apos;t cover you properly.
                $5 for full body coverage is a no-brainer. Bring the kids &mdash;
                $15 covers a family of 4.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                Easy Reapplication
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Come back in 2 hours.
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                86% of beachgoers don&apos;t reapply. With NAH it takes 30 seconds,
                not 10 minutes of wrestling with a tube. Step in, get sprayed, get
                back to the beach.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                No Excuses Left
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Right there. On the beach.
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                It&apos;s on the beach. It takes 30 seconds. It costs $5. You
                don&apos;t need an app or an account. Every barrier to wearing
                sunscreen &mdash; gone.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-8 border-t-[3px] border-t-accent">
              <div className="font-body text-[12px] font-bold text-neutral-500 uppercase tracking-[0.12em] mb-2">
                Proven Overseas
              </div>
              <h3 className="font-display text-[22px] uppercase mb-2">
                Already works. Just not here.
              </h3>
              <p className="font-body text-[15px] text-neutral-600 leading-relaxed">
                Automated sunscreen booths already operate at resorts in the US
                and paid dispensers are at beaches across Australia. NAH brings
                full-body automated coverage to Aussie beaches for the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="gradient-sunburst-subtle py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-6">
          <p className="font-body text-[13px] font-bold text-accent uppercase tracking-[0.15em] mb-3">
            FAQ
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] uppercase leading-[1.05] mb-12">
            Yeah, we get asked this a lot.
          </h2>

          <div className="space-y-6">
            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                How does it work?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                Step into the booth. Tap $5 on the card reader. 16 HVLP nozzles
                spray you head-to-toe with SPF 50+ sunscreen in 30 seconds across
                4 zones &mdash; head, torso, arms, legs. 60 seconds to dry. Walk out.
                That&apos;s literally it.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                Is the sunscreen safe?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                SPF 50+, TGA-listed, broad-spectrum sunscreen made by an Australian
                contract lab. Same active ingredients as the stuff the Cancer Council
                sells. Full ingredient list is displayed on the booth screen before
                you spray, with a sensitive skin warning. We just apply it better.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                Is it sticky?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                Dries in about 60 seconds. It&apos;s a fine mist, not a cream. Way less
                sticky than the guilt of not wearing any.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                What about my face / eyes?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                Close your eyes, hold your breath for 30 seconds. There&apos;s a face
                shield option if you&apos;re precious about it. Most people just close
                their eyes &mdash; it&apos;s SPF, not pepper spray.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                Why $5?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                It covers the cost of the SPF 50+ formulation, booth maintenance,
                and keeps the lights on. We&apos;re not trying to make you broke.
                We&apos;re trying to stop you getting melanoma. Less than a flat white.
                Families get a deal &mdash; $15 for up to 4 people.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                Will it ruin my clothes?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                Nah, it dries in 60 seconds. Your Kmart boardies will survive. We recommend applying in your swimmers before getting dressed.
              </div>
            </details>

            <details className="group bg-white border border-neutral-200 open:border-accent">
              <summary className="cursor-pointer px-6 py-5 font-body font-bold text-[16px] flex justify-between items-center">
                Can I bring the family?
                <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 font-body text-[15px] text-neutral-600 leading-relaxed">
                Yeah. $15 covers up to 4 people &mdash; one at a time through the
                booth. No more wrestling sunscreen onto kids who&apos;d rather be
                in the water. 30 seconds each, done.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="gradient-sunburst py-20 md:py-28 text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-display text-[clamp(32px,6vw,56px)] text-white uppercase leading-[0.95] mb-4">
            NAH, not today melanoma.
          </h2>
          <p className="font-body text-lg text-white/80 mb-10">
            Be the first to know when we launch at Bondi.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 bg-white/15 text-white placeholder-white/50 font-body text-[15px] border-2 border-white/30 outline-none focus:border-white transition-colors"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-8 py-3.5 bg-contrast text-white font-body font-bold text-[15px] uppercase tracking-[0.08em] hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "..."
                : status === "success"
                ? "YOU'RE IN"
                : "YEAH, NAH — SIGN ME UP"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-white/90 text-sm mt-3 font-body">
              Legend. We&apos;ll let you know when we launch.
            </p>
          )}
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-contrast py-12">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="font-display text-[32px] text-base uppercase mb-2">
            NAH<span className="text-accent">.</span>
          </div>
          <p className="font-body text-sm text-neutral-500 mb-1">
            <span className="text-accent font-bold">N</span>eed{" "}
            <span className="text-accent font-bold">A</span>{" "}
            <span className="text-accent font-bold">H</span>and?{" "}
            &mdash; That&apos;s what we&apos;re here for.
          </p>
          <p className="font-data text-[11px] text-neutral-700 uppercase tracking-[0.1em] mb-6">
            SPF 50+ &bull; TGA Compliant &bull; $5 per spray &bull; Coming to Bondi
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="mailto:hello@getnah.com.au"
              className="font-body text-sm text-neutral-500 hover:text-accent transition-colors"
            >
              hello@getnah.com.au
            </a>
          </div>
          <p className="font-body text-[12px] text-neutral-700">
            &copy; 2026 NAH. All rights reserved. ABN pending.
          </p>
        </div>
      </footer>
    </main>
  );
}
