import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticEffect from "../AnimationComponent/MagneticComponent";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

const NavigationBar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string, name: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(name);
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "Home";
      for (const item of navItems) {
        const section = document.getElementById(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = item.name;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div 
      className="flex w-full px-4 py-3 justify-between items-center shadow-lg rounded-xl"
      style={{
        background: "rgba(139, 69, 19, 0.15)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(244, 164, 96, 0.2)"
      }}
    >
      
      <h1 className="flex items-center text-sm sm:text-[2px]" style={{ color: "#FFE4C4" }}>
        <span className="sm:text-[0.9rem] xs:text-[0.5rem] lg:text-lg">Portfolio</span>
      </h1>

      <nav className="hidden sm:block">
        <ul className="flex gap-4 items-center">
          {navItems.map((item) => (
            <MagneticEffect key={item.name}>
              <li
                className="relative cursor-pointer"
                onClick={() => handleScroll(item.href, item.name)}
              >
                <a
                  className={`px-5 py-1 rounded-xl relative z-10 transition-all duration-300`}
                  style={{
                    color: active === item.name ? "#1a0f0a" : "#FFE4C4"
                  }}
                >
                  {item.name}
                </a>
                <AnimatePresence>
                  {active === item.name && (
                    <motion.div
                      layoutId="active-bg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute inset-0 opacity-90 rounded-xl z-0"
                      style={{
                        background: "linear-gradient(135deg, #F4A460 0%, #DEB887 100%)"
                      }}
                    />
                  )}
                </AnimatePresence>
              </li>
            </MagneticEffect>
          ))}
        </ul>
      </nav>

      <button
        className="text-2xl sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ color: "#F4A460" }}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 sm:hidden z-50"
            style={{
              background: "rgba(26, 15, 10, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(244, 164, 96, 0.3)"
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href, item.name)}
                className="text-lg transition-all"
                style={{
                  color: active === item.name ? "#F4A460" : "#DEB887",
                  fontWeight: active === item.name ? "bold" : "normal"
                }}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationBar;