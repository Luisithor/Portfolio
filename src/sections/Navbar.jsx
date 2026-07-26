import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "cover", label: "INICIO", index: "01" },
  { id: "about", label: "SOBRE MÍ", index: "02" }, 
  { id: "manifesto", label: "PRINCIPIOS", index: "03" },
  { id: "projects", label: "PROYECTOS", index: "04" },
  { id: "contact", label: "CONTACTO", index: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("cover");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 180;
      navItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el && pos >= el.offsetTop) setActiveSection(item.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" }); 
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Identificador Limpio */}
          <div className={styles.brand} onClick={() => scrollTo("cover")}>
            <span className={styles.logoText}>LUIS MARTÍNEZ</span>
            <span className={styles.logoSub}>DESARROLLO DE SOFTWARE</span>
          </div>

          {/* Navegación Desktop */}
          <nav className={styles.navItems}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className={styles.itemIndex}>[{item.index}]</span>
                <span className={styles.itemLabel}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Trigger Menú Mobile */}
          <button 
            className={styles.menuButton} 
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <span>MENÚ</span>
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mobileHeader}>
              <span className={styles.mobileBrand}>LUIS MARTÍNEZ // MENÚ</span>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <span>CERRAR</span>
                <X size={18} />
              </button>
            </div>

            <nav className={styles.mobileLinks}>
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.mobileItem} ${activeSection === item.id ? styles.mobileActive : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className={styles.mobileIndex}>[{item.index}]</span>
                  <span className={styles.mobileText}>{item.label}</span>
                </div>
              ))}
            </nav>

            <div className={styles.mobileFooter}>
              <span>PORTAFOLIO 2026</span>
              <span>MÉXICO</span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}