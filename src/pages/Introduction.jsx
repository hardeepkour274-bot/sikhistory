import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const cardFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function Introduction() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16 leading-relaxed">
        <motion.div initial="hidden" animate="visible">

          {/* TITLE */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-4"
            variants={fadeUp}
          >
            Introduction to Sikh History
          </motion.h1>

          {/* DIVIDER */}
          <motion.div
            className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-10"
            variants={fadeUp}
            custom={1}
          />

          {/* INTRO CARD */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-10"
            variants={cardFade}
            custom={2}
          >
            <p className="mb-4 text-gray-700">
              Sikh Dharam is a spiritual and universal path founded by
              <strong className="text-navy"> Guru Nanak Dev Ji</strong> in the
              15th century. It is based on the belief in
              <strong className="text-navy"> One Supreme Creator</strong>,
              known as <strong className="text-navy">Ik Onkar</strong>.
            </p>

            <p className="text-gray-700">
              Sikhism teaches that God is formless, eternal, fearless,
              beyond hatred, and present everywhere. God does not belong
              to one religion, nation, or gender, but to all of humanity.
            </p>
          </motion.div>

          {/* SECTION: SIKH & GURMAT */}
          <motion.div variants={cardFade} custom={3}
            className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10"
          >
            <h2 className="text-2xl font-semibold text-navy mb-4">
              Meaning of Sikh & Gurmat
            </h2>
            <p className="text-gray-700">
              The word <strong>Sikh</strong> means “learner” or “disciple”.
              A Sikh is one who learns and lives according to
              <strong> Gurmat</strong> — the divine wisdom of the Guru.
            </p>
          </motion.div>

          {/* SECTION: PURPOSE */}
          <motion.div variants={cardFade} custom={4}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-10"
          >
            <h2 className="text-2xl font-semibold text-navy mb-4">
              Purpose of Human Life
            </h2>
            <p className="text-gray-700">
              According to Sikh Dharam, the purpose of human life is to
              remember God, live truthfully, serve others, and overcome ego.
              Liberation (<strong>Mukti</strong>) is achieved through righteous
              living — not rituals or renunciation.
            </p>
          </motion.div>

          {/* THREE PILLARS */}
          <motion.div variants={cardFade} custom={5}
            className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10"
          >
            <h2 className="text-2xl font-semibold text-navy mb-6">
              Three Pillars of Sikhism
            </h2>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Naam Japna</strong> — Remembering and meditating on God
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Kirat Karni</strong> — Earning an honest living
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  <strong>Vand Chakna</strong> — Sharing with others
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CLOSING */}
          <motion.p
            className="text-center text-gray-700 max-w-3xl mx-auto"
            variants={fadeUp}
            custom={6}
          >
            Sikh Dharam promotes equality, justice, compassion, and selfless
            service, guiding Sikhs to live spiritually while actively
            contributing to society.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}
