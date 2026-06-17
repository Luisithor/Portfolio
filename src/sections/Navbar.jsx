import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { Shield, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "01 // INICIO" },
  { id: "about", label: "02 // MANIFIESTO" }, 
  { id: "contact", label: "03 // FORZAR CONTACTO" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 150;
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
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "auto" }); 
  };

  return (
    <>
      <motion.nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.brand} onClick={() => scrollTo("home")}>
            <Shield className={styles.logoIcon} size={22} strokeWidth={2.5} />
            <div>
              <span className={styles.logoText}>LUIS MARTÍNEZ</span>
              <span className={styles.logoSub}>Ritual & Code</span>
            </div>
          </div>

          <div className={styles.navItems}>
            {navItems.map(item => (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className={styles.menuButton} onClick={() => setIsOpen(true)}>
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </motion.nav>

      <motion.aside 
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.86, 0, 0.07, 1] }} // Cierre y apertura tajante
      >
        <div className={styles.mobileHeader}>
          <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
            <X size={36} strokeWidth={2.5} />
          </button>
        </div>

        <div className={styles.mobileLinks}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.mobileItem} ${activeSection === item.id ? styles.mobileActive : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <p className={styles.signature}>SISTEMA EN EJECUCIÓN // MÉXICO</p>
      </motion.aside>
    </>
  );
}