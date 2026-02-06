import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function GurudwaraGallery() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Ik Onkar Background */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
        <span className="text-[180px] text-saffron/5 select-none">ੴ</span>
      </div>

      {/* Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative text-3xl md:text-5xl font-extrabold text-navy text-center mb-4"
      >
        Gurudwaras of Sikh Heritage
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="relative text-center text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Sacred places that reflect Sikh history, devotion, sacrifice, and
        divine presence.
      </motion.p>

      {/* Gallery Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gurudwaras.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 2}
            whileHover={{ y: -4 }}
            className="rounded-xl overflow-hidden bg-white
                       border border-gray-200 shadow-sm
                       hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover
                           transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Name */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-navy text-lg">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- DATA ---------------- */

const gurudwaras = [
    {
    name: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar - Punjab",
    image: "/gurudwaraSahib/goldenTemple.jpg",
  },
  {
    name: "Sri Akal Takht Sahib",
    location: "Amritsar - Punjab",
    image: "/gurudwaraSahib/shriAkalTakhtSahib.jpg",
  },
  {
    name: "Takht Sri Keshgarh Sahib",
    location: "Anandpur Sahib - Punjab",
    image: "/gurudwaraSahib/anandpurSahib.jpg",
  },
  {
    name: "Takht Sri Patna Sahib",
    location: "Patna - Bihar",
    image: "/gurudwaraSahib/patnaSahib.webp",
    
  },
  {
    name: "Takht Sri Hazur Sahib",
    location: "Nanded, Maharashtra",
    image: "/gurudwaraSahib/hazoorSahib.jpg",
  },
  {
    name: "Takht Sri Damdama Sahib",
    location: "Talwandi Sabo - Punjab",
    image: "/gurudwaraSahib/damdamaSahib.jpg",
  },
  {
    name: "Nankana Sahib",
    location: "Punjab - Pakistan",
    image: "/gurudwaraSahib/nankanaSahib.jpg",
  },
   {
    name: "Kartarpur Sahib",
    location: "Punjab - Pakistan",
    image: "/gurudwaraSahib/kartarpurSahib.webp",
  },
  {
    name: "Bangla Sahib",
    location: "New Delhi - India",
    image: "/gurudwaraSahib/banglaSahib.jpg",
  },
  
];
