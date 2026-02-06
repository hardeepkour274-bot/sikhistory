import { motion } from "framer-motion";
import { sikhFigures } from "../data/sikhFigures";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Shaheeds() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-orange-50" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-400/20 blur-[140px] rounded-full" />

      <div className="pt-28 max-w-7xl mx-auto px-4">

        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-navy text-center mb-4"
        >
          Sikh Shaheeds
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
        >
          Remembering the brave souls who embraced Shaheedi for truth, justice,
          and the protection of Dharam.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {sikhFigures.shaheeds.map((s, i) => (
            <motion.div
              key={s.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i + 2}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur rounded-3xl p-7 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Accent */}
              <div className="w-12 h-1 bg-orange-500 rounded-full mb-4" />

              {/* Name */}
              <h2 className="text-xl font-semibold text-navy mb-1">
                {s.name}
              </h2>

              {/* Year */}
              {s.shaheediYear && (
                <p className="text-sm text-orange-600 font-medium mb-3">
                  Shaheedi • {s.shaheediYear}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {s.howShaheediHappened}
              </p>

              {/* Significance */}
              <div className="border-t pt-3 text-sm font-medium text-gray-900">
                {s.significance}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-orange-400/0 group-hover:ring-orange-400/40 transition pointer-events-none" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
