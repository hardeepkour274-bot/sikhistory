import { motion } from "framer-motion";

const images = [
  { src: "/images/gurunanakji.jpg", name: "Guru Nanak Dev Ji" },
  { src: "/images/guruAngadJi.jpg", name: "Guru Angad Dev Ji" },
  { src: "/images/guruAmarDasJI.jpg", name: "Guru Amar DasJi" },
  { src: "/images/guruRamDasji.jpg", name: "Guru Ram Das Ji" },
  { src: "/images/guruArjanDevJi.jpg", name: "Guru Arjan Dev Ji" },
  { src: "/images/GuruHargobindSahib.jpg", name: "Guru Hargobind Sahib Ji" },
  { src: "/images/guruHarirai ji.jpg", name: "Guru Har Rai Ji" },
  { src: "/images/guruHarKrishanJI.jpg", name: "Guru Har Krishan Ji" },
  { src: "/images/guruTegBahadur.jpg", name: "Guru Teg Bahadur Ji" },
  { src: "/images/guruGobindSingh.jpg", name: "Guru Gobind Singh Ji" },
  { src: "/images/guruGranthSahib.jpg", name: "Guru Granth Sahib Ji" },
  { src: "/images/allGurus.jpg", name: "All Ten Sikh Gurus" },
  { src: "/images/golden-temple.jpg", name: "Sri Harmandir Sahib" },
  { src: "/images/babaDeepSingh ji.jpg", name: "Baba Deep Singh Ji" },
  { src: "/images/shreeChandJi.jpg", name: "Baba Sri Chand Ji" },
  { src: "/images/bhaiMatiDasJi.jpg", name: "Bhai Mati Das Ji" },
  { src: "/images/bhaiSatiDasJi.jpg", name: "Bhai Sati Das Ji" },
  { src: "/images/bhaiDyalaJi.jpg", name: "Bhai Dyala Ji" },
  { src: "/images/bhaiJaitaJi.jpg", name: "Bhai Jeevan(Jaita)Ji" },
  { src: "/images/sahibZade.jpg", name: "Char Sahibzade" },
  { src: "/images/choteSahibzade.jpg", name: "Chote Sahibzade" },
];

export default function SikhGallery() {     
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-navy"
      >
        Sikh Gallery
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(({ src, name }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-white"
          >
            <img
              src={src}
              alt={name}
              className="w-full h-64 object-cover"
            />

            <p className="text-center py-3 font-medium text-navy">
              {name}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
