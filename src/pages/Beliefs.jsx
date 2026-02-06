import { motion } from "framer-motion";

export default function Beliefs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
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

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-16">
      {/* Ik Onkar Background */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <span className="text-[160px] text-saffron/5 select-none">ੴ</span>
      </div>

      {/* Title */}
      <motion.h1
        className="relative text-3xl md:text-5xl font-extrabold text-navy mb-6 text-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        Sikh Beliefs
      </motion.h1>

      {/* Intro Card */}
      <motion.div
        className="relative bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 border border-gray-100"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <p className="text-lg leading-relaxed text-gray-700">
          Sikhism is a monotheistic faith founded on belief in{" "}
          <span className="font-semibold text-saffron">
            One God (Ik Onkar)
          </span>
          , who is eternal, formless, and present in all creation. Sikhs
          strive to live truthfully while remaining humble, compassionate,
          and devoted to selfless service.
        </p>
      </motion.div>

      {/* Belief Cards */}
      <div className="relative grid gap-6 md:grid-cols-2 mb-10">
        <motion.div
          className="bg-gradient-to-br from-white to-saffron/5 rounded-xl p-6 shadow-sm border"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h3 className="text-lg font-semibold text-navy mb-2">
            Hukam (Divine Will)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A central teaching of Sikhism is accepting{" "}
            <span className="font-semibold">Hukam</span> — the Divine Will.
            True peace is achieved by aligning one’s actions with humility,
            righteousness, and selfless service.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-white to-saffron/5 rounded-xl p-6 shadow-sm border"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <h3 className="text-lg font-semibold text-navy mb-2">
            Equality of Humanity
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Sikhism firmly rejects discrimination based on caste, gender,
            or status. All human beings are equal in the eyes of God.
          </p>
        </motion.div>
      </div>

      {/* Five Thieves */}
      <motion.div
        className="relative bg-navy text-white rounded-2xl p-8 shadow-lg"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <h2 className="text-2xl font-bold mb-4 text-saffron">
          The Five Inner Obstacles
        </h2>

        <p className="mb-4 text-white/90">
          Sikh teachings identify five major inner vices that obstruct
          spiritual growth and inner peace:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Ego (Haumai)",
            "Greed (Lobh)",
            "Anger (Krodh)",
            "Attachment (Moh)",
            "Pride (Ahankar)",
          ].map((item, i) => (
            <li
              key={i}
              className="bg-white/10 rounded-lg px-4 py-2 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
