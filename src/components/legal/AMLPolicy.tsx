import LegalLayout from "../../components/legal/LegalLayout";
import SEO from "../seo/SEO";

export default function AMLPolicy() {
  return (
    <>
      <SEO
        title="Anti-Money Laundering Policy"
        description="Learn about InvestNaija’s AML, CFT, and compliance policies designed to prevent money laundering, terrorism financing, and financial crimes."
        url="https://investnaija-mockup.netlify.app/legal/aml-policy"
      />
      <LegalLayout title="Anti-Money Laundering Policy">
        <div className="space-y-10 text-sm md:text-[15px] leading-7 text-black/70">
          {/* introduction */}
          <section className="space-y-4">
            <p>
              InvestNaija is committed to compliance with Anti-Money Laundering
              (AML), Combating the Financing of Terrorism (CFT), and Combating
              Proliferation Financing (CPF) laws and regulations to protect the
              integrity of our platform and stakeholders.
            </p>

            <p>
              This policy outlines the framework, controls, and procedures
              implemented by InvestNaija to prevent and detect financial crimes.
            </p>
          </section>

          {/* objectives */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Objectives of this policy
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Ensure compliance with applicable AML/CFT/CPF laws and
                regulations
              </li>
              <li>
                Prevent InvestNaija and its stakeholders from being used for
                illicit financial activities
              </li>
              <li>
                Establish clear preventive and monitoring measures against
                financial crimes
              </li>
            </ul>
          </section>

          {/* regulatory framework */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Regulatory framework
            </h2>

            <p>
              This policy is guided by applicable local and international
              regulations, including but not limited to:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>CBN AML/CFT/CPF Regulations 2022</li>
              <li>SEC AML/CFT/CPF Regulations 2022</li>
              <li>Money Laundering (Prohibition) Act 2022</li>
              <li>Terrorism (Prevention and Prohibition) Act 2022</li>
              <li>Banks and Other Financial Institutions Act</li>
              <li>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</li>
              <li>FATF 40 Recommendations</li>
              <li>USA PATRIOT Act</li>
              <li>OFAC Guidelines</li>
            </ul>
          </section>

          {/* governance */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Governance and oversight
            </h2>

            <p>
              The Board of Directors provides oversight over AML/CFT/CPF
              compliance and ensures proper governance structures are in place.
            </p>

            <p>
              Management is responsible for implementing approved policies and
              ensuring effective internal controls.
            </p>
          </section>

          {/* kyc and due diligence */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              KYC and due diligence
            </h2>

            <p>
              InvestNaija applies a Know Your Customer (KYC) process during
              onboarding, including verification of Bank Verification Number
              (BVN).
            </p>

            <p>
              We conduct risk-based assessments, including enhanced due
              diligence for high-risk clients and ongoing monitoring of all
              accounts.
            </p>
          </section>

          {/* transaction controls */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Transaction controls
            </h2>

            <p>
              All transactions are processed through traceable electronic
              channels such as bank transfers and direct deposits.
            </p>

            <p>
              Cash transactions are not accepted. Any suspicious activity may be
              reported to relevant regulatory authorities.
            </p>
          </section>

          {/* prohibited activities */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Prohibited activities
            </h2>

            <p>
              InvestNaija does not conduct business with individuals or entities
              involved in illegal or high-risk activities, including:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Shell companies and anonymous accounts</li>
              <li>Sanctioned individuals or jurisdictions</li>
              <li>Arms and weapons dealers</li>
              <li>Gambling and lottery-related businesses</li>
              <li>
                High-risk or unverified correspondent banking relationships
              </li>
            </ul>
          </section>

          {/* reporting */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Reporting obligations
            </h2>

            <p>
              InvestNaija complies with all regulatory reporting requirements
              and submits suspicious transaction reports where necessary.
            </p>
          </section>

          {/* training and controls */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Internal controls
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Regular employee compliance training</li>
              <li>Transaction monitoring systems</li>
              <li>Record keeping and data protection controls</li>
              <li>Periodic audits and compliance reviews</li>
            </ul>
          </section>

          {/* review */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#050505]">
              Policy review
            </h2>

            <p>
              This policy may be updated periodically to reflect regulatory or
              operational changes.
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
