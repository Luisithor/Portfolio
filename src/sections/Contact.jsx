import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/contact.module.css";
import { Send, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { platform: "Email", url: "mailto:luismmunoz409@gmail.com", icon: <Mail strokeWidth={1} />, username: "luismmunoz409@gmail.com" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/luismm12", icon: <Linkedin strokeWidth={1} />, username: "luismm12" },
  { platform: "GitHub", url: "https://github.com/Luisithor", icon: <Github strokeWidth={1} />, username: "Luisithor" },
];

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(useTransform(x, [-200, 200], [-20, 20]), springConfig);
  const smoothY = useSpring(useTransform(y, [-200, 200], [-10, 10]), springConfig);

  return (
    <section className={styles.contact} onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }}>
      
      <motion.div className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
        
        <header className={styles.header}>
          <motion.h1 className={styles.title} style={{ x: smoothX, y: smoothY }}>
            Let’s create <span className={styles.titleAccent}>together.</span>
          </motion.h1>
          
          <p className={styles.message}>
            Looking for someone who <span className={styles.highlight}>thinks</span> before building and <span className={styles.highlight}>feels</span> before designing?
          </p>
        </header>

        <div className={styles.linksGrid}>
          {socialLinks.map((link, index) => (
            <motion.a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkCard}
              whileHover={{ y: -5 }}>
              <div className={styles.linkIcon}>{link.icon}</div>
              <span className={styles.linkPlatform}>{link.platform}</span>
              <span className={styles.linkUsername}>{link.username}</span>
            </motion.a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <motion.a href="mailto:luismmunoz409@gmail.com" className={styles.emailButton}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Send size={18} />
            Say Hello
          </motion.a>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>Crafted with intention by Luis Martínez</p>
          <p className={styles.footerMeta}>UX Engineer — Creative Developer — México</p>
        </footer>
      </motion.div>
    </section>
  );
}