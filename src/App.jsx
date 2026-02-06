import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { RefreshCw } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import LanguageTranslator from "./components/LanguageTranslator";

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  // ✅ NEW: track mobile slider open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const refreshCurrentPage = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <BrowserRouter>
      {/* ✅ pass function to Navbar */}
      <Navbar setIsMenuOpen={setIsMenuOpen} />

      <main className="min-h-screen pt-">
        <AppRoutes refreshKey={refreshKey} />
      </main>

      <Footer />
      <ScrollToTop />
      <LanguageTranslator />

      {/* 🔄 FLOATING REFRESH BUTTON */}
      {/* ✅ hide when menu is open */}
      {!isMenuOpen && (
        <button
          onClick={refreshCurrentPage}
          title="Refresh Current Page"
          className="
            fixed 
            top-20 right-2 
            z-[9999]
            p-3 
            rounded-full 
            bg-saffron text-navy 
            shadow-xl
            hover:scale-110 
            hover:rotate-180
            transition-all duration-300
          "
        >
          <RefreshCw size={14} />
        </button>
      )}
    </BrowserRouter>
  );
}
