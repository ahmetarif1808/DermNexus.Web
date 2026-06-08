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
    tags: ["Yönetim", "İş Geliştirme", "Sistem Mimarisi"],
    isFounder: true,
    email: "ahmet@dermnexus.com.tr",
  },
  {
    initial: "D",
    name: "Defne Küpeli",
    role: "Kurucu Ortak",
    tags: ["Yazılım Mühendisliği", "AI / ML", "Kozmetik Sektörü"],
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
              <motion.div key={m.name} variants={cardVariants} className="h-full">
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
              <motion.div key={m.name} variants={cardVariants} className="h-full">
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
      className={`team-card flex items-start gap-5 p-6 sm:p-7 rounded-2xl h-full${
        member.isFounder ? " is-founder" : ""
      }`}
    >
      <div className="team-avatar shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-heading text-xl font-semibold">
        {member.initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <p className="font-heading text-lg font-semibold" style={{ color: "#0f2744", letterSpacing: "-0.01em" }}>
            {member.name}
          </p>
          {member.isFounder && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: "rgba(8,145,178,0.1)", color: "#0891b2" }}
            >
              Co-Founder
            </span>
          )}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-4" style={{ color: "#0891b2" }}>
          {member.role}
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="footer-mail inline-flex items-center gap-1.5 text-xs font-medium mb-4 break-all"
            style={{ color: "#64748b" }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            {member.email}
          </a>
        )}
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag) => (
            <span key={tag} className="team-tag text-xs px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
