import { motion } from "framer-motion";
import styles from "../styles/contact.module.css";
import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";

const socialLinks = [
  {
    platform: "Email",
    url: "mailto:luismmunoz409@gmail.com",
    icon: <Mail size={20} strokeWidth={1.75} />,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/luismm12",
    icon: <Linkedin size={20} strokeWidth={1.75} />,
  },
  {
    platform: "GitHub",
    url: "https://github.com/Luisithor",
    icon: <Github size={20} strokeWidth={1.75} />,
  },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <header className={styles.header}>
            <span className={styles.kicker}>CONTACTO</span>
            <h2 className={styles.title}>
              ¿Tienes un proyecto en mente? <br />
              <span className={styles.subtitle}>Hablemos de tus necesidades.</span>
            </h2>
            <p className={styles.message}>
              Estoy disponible para desarrollo de proyectos a medida, consultoría o colaboraciones. Si buscas construir software eficiente y funcional, escríbeme.
            </p>
          </header>

          <div className={styles.mainCta}>
            <a
              href="mailto:luismmunoz409@gmail.com"
              className={styles.emailButton}
            >
              <Send size={18} />
              <span>Enviar correo directo</span>
            </a>
          </div>

          <div className={styles.linksGrid}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.linkIcon}>{link.icon}</div>
                  <ArrowUpRight size={16} className={styles.arrow} />
                </div>
                <span className={styles.linkPlatform}>{link.platform}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            ))}
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerCol}>
              <span className={styles.footerName}>LUIS MARTÍNEZ</span>
              <span className={styles.footerMeta}>DESARROLLADOR DE SOFTWARE — MÉXICO</span>
            </div>
            <span className={styles.copyright}>© 2026 // TODOS LOS DERECHOS RESERVADOS</span>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}