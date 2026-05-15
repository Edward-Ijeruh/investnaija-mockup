import LegalLayout from "../../components/legal/LegalLayout";

export default function RiskDisclosure() {
  return (
    <LegalLayout title="Risk Disclosure">
      <div className="space-y-10 text-sm md:text-[15px] leading-7 text-black/70">
        {/* intro */}
        <section className="space-y-4">
          <p>InvestNaija – Investment Notice.</p>

          <p>
            All clients (existing and prospective) are advised to carefully read
            and understand the risk disclosures contained in this document
            before making any investment decisions.
          </p>

          <p>
            Investing involves risk, including the possible loss of capital. The
            value of your investments may rise or fall, and you may receive back
            less than your original investment.
          </p>

          <p>
            This document does not cover all risks involved in investing.
            Clients are strongly encouraged to seek independent financial,
            legal, and tax advice before investing.
          </p>
        </section>

        {/* market risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">Market risk</h2>

          <p>
            Market risk is the risk of losses due to changes in market prices of
            financial instruments. It affects all asset classes and cannot be
            eliminated completely.
          </p>

          <p>
            Key drivers include interest rates, equity prices, commodity prices,
            and foreign exchange movements.
          </p>
        </section>

        {/* interest rate risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Interest rate risk
          </h2>

          <p>
            Interest rate risk arises from fluctuations in interest rates,
            particularly affecting fixed income securities such as bonds.
          </p>

          <p>
            When interest rates rise, bond prices typically fall. When interest
            rates fall, bond prices typically rise.
          </p>
        </section>

        {/* equity risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">Equity risk</h2>

          <p>
            Equity investments may experience significant price fluctuations
            over short periods.
          </p>

          <p>
            These movements may result from company performance, market
            conditions, or broader economic and political developments.
          </p>
        </section>

        {/* foreign exchange risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Foreign exchange risk
          </h2>

          <p>
            Investments denominated in foreign currencies are exposed to
            exchange rate fluctuations.
          </p>

          <p>
            Changes in currency values may increase or decrease the value of
            your investments.
          </p>
        </section>

        {/* fixed income risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Fixed income risk
          </h2>

          <p>
            Fixed income securities carry risks such as interest rate risk,
            credit risk, inflation risk, and currency risk.
          </p>

          <p>
            Although they provide regular interest payments, they are still
            subject to market volatility and issuer default risk.
          </p>
        </section>

        {/* commodity risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Commodity risk
          </h2>

          <p>
            Commodity prices may fluctuate due to supply and demand conditions,
            affecting both producers and buyers.
          </p>

          <p>
            These fluctuations may impact financial performance and investment
            returns.
          </p>
        </section>

        {/* etf risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Exchange-traded fund risk
          </h2>

          <p>
            Exchange-traded funds (ETFs) may not perfectly track their
            underlying index or asset class.
          </p>

          <p>
            ETF values may fluctuate, trade at discounts or premiums, and may
            involve leverage or complex strategies that increase risk.
          </p>
        </section>

        {/* credit risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">Credit risk</h2>

          <p>
            Credit risk refers to the possibility that an issuer may fail to
            meet its financial obligations.
          </p>

          <p>Lower credit ratings typically indicate higher risk of default.</p>
        </section>

        {/* inflation risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Inflation risk
          </h2>

          <p>Inflation reduces the purchasing power of money over time.</p>

          <p>
            If investment returns do not exceed inflation, the real value of
            your returns may decline.
          </p>
        </section>

        {/* foreign investment risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Foreign investment risk
          </h2>

          <p>
            Investing in foreign markets involves additional risks such as
            currency fluctuations, political instability, and regulatory
            differences.
          </p>

          <p>
            Access to reliable information may also be limited compared to
            domestic investments.
          </p>
        </section>

        {/* liquidity risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Liquidity risk
          </h2>

          <p>
            Liquidity risk refers to the difficulty of buying or selling an
            asset quickly without affecting its price.
          </p>

          <p>
            In some market conditions, assets may become illiquid, making them
            harder to sell at fair value.
          </p>
        </section>

        {/* counterparty risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Counterparty risk
          </h2>

          <p>
            Counterparty risk is the possibility that one party in a financial
            transaction may fail to fulfill its obligations.
          </p>

          <p>
            InvestNaija works with regulated systems to help reduce exposure to
            counterparty failures where applicable.
          </p>
        </section>

        {/* political risk */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[#050505]">
            Political risk
          </h2>

          <p>
            Political and regulatory changes can significantly impact financial
            markets and investment performance.
          </p>

          <p>
            Investors should remain aware of government policies and economic
            conditions that may affect their investments.
          </p>
        </section>

        {/* disclaimer */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#050505]">
            Important notice
          </h2>

          <p>
            This document is not exhaustive and does not guarantee protection
            against all risks associated with investing.
          </p>

          <p>
            You are solely responsible for your investment decisions and should
            seek independent professional advice where necessary.
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
  );
}
