import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Nitnem() {
  return (
    <section className="relative max-w-5xl mx-auto px-4 py-16">
      {/* Ik Onkar Watermark */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <span className="text-[180px] text-saffron/5 select-none">ੴ</span>
      </div>

      <motion.div initial="hidden" animate="visible" className="relative">
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-navy mb-6 text-center"
          variants={fadeUp}
        >
          Nitnem
        </motion.h1>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-14 text-gray-700 text-lg"
          variants={fadeUp}
          custom={1}
        >
          Nitnem is the daily spiritual discipline of Sikhs — a sacred rhythm
          of prayer that nurtures humility, clarity, strength, and devotion
          to Waheguru.
        </motion.p>

        {/* Bani Sections */}
        <div className="space-y-8">
          <BaniSection
            index={1}
            title="Japji Sahib"
            description="Composed by Guru Nanak Dev Ji, Japji Sahib reveals the nature of God,
            the purpose of life, and the path to spiritual realization."
            yt="https://share.google/1LriBAlDmQ1rR8EyZ"
          />

          <BaniSection
            index={2}
            title="Jaap Sahib"
            description="Written by Guru Gobind Singh Ji, Jaap Sahib glorifies the infinite
            attributes of Waheguru in powerful poetic form."
            yt="https://youtu.be/V0yK9gjb-uA?si=ARV19Eig33-9MMNc"
          />

          <BaniSection
            index={3}
            title="Tav Prasad Savaiye"
            description="This Bani rejects hollow rituals and emphasizes pure devotion
            and remembrance of God."
            yt="https://youtu.be/k0i6G9Vn974?si=rord8A0KKQp0Cq4H"
          />

          <BaniSection
            index={4}
            title="Chaupai Sahib"
            description="A prayer for protection, courage, and divine grace,
            composed by Guru Gobind Singh Ji."
            yt="https://youtu.be/21Zth-_kn-w?si=Nixpa2zp4l28pFIc"
          />

          <BaniSection
            index={5}
            title="Anand Sahib"
            description="Composed by Guru Amar Das Ji, Anand Sahib describes the
            eternal joy attained through union with Waheguru."
            yt="https://youtu.be/vc3QMm8cDSo?si=M5s9NS5RXxACCvEJ"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- BANI CARD ---------------- */

function BaniSection({ title, description, yt, index, children }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="relative rounded-2xl bg-white border border-gray-200
                 shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <span className="text-xs font-semibold text-saffron mt-1">
          {String(index).padStart(2, "0")}
        </span>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-navy">
            {title}
          </h2>
          <p className="text-gray-600 mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Actions */}
      <a
        href={yt}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-saffron font-medium
                   hover:underline mt-2"
      >
        ▶ Listen on YouTube
      </a>

      {/* Gurbani Text */}
      {children && (
        <div className="mt-6 whitespace-pre-line text-sm md:text-base
                        leading-relaxed text-gray-800 border-t pt-4">
          {children}
        </div>
      )}
    </motion.div>
  );
}
