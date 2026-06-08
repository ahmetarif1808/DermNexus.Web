"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const cardsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type Member = {
  initial: string;
  name: string;
  role: string;
  tags: string[];
  isFounder?: boolean;
  email?: string;
};

const founders: Member[] = [
  {
    initial: "A",
    name: "Ahmet Arif İsen",
    role: "Kurucu Ortak",
    tags: ["Yazılım Mühendisliği", "AI / ML", "Sistem Mimarisi"],
    isFounder: true,
    email: "ahmet@dermnexus.com.tr",
  },
  {
    initial: "D",
    name: "Defne Küpeli",
    role: "Kurucu Ortak",
    tags: ["Yönetim", "İş Geliştirme", "Kozmetik Sektörü"],
    isFounder: true,
    email: "defne@dermnexus.com.tr",
  },
];

const advisors: Member[] = [
  {
    initial: "H",
    name: "Prof. Dr. Halil İbrahim Uğraş",
    role: "Akademik Danışman",
    tags: ["Akademik Danışmanlık", "Araştırma"],
  },
  {
    initial: "A",
    name: "Dr. Asiye Bilgili",
    role: "Yazılım Danışmanı",
    tags: ["Yazılım Danışmanlığı", "Ar-Ge"],
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: "#f5f3ee" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px" style={{ background: "#0891b2" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#0891b2" }}>
              Kurumsal Kimlik
            </span>
          </div>
          <h2
            className="font-heading font-light"
            style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", lineHeight: 1.1, color: "#0f2744", letterSpacing: "-0.01em" }}
          >
            Ekibimiz & Danışma Kurulu
          </h2>
        </motion.div>

        {/* Founders */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-6" style={{ color: "#94a3b8" }}>
            Kurucu Ortaklar
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {founders.map((m) => (
              <motion.div key={m.name} variants={cardVariants}>
                <MemberCard member={m} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="my-12" style={{ borderTop: "1px solid #e8e2d9" }} />

        {/* Advisors */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-6" style={{ color: "#94a3b8" }}>
            Akademik & Yazılım Danışmanları
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {advisors.map((m) => (
              <motion.div key={m.name} variants={cardVariants}>
                <MemberCard member={m} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div
      className="team-card flex items-start gap-5 p-6 rounded-xl"
      style={member.isFounder ? { borderLeft: "2px solid #0891b2" } : {}}
    >
      <div
        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-heading text-lg font-semibold"
        style={{ background: "#0f2744", color: "#ffffff" }}
      >
        {member.initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <p className="font-heading text-lg font-semibold" style={{ color: "#0f2744", letterSpacing: "-0.01em" }}>
            {member.name}
          </p>
          {member.isFounder && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm"
              style={{ background: "rgba(8,145,178,0.08)", color: "#0891b2" }}
            >
              Co-Founder
            </span>
          )}
        </div>
        <p className="text-xs font-medium mb-4" style={{ color: "#0891b2", letterSpacing: "0.02em" }}>
          {member.role}
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="footer-mail inline-block text-xs font-medium mb-4 break-all"
            style={{ color: "#64748b" }}
          >
            {member.email}
          </a>
        )}
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md"
              style={{ background: "#f5f3ee", color: "#64748b", border: "1px solid #e8e2d9" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
