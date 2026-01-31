import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { Menu, X, Sparkles, Home, Briefcase, MessageSquare } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", color: "#f1bf3b" },
  { id: "projects", label: "Obra", color: "#a62621" },
  { id: "contact", label: "Contacto", color: "#f1bf3b" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 120;
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
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.brand} onClick={() => scrollTo("home")}>
            <Sparkles className={styles.logoIcon} size={20} strokeWidth={1.5} />
            <div>
              <span className={styles.logoText}>LUIS</span>
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
            <Menu size={30} strokeWidth={1} />
          </button>
        </div>
      </motion.nav>

      <motion.aside 
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className={styles.mobileHeader}>
          <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
            <X size={40} strokeWidth={1} />
          </button>
        </div>

        <div className={styles.mobileLinks}>
          {navItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${styles.mobileItem} ${activeSection === item.id ? styles.mobileActive : ""}`}
              onClick={() => scrollTo(item.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.label}
            </motion.div>
          ))}
        </div>

        <p className={styles.signature}>Hecho con intención — México</p>
      </motion.aside>
    </>
  );
}