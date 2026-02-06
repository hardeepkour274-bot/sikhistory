import { useMemo, useState } from "react";
import Container from "../components/Container";
import { sakhiyan } from "../data/sakhiyan";
import { motion, AnimatePresence } from "framer-motion";

export default function Sakhiyan() {
  const [activeGuru, setActiveGuru] = useState("all");

  const guruOptions = useMemo(() => {
    const unique = Array.from(
      new Set(sakhiyan.map((s) => `${s.guruNumber}|${s.guru}`))
    )
      .map((x) => {
        const [num, name] = x.split("|");
        return { guruNumber: Number(num), guru: name };
      })
      .sort((a, b) => a.guruNumber - b.guruNumber);

    return unique;
  }, []);

  const filtered = useMemo(() => {
    if (activeGuru === "all") return sakhiyan;
    return sakhiyan.filter((s) => s.guruNumber === Number(activeGuru));
  }, [activeGuru]);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 12,
      scale: 0.98,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950">
      <Container>
        {/* White Panel */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200/70 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 md:px-10 py-8 md:py-10 border-b border-slate-200">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Sakhiyan{" "}
              <span className="text-slate-500">(Stories of the Gurus)</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="text-slate-600 mt-3 max-w-3xl leading-relaxed"
            >
              A curated collection of meaningful Sakhiyan from Guru Nanak Dev Ji
              to Guru Gobind Singh Ji — focused on values, teachings, and
              real-life lessons.
            </motion.p>

            {/* Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -1 }}
                onClick={() => setActiveGuru("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                  ${
                    activeGuru === "all"
                      ? "bg-slate-900 text-white border-slate-900 shadow"
                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                  }`}
              >
                All Gurus
              </motion.button>

              {guruOptions.map((g) => (
                <motion.button
                  key={g.guruNumber}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveGuru(String(g.guruNumber))}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition
                    ${
                      activeGuru === String(g.guruNumber)
                        ? "bg-slate-900 text-white border-slate-900 shadow"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                    }`}
                >
                  {g.guruNumber}. {g.guru.split(" ")[0]}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Cards Section */}
          <div className="px-6 md:px-10 py-8">
            <motion.div
              variants={gridVariants}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((s) => (
                  <motion.article
                    layout
                    key={s.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Guru info */}
                    <div className="text-xs font-medium text-slate-500">
                      Guru {s.guruNumber} • {s.guru}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold mt-2 text-slate-900 group-hover:text-slate-950">
                      {s.title}
                    </h2>

                    {/* Summary (Scrollable only this section) */}
                    <div className="relative mt-2">
                      <div className="h-28 overflow-y-auto pr-2 text-sm text-slate-600 leading-relaxed scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                        {s.summary}
                      </div>

                      {/* Fade bottom */}
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    {/* Footer */}
                    <div className="mt-5 pt-5 border-t border-slate-200">
                      <p className="text-sm font-semibold text-slate-900">
                        Message:{" "}
                        <span className="font-normal text-slate-600">
                          {s.message}
                        </span>
                      </p>

                      {s.location && (
                        <p className="text-xs text-slate-500 mt-2">
                          📍 {s.location}
                        </p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 text-slate-500"
              >
                No Sakhiyan found for this Guru.
              </motion.div>
            )}
          </div>
        </motion.section>
      </Container>
    </div>
  );
}

