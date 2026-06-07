"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const cardsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const pillars = [
  {
    title: "INCI Analizi",
    desc: "İçerik etiketlerindeki INCI bileşenlerini otomatik olarak ayrıştırıyor, ürünler arasındaki kimyasal çakışmaları ve cilt uyumunu tespit ediyoruz.",
  },
  {
    title: "RAG Sistemi",
    desc: "Retrieval-Augmented Generation mimarisi ile güncel kozmetik veritabanları ve bilimsel literatür gerçek zamanlı olarak sorgulanabiliyor.",
  },
  {
    title: "Veri Mühendisliği",
    desc: "AB ve Türkiye kozmetik mevzuatına uygun regülasyon denetimi, uyumluluk raporlaması ve yapılandırılmış bileşen veritabanı yönetimi.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ background: "#0891b2" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#0891b2" }}>
              Ar-Ge Odağımız
            </span>
          </div>
          <h2
            className="font-heading font-light"
            style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#0f2744", letterSpacing: "-0.01em" }}
          >
            Teknolojimizin Temelleri
          </h2>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "1px solid #e8e2d9" }}
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="about-card flex flex-col pt-10 pb-6 pr-10"
              style={i > 0 ? { borderLeft: "1px solid #e8e2d9", paddingLeft: "2.5rem" } : {}}
            >
              <motion.div
                className="mb-8"
                style={{ height: "2px", background: "#0891b2" }}
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease }}
              />
              <h3
                className="font-heading text-2xl md:text-3xl mb-4"
                style={{ color: "#0f2744", fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748b", fontWeight: 300, lineHeight: 1.8 }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
