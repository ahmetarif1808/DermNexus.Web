"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

const stats = [
  {
    label: "B2B",
    subtitle: "Kurumsal Çözüm",
    desc: "API entegrasyonlarıyla kozmetik firmalarına gerçek zamanlı içerik ve uyumluluk analizi.",
  },
  {
    label: "B2C",
    subtitle: "Bireysel Deneyim",
    desc: "Cilt profiline göre kişiselleştirilmiş ürün önerileri ve kimyasal çakışma uyarıları.",
  },
  {
    label: "RAG",
    subtitle: "Mimari Altyapı",
    desc: "Retrieval‑Augmented Generation ile güncel bilimsel literatüre dayalı canlı veri erişimi.",
  },
];

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center min-h-[calc(100vh-64px)] px-6 md:px-16 lg:px-24 py-24"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-5xl w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Label */}
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <motion.span
              className="block h-px"
              style={{ background: "#0891b2" }}
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#0891b2" }}
            >
              Derin Teknoloji · Kozmetik Kimyası
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="font-heading font-light mb-8"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              color: "#0f2744",
            }}
          >
            Cilt Analizinde ve
            <br />
            Kozmetik Kimyasında
            <br />
            <em
              className="font-heading"
              style={{ color: "#0891b2", fontStyle: "italic", fontWeight: 300 }}
            >
              Yapay Zekâ
            </em>{" "}
            Dönemi
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ color: "#64748b", maxWidth: "560px", fontWeight: 300 }}
          >
            Farklı markaların kozmetik ürünleri arasındaki kimyasal çakışmaları
            ve cilt uyumunu RAG mimarisiyle denetleyen, çift taraflı bir derin
            teknoloji ekosistemi.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <motion.a
              href="#waitlist"
              className="btn-teal inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
            >
              Bekleme Listesine Katıl
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#about"
              className="btn-outline-navy inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
            >
              Teknolojimiz
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ borderTop: "1px solid #e8e2d9" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="pt-8 pb-4 pr-8"
                style={i > 0 ? { borderLeft: "1px solid #e8e2d9", paddingLeft: "2rem" } : {}}
              >
                <div
                  className="font-heading font-light leading-none mb-3"
                  style={{ fontSize: "3.5rem", color: "#0f2744", letterSpacing: "-0.02em" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-[0.14em] mb-2"
                  style={{ color: "#0891b2" }}
                >
                  {s.subtitle}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontWeight: 300 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
