import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | NAH.",
  description: "Terms and conditions for using the NAH website.",
};

export default function TermsOfUse() {
  return (
    <main className="bg-base min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-20">
        <a
          href="/"
          className="font-display text-[24px] text-accent uppercase mb-12 inline-block hover:opacity-80 transition-opacity"
        >
          NAH<span className="text-contrast">.</span>
        </a>

        <h1 className="font-display text-[clamp(32px,5vw,48px)] uppercase leading-[1.05] mb-4">
          Terms of Use
        </h1>
        <p className="font-body text-[13px] text-neutral-500 mb-12">
          Last updated: 26 February 2026
        </p>

        <div className="space-y-8 font-body text-[15px] text-neutral-700 leading-relaxed">
          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              About this website
            </h2>
            <p>
              This website is operated by <strong>Need a Hand Sunscreen Pty Ltd</strong>{" "}
              (ACN 695 619 259), trading as <strong>NAH</strong>. NAH is currently in
              development and is not yet a commercially available product or service.
              This website is for informational and waitlist purposes only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              No guarantees
            </h2>
            <p>
              All information on this website &mdash; including pricing, beach locations,
              product specifications, and launch timing &mdash; is indicative only and
              subject to change. We make no guarantees about when or where NAH will launch,
              or the final specifications of the product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Product status
            </h2>
            <p>
              NAH&apos;s sunscreen formulation is in development. References to SPF ratings and
              sun protection on this website describe our intended product specification.
              The final product will be subject to testing, regulatory review, and listing on
              the Australian Register of Therapeutic Goods (ARTG) before commercial availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Sun safety
            </h2>
            <p>
              NAH does not provide medical advice. Sunscreen is only one form of sun protection.
              The Cancer Council recommends a combination of sun protection measures including
              sunscreen, protective clothing, shade, sunglasses, and avoiding peak UV hours.
              If you have sensitive skin or allergies, consult a healthcare professional before
              using any sunscreen product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Intellectual property
            </h2>
            <p>
              All content on this website &mdash; including text, design, logos, and the NAH brand
              &mdash; is owned by Need a Hand Sunscreen Pty Ltd. You may not reproduce, distribute,
              or use any content from this website without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by Australian law, Need a Hand Sunscreen Pty Ltd
              is not liable for any loss or damage arising from your use of this website or
              reliance on any information provided on it. Nothing in these terms excludes or
              limits any rights you may have under the Australian Consumer Law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. Any disputes
              will be subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href="mailto:hello@getnah.com.au" className="text-accent underline">
                hello@getnah.com.au
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <a
            href="/"
            className="font-body text-[14px] text-accent hover:underline"
          >
            &larr; Back to NAH
          </a>
        </div>
      </div>
    </main>
  );
}
