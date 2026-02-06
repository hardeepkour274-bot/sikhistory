import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gurus() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandAll = () => setOpenIndex("all");
  const collapseAll = () => setOpenIndex(null);

  const isOpen = (index) => openIndex === "all" || openIndex === index;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Ik Onkar Background */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <span className="mt-6 md:mt-2 text-[140px] md:text-[220px] lg:text-[280px] text-saffron/5 select-none leading-none">
          ੴ
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight">
            The Ten Sikh Gurus
          </h1>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A divine lineage of wisdom, courage, sacrifice, and universal love —
            guiding humanity through truth, humility, and seva.
          </p>

          {/* Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="px-5 py-2.5 rounded-2xl bg-navy text-white font-semibold hover:opacity-90 transition shadow-sm"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-5 py-2.5 rounded-2xl border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition shadow-sm"
            >
              Collapse All
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 space-y-5">
          {gurusEN.map((guru, index) => (
            <GuruCard
              key={index}
              index={index}
              title={guru.title}
              years={guru.years}
              text={guru.text}
              isOpen={isOpen(index)}
              toggle={toggle}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center text-gray-500 text-sm">
          Read with respect • Learn with love • Share with humility
        </div>
      </div>
    </section>
  );
}

/* ================= GURU CARD ================= */

function GuruCard({ title, years, text, index, isOpen, toggle }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl overflow-hidden bg-white border shadow-sm transition-all
        ${
          isOpen
            ? "border-saffron/60 shadow-md ring-1 ring-saffron/20"
            : "border-gray-200 hover:border-gray-300"
        }`}
    >
      {/* Header */}
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left hover:bg-saffron/5 transition"
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <div className="flex flex-col items-center min-w-[40px]">
            <span className="text-xs text-gray-500 font-medium">GURU</span>
            <span className="text-lg font-extrabold text-saffron leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-navy leading-snug">
              {title}
            </h3>

            {years && (
              <span className="inline-flex mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                {years}
              </span>
            )}
          </div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-saffron text-xl"
        >
          ▼
        </motion.span>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="px-5 md:px-6 pb-5 md:pb-6"
          >
            <div className="h-px bg-gray-100 mb-4" />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ================= DATA ================= */

const gurusEN = [
  {
    title: "Guru Nanak Dev Ji",
    years: "1469–1539",
    text:
      "Founder of Sikh Dharam. He preached Ik Onkar, equality of all humanity, rejection of caste, and living truthfully through Naam Simran and selfless service."
  },
  {
    title: "Guru Angad Dev Ji",
    years: "1504–1552",
    text:
      "Second Sikh Guru. He standardized the Gurmukhi script and promoted discipline, education, and humility."
  },
  {
    title: "Guru Amar Das Ji",
    years: "1479–1574",
    text:
      "Third Sikh Guru. Strengthened Langar, promoted women’s equality, and organized Sikh institutions."
  },
  {
    title: "Guru Ram Das Ji",
    years: "1534–1581",
    text:
      "Fourth Sikh Guru. Founder of Amritsar and composer of hymns in Guru Granth Sahib Ji."
  },
  {
    title: "Guru Arjan Dev Ji",
    years: "1563–1606",
    text:
      "Fifth Sikh Guru. Compiled Guru Granth Sahib Ji and became the first Sikh martyr."
  },
  {
    title: "Guru Hargobind Sahib Ji",
    years: "1595–1644",
    text:
      "Sixth Sikh Guru. Introduced Miri-Piri, balancing spiritual and temporal authority."
  },
  {
    title: "Guru Har Rai Ji",
    years: "1630–1661",
    text:
      "Seventh Sikh Guru. Known for compassion, peace, and care for nature."
  },
  {
    title: "Guru Har Krishan Ji",
    years: "1656–1664",
    text:
      "Eighth Sikh Guru. Served the sick selflessly during epidemics at a very young age."
  },
  {
    title: "Guru Tegh Bahadur Ji",
    years: "1621–1675",
    text:
      "Ninth Sikh Guru. Martyred to protect religious freedom and human rights."
  },
  {
    title: "Guru Gobind Singh Ji",
    years: "1666–1708",
    text:
      "Tenth Sikh Guru. Founded the Khalsa Panth and declared Guru Granth Sahib Ji as the eternal Guru."
  }
];
