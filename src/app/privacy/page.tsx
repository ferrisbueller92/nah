import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NAH.",
  description: "How NAH collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="font-body text-[13px] text-neutral-500 mb-12">
          Last updated: 26 February 2026
        </p>

        <div className="space-y-8 font-body text-[15px] text-neutral-700 leading-relaxed">
          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Who we are
            </h2>
            <p>
              This website is operated by <strong>Need a Hand Sunscreen Pty Ltd</strong> (ACN 695 619 259),
              trading as <strong>NAH</strong>. We can be contacted at{" "}
              <a href="mailto:hello@getnah.com.au" className="text-accent underline">
                hello@getnah.com.au
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              What we collect
            </h2>
            <p className="mb-3">When you use our website, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Email address</strong> &mdash; when you join our waitlist or complete a survey
              </li>
              <li>
                <strong>Beach preference</strong> &mdash; when you vote for a beach location
              </li>
              <li>
                <strong>Survey responses</strong> &mdash; if you complete our Google Form survey
              </li>
              <li>
                <strong>Technical data</strong> &mdash; IP address, browser type, and pages visited
                (collected automatically by our hosting provider)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              How we use it
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Send you updates about NAH&apos;s launch and development</li>
              <li>Understand demand for different beach locations</li>
              <li>Improve our product based on survey feedback</li>
              <li>Respond to your enquiries</li>
            </ul>
            <p className="mt-3">
              We will <strong>never</strong> sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Third parties
            </h2>
            <p className="mb-3">
              We use the following services to operate our website and manage communications:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Klaviyo</strong> (US-based) &mdash; email delivery and waitlist management
              </li>
              <li>
                <strong>Vercel</strong> (US-based) &mdash; website hosting and analytics
              </li>
              <li>
                <strong>Google Forms</strong> (US-based) &mdash; survey collection
              </li>
            </ul>
            <p className="mt-3">
              By providing your information, you consent to it being transferred to and processed
              in the United States by these providers. Each operates under their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Storage and security
            </h2>
            <p>
              Your email address is stored securely in Klaviyo&apos;s platform. We use
              industry-standard security measures to protect your data. Your email may also
              be stored locally in your browser (localStorage) for convenience &mdash; you can
              clear this at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Your rights
            </h2>
            <p className="mb-3">Under the Australian Privacy Act 1988, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Unsubscribe from our emails at any time (every email includes an unsubscribe link)</li>
              <li>Request deletion of your data</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@getnah.com.au" className="text-accent underline">
                hello@getnah.com.au
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Cookies
            </h2>
            <p>
              This website uses localStorage to remember your email for convenience.
              We do not currently use tracking cookies. If this changes, we will update
              this policy and notify you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Complaints
            </h2>
            <p>
              If you believe we have breached the Australian Privacy Principles, please
              contact us at{" "}
              <a href="mailto:hello@getnah.com.au" className="text-accent underline">
                hello@getnah.com.au
              </a>
              . If you are not satisfied with our response, you may lodge a complaint with the{" "}
              <a
                href="https://www.oaic.gov.au/privacy/privacy-complaints"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Office of the Australian Information Commissioner (OAIC)
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] uppercase mb-3">
              Changes
            </h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this
              page with an updated date. Continued use of the website after changes constitutes
              acceptance of the updated policy.
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
