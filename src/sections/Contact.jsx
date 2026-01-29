import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const y = useMotionValue(0);
  const moveY = useTransform(y, [-30, 30], [-8, 8]);

  return (
    <section
      className={styles.contact}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posY = e.clientY - rect.top - rect.height / 2;
        y.set(posY / 15);
      }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {/* Texto principal */}
        <motion.p style={{ y: moveY }}>
          Si buscas a alguien que piense antes de construir,
          <br />
          y sienta antes de diseñar,
        </motion.p>

        <motion.p
          className={styles.strong}
          style={{ y: moveY }}
        >
          podemos trabajar juntos.
        </motion.p>

        {/* Links */}
        <div className={styles.links}>
          <a href="mailto:luismmunoz409@gmail.com">Email</a>

          <a
            href="https://linkedin.com/in/luismm12"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Luisithor"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
