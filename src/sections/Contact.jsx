import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/contact.module.css";
import { Send, Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  {
    platform: "Email",
    url: "mailto:luismmunoz409@gmail.com",
    icon: <Mail strokeWidth={2.5} />,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/luismm12",
    icon: <Linkedin strokeWidth={2.5} />,
  },
  {
    platform: "GitHub",
    url: "https://github.com/Luisithor",
    icon: <Github strokeWidth={2.5} />,
  },
];

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 120 };
  const smoothX = useSpring(
    useTransform(x, [-200, 200], [-15, 15]),
    springConfig,
  );
  const smoothY = useSpring(
    useTransform(y, [-200, 200], [-8, 8]),
    springConfig,
  );

  return (
    <section
      className={styles.contact}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <header className={styles.header}>
          <motion.h1
            className={styles.title}
            style={{ x: smoothX, y: smoothY }}
          >
            ¿HACEMOS ALGO{" "}
            <span className={styles.titleAccent}>O TE DA MIEDO?</span>
          </motion.h1>

          <p className={styles.message}>
            Si buscas un desarrollo mecánico que solo traduzca ideas a pantallas
            planas, búscalo en otra parte. Si quieres construir sistemas con{" "}
            <span className={styles.highlight}>intención radical</span> y romper
            el molde de siempre, hablemos. **Solo faltas tú.**
          </p>
        </header>

        <div className={styles.linksGrid}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <div className={styles.linkIcon}>{link.icon}</div>
              <span className={styles.linkPlatform}>{link.platform}</span>
              <span className={styles.linkUsername}>{link.username}</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "left", marginBottom: "8rem" }}>
          <motion.a
            href="mailto:luismmunoz409@gmail.com"
            className={styles.emailButton}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} strokeWidth={3} />
            FORZAR CONTACTO
          </motion.a>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>RITUAL & CODE // LUIS MARTÍNEZ</p>
          <p className={styles.footerMeta}>
            SOFTWARE DEVELOPER — CREATIVE ENGINEER — MÉXICO
          </p>
        </footer>
      </motion.div>
    </section>
  );
}
