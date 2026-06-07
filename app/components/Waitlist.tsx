"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

type Status = "idle" | "success" | "error" | "duplicate";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [loading, setLoading] = useState(false);

  const errorMessage: Record<string, string> = {
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    duplicate: "Bu e-posta zaten kayıtlı.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) { setStatus("error"); return; }

    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: email.toLowerCase().trim() }]);

    setLoading(false);

    if (error) {
      setStatus(error.code === "23505" ? "duplicate" : "error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  const isErrorState = status === "error" || status === "duplicate";

  return (
    <section
      id="waitlist"
      className="py-24 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: "#0f2744" }}
    >
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* ── Left ── */}
        <motion.div variants={item}>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px" style={{ background: "#0891b2" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#0891b2" }}>
              Çok Yakında
            </span>
          </div>
          <h2
            className="font-heading font-light mb-6"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", lineHeight: 1.08, color: "#ffffff", letterSpacing: "-0.01em" }}
          >
            Beta&apos;ya{" "}
            <em className="font-heading" style={{ color: "#38bdf8", fontStyle: "italic", fontWeight: 300 }}>
              İlk Siz
            </em>
            <br />
            Girin
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#94a3b8", fontWeight: 300, maxWidth: "380px" }}>
            Mobil uygulamamız ve B2B API entegrasyonlarımız için kapalı beta
            testleri çok yakında başlıyor. İlk deneyenlerden biri olmak için
            e-posta adresinizi bırakın.
          </p>
        </motion.div>

        {/* ── Right — form ── */}
        <motion.div variants={item}>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="rounded-xl p-10 flex flex-col items-start gap-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(8,145,178,0.2)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg mb-1" style={{ color: "#ffffff" }}>Kaydınız alındı.</p>
                <p className="text-sm" style={{ color: "#64748b" }}>Beta lansmanında sizi bilgilendireceğiz.</p>
              </div>
            </motion.div>
          ) : (
            <div
              className="rounded-xl p-8 md:p-10"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm font-medium mb-6" style={{ color: "#94a3b8" }}>
                Erken erişim için kaydolun
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (isErrorState) setStatus("idle");
                    }}
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-4 rounded-md text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      color: "#ffffff",
                      border: isErrorState
                        ? "1px solid rgba(248,113,113,0.6)"
                        : "1px solid rgba(255,255,255,0.12)",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      if (!isErrorState) e.target.style.border = "1px solid rgba(8,145,178,0.6)";
                    }}
                    onBlur={(e) => {
                      if (!isErrorState) e.target.style.border = "1px solid rgba(255,255,255,0.12)";
                    }}
                  />
                  {isErrorState && (
                    <p className="mt-1.5 text-xs flex items-center gap-1.5" style={{ color: "#f87171" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {status === "error" && !email.includes("@")
                        ? "Geçerli bir e-posta adresi girin."
                        : errorMessage[status]}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-teal w-full py-4 text-sm font-semibold rounded-md flex items-center justify-center gap-2"
                  style={{ opacity: loading ? 0.7 : 1 }}
                  whileHover={loading ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Kaydediliyor…
                    </>
                  ) : "Haberdar Et"}
                </motion.button>
              </form>
              <p className="mt-5 text-xs" style={{ color: "#334155" }}>
                Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
