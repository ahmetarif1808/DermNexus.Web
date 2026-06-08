import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #e8e2d9" }}>
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

        {/* Contact */}
        <a
          href="mailto:info@dermnexus.com.tr"
          className="footer-mail text-xs"
          style={{ color: "#94a3b8" }}
        >
          info@dermnexus.com.tr
        </a>
      </div>
    </footer>
  );
}
