import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Privacy Policy", path: "/legal/privacy-policy" },
  { label: "Terms of Use", path: "/legal/terms-of-use" },
  { label: "Risk Disclosure", path: "/legal/risk-disclosure" },
  { label: "AML Policy", path: "/legal/aml-policy" },
];

export default function LegalSidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:block fixed top-38 right-4 md:right-40 z-40">
      <div className="w-64 overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e55356]">
            Legal
          </p>

          <p className="mt-1 text-sm text-gray-500">Policies & disclosures</p>
        </div>

        {/* Links */}
        <div className="p-2">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative mb-1 flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#e55356]/10 text-[#e55356]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`mr-3 h-2 w-2 rounded-full transition-all ${
                    active
                      ? "bg-[#e55356] scale-100"
                      : "bg-gray-300 scale-75 group-hover:scale-100"
                  }`}
                />

                <span>{link.label}</span>

                {/* Active glow */}
                {active && (
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-[#e55356]/20" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
