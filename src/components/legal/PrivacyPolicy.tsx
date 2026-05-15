import LegalLayout from "../../components/legal/LegalLayout";
import SEO from "../seo/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read how InvestNaija collects, stores, protects, and uses your personal information across our financial education and investment platform."
        url="https://investnaija-mockup.netlify.app/legal/privacy-policy"
      />

      <LegalLayout title="Privacy Policy">
        <div className="space-y-10 text-sm md:text-[15px] leading-7 text-black/70">
          {/* Intro */}
          <section className="space-y-4">
            <p>
              At InvestNaija, a company owned by InvestIN Limited, we recognize
              that your privacy is important and are dedicated to protecting it.
              We treat your data and information (“Data”) as private and
              confidential.
            </p>

            <p>
              This Privacy Policy (“Policy”) explains how we collect, use,
              store, and protect your personal information when you use our
              website, applications, and related services (“Platform”).
            </p>

            <p>
              By accessing or using InvestNaija, you agree to the terms outlined
              in this Policy.
            </p>
          </section>

          {/* Personal information */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Personal Information
            </h2>

            <p>
              Personal information refers to data that identifies you as an
              individual, including your name, address, email, phone number, and
              any other identifiable information.
            </p>

            <p>
              We only collect and use personal data that is necessary to provide
              services, maintain accounts, and improve your experience.
            </p>
          </section>

          {/* What we collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              What We Collect
            </h2>

            <p>
              We may collect the following information directly from you or
              through your use of our services:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Full name, job title, and contact details</li>
              <li>Email address, home and business address, phone numbers</li>
              <li>Bank verification number (BVN) and banking details</li>
              <li>Occupation and profile information</li>
              <li>
                Device and browser information (IP address, operating system,
                etc.)
              </li>
              <li>Survey responses and feedback data</li>
            </ul>
          </section>

          {/* How we use information */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              How We Use Your Information
            </h2>

            <p>We use your information to:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and manage our financial services</li>
              <li>Maintain accurate user records</li>
              <li>Improve our products and user experience</li>
              <li>Send important updates and service notifications</li>
              <li>Share investment opportunities and market insights</li>
              <li>Conduct research and improve platform performance</li>
            </ul>
          </section>

          {/* Disclosure */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Disclosure of Information
            </h2>

            <p>
              We do not sell or share your personal information with third
              parties for marketing purposes.
            </p>

            <p>We may only disclose your data when required to:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Comply with legal or regulatory obligations</li>
              <li>Fulfill contractual services to you</li>
              <li>Protect against fraud or security risks</li>
              <li>Respond to lawful government requests</li>
            </ul>
          </section>

          {/* Location */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Location Information
            </h2>

            <p>
              We may collect location data solely for identity verification and
              compliance purposes.
            </p>

            <p>
              Once verification is complete, we do not retain location data for
              any other purpose.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">Cookies</h2>

            <p>
              We use cookies to improve your browsing experience and understand
              how users interact with our platform.
            </p>

            <p>
              You may disable cookies in your browser settings, but some
              features may not function properly.
            </p>
          </section>

          {/* Data security */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Data Security
            </h2>

            <p>
              We implement appropriate technical and organizational measures to
              protect your data from unauthorized access, alteration, or loss.
            </p>

            <p>
              Your data is retained only as long as necessary for legal,
              regulatory, or operational purposes.
            </p>
          </section>

          {/* Access */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Access and Updates
            </h2>

            <p>
              You may request access to your personal data and update incorrect
              information at any time by contacting us.
            </p>

            <p>
              We may require verification before granting access to protect your
              identity.
            </p>
          </section>

          {/* Updates */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Policy Updates
            </h2>

            <p>
              We may update this Policy periodically to reflect legal,
              regulatory, or operational changes.
            </p>
          </section>

          {/* contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#050505]">
              Contact information
            </h2>

            <div className="space-y-1">
              <p>Chief Compliance Officer</p>
              <p>InvestIN Limited</p>
              <p>10, Bankole Oki Road, Ikoyi, Lagos, Nigeria</p>

              <p>
                Tel:{" "}
                <a
                  href="tel:+23470046837862452"
                  className="text-[#d91b08] hover:underline"
                >
                  +234 700 468 3786 2452
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:info@investnaija.com"
                  className="text-[#d91b08] hover:underline"
                >
                  info@investnaija.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </LegalLayout>
    </>
  );
}
