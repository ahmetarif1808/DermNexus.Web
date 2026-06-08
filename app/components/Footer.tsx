import Image from "next/image";

const contacts = [
  { label: "Genel İletişim", email: "info@dermnexus.com.tr" },
  { label: "Ahmet Arif İsen", email: "ahmet@dermnexus.com.tr" },
  { label: "Defne Küpeli", email: "defne@dermnexus.com.tr" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #e8e2d9" }}>
      {/* Contact */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-2">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px" style={{ background: "#0891b2" }} />
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#0891b2" }}
          >
            İletişim
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          {contacts.map((c) => (
            <div key={c.email} className="flex flex-col gap-1">
              <span
                className="text-xs font-medium"
                style={{ color: "#94a3b8", letterSpacing: "0.02em" }}
              >
                {c.label}
              </span>
              <a
                href={`mailto:${c.email}`}
                className="footer-mail text-sm font-medium break-all"
                style={{ color: "#0f2744" }}
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 mt-10"
        style={{ borderTop: "1px solid #e8e2d9" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/derm_nexus_logo.png"
            alt="DermNexus"
            width={28}
            height={28}
            className="object-contain"
          />
          <div>
            <p
              className="font-heading font-semibold text-base leading-tight"
              style={{ color: "#0f2744", letterSpacing: "-0.01em" }}
            >
              DermNexus
            </p>
            <p className="text-xs" style={{ color: "#94a3b8" }}>
              Skin Type Classification & Cosmetic Guidance
            </p>
          </div>
        </div>

        {/* Center */}
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          © 2026 DermNexus. Tüm hakları saklıdır.
        </p>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#0891b2" }}
          />
          <span className="text-xs font-medium" style={{ color: "#94a3b8", letterSpacing: "0.04em" }}>
            Stealth Mode
          </span>
        </div>
      </div>
    </footer>
  );
}
