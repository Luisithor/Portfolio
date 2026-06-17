import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/manifesto.module.css";
import { Zap, Target, Eye, Flame, ShieldAlert } from "lucide-react";

export default function Manifesto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 120 };
  const moveX = useSpring(useTransform(x, [-200, 200], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(y, [-200, 200], [-12, 12]), springConfig);

  const manifestoPoints = [
    { text: "No pinto pantallas. Destruyo la apatía visual.", icon: <Zap strokeWidth={2.5} /> },
    { text: "Escribo código que impone decisiones, no dudas.", icon: <Target strokeWidth={2.5} />, emphasis: true },
    { text: "La empatía no es suavidad; es respeto radical al usuario.", icon: <Flame strokeWidth={2.5} /> },
    { text: "Construyo sistemas que se sienten físicamente en cada interacción.", icon: <Eye strokeWidth={2.5} /> },
    { text: "La estética genérica muere. La intención trasciende.", icon: <ShieldAlert strokeWidth={2.5} /> },
  ];

  return (
    <section
      className={styles.manifesto}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <div className={styles.gridBackground} />

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.kicker}>RITUAL & CODE // LEYES</span>
          <h1 className={styles.title}>
            El diseño no es cómo se ve.
            <br />
            Es cómo se <span style={{ color: '#0026C8' }}>impone.</span>
          </h1>
        </motion.div>

        <div className={styles.manifestoList}>
          {manifestoPoints.map((point, i) => (
            <motion.div
              key={i}
              className={`${styles.manifestoItem} ${point.emphasis ? styles.emphasis : ""}`}
              variants={fadeUp}
              style={{ x: moveX, y: moveY }}
            >
              <div className={styles.icon}>{point.icon}</div>
              <p>{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.finalStatement} variants={fadeUp}>
          Creo interfaces con la suficiente fuerza técnica 
          <br />
          para obligar al usuario a despertar del letargo digital.
        </motion.p>

        <motion.span className={styles.signature} variants={fadeUp}>
          — Escrito bajo fuego y optimización.
        </motion.span>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.86, 0, 0.07, 1] }, // Ajuste brutalista ultra-rápido
  },
};