import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/notes.module.css";

const notes = [
  "Menos opciones generan más confianza.",
  "El diseño también es silencio.",
  "Una buena interfaz no se explica, se siente.",
  "La emoción sin estructura confunde.",
  "La claridad es una forma de respeto.",
];

export default function Notes() {
  const x = useMotionValue(0);

  return (
    <section
      className={styles.notes}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        x.set(posX / 25);
      }}
    >
      <div className={styles.wrapper}>
        {notes.map((note, index) => (
          <motion.span
            key={note}
            className={styles.note}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: index * 0.18,
              ease: "easeOut",
            }}
            style={{
              x: useTransform(x, [-40, 40], [-6, 6]),
            }}
          >
            {note}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
