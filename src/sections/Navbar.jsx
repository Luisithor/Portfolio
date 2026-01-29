import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { 
  Menu, 
  X, 
  Sparkles, 
  Home, 
  User, 
  Briefcase, 
  MessageSquare,
  Code2,
  Zap,
  ExternalLink
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: <Home />, color: "#FF6B8B", delay: 0 },
];

const socialLinks = [
  { platform: "GitHub", url: "https://github.com/Luisithor", color: "#10B981" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/luismm12", color: "#3B82F6" },
  { platform: "Email", url: "mailto:luismmunoz409@gmail.com", color: "#FF6B8B" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-20, 20]);
  const moveY = useTransform(y, [-100, 100], [-20, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const posX = e.clientX - rect.left - rect.width / 2;
          const posY = e.clientY - rect.top - rect.height / 2;
          x.set(posX / 20);
          y.set(posY / 20);
        }}
      >
        <div className={styles.navContainer}>
          <motion.div 
            className={styles.brand}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("home")}
          >
            <div className={styles.logoContainer}>
              <Sparkles className={styles.logoIcon} />
              <motion.span 
                className={styles.logoText}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                LUIS MARTÍNEZ
              </motion.span>
            </div>
            <div className={styles.logoGlow} />
          </motion.div>

          <div className={styles.navItems}>
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id)}
                style={{ "--item-color": item.color }}
              >
                <motion.span
                  className={styles.navIndicator}
                  animate={{
                    width: activeSection === item.id ? "100%" : "0%",
                    opacity: activeSection === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
                
                {activeSection === item.id && (
                  <motion.div
                    className={styles.activeGlow}
                    style={{ backgroundColor: item.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ x: moveX, y: moveY }}
          >
            <Zap className={styles.ctaIcon} />
            <span>Let's Talk</span>
          </motion.a>

          <motion.button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.div
          className={styles.progressBar}
          animate={{
            width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>

      <motion.div
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.menuBackground} />
        
        <div className={styles.menuParticles}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              style={{
                backgroundColor: navItems[i % navItems.length]?.color,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className={styles.menuContent}>
          <div className={styles.menuHeader}>
            <motion.div
              className={styles.menuBrand}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className={styles.menuLogoIcon} />
              <span className={styles.menuLogoText}>Portfolio</span>
            </motion.div>
            
            <motion.button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X size={28} />
            </motion.button>
          </div>

          <div className={styles.menuItems}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`${styles.menuItem} ${activeSection === item.id ? styles.menuActive : ''}`}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ x: 10 }}
                style={{ "--item-color": item.color }}
              >
                <div className={styles.menuItemContent}>
                  <div className={styles.menuIcon} style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  
                  <div className={styles.menuText}>
                    <span className={styles.menuLabel}>{item.label}</span>
                    <span className={styles.menuDescription}>
                      {item.id === 'home' && 'Welcome section'}
                    </span>
                  </div>
                  
                  <ExternalLink className={styles.menuArrow} />
                </div>
                
                <motion.div
                  className={styles.menuItemGlow}
                  style={{ background: `linear-gradient(90deg, ${item.color}20, transparent)` }}
                  animate={{
                    opacity: activeSection === item.id ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.menuSocial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className={styles.socialTitle}>Connect with me</span>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={{ color: link.color }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {link.platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.menuFooter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className={styles.menuFooterText}>
              UX Engineer · Creative Developer
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}