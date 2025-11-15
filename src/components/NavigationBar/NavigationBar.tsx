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

  // Scroll to section smoothly when a nav item is clicked
  const handleScroll = (id: string, name: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(name);
      setMenuOpen(false); // close mobile menu after click
    }
  };

  // Scroll spy
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
    <div className="flex w-full px-4 py-3 justify-between items-center backdrop-blur-sm bg-white/7 shadow-lg rounded-xl">
      {/* Left Side */}
      <h1 className="text-white flex items-center text-sm sm:text-[2px]">
        <span className="font-thin pr-2 text-sm sm:text-sm ">Ⓒ</span>
        <span className="sm:text-[0.6rem] xs:text-[0.5rem] lg:text-lg">Pushpak Jangela</span>
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden sm:block">
        <ul className="flex gap-4 text-white items-center">
          {navItems.map((item) => (
            <MagneticEffect key={item.name}>
              <li
                className="relative cursor-pointer"
                onClick={() => handleScroll(item.href, item.name)}
              >
                <a
                  className={`px-5 py-1 rounded-xl relative z-10 transition-all duration-300 ${
                    active === item.name ? "text-black" : "text-white"
                  }`}
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
                      className="absolute inset-0 bg-white opacity-90 rounded-xl z-0"
                    />
                  )}
                </AnimatePresence>
              </li>
            </MagneticEffect>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="text-white text-2xl sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 sm:hidden z-50"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href, item.name)}
                className={`text-lg transition-all ${
                  active === item.name ? "text-white font-bold" : "text-gray-300"
                }`}
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
