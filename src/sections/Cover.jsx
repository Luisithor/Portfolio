import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/cover.module.css";

export default function Cover() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const smoothX = useSpring(useTransform(x, [-300, 300], [-35, 35]), springConfig);
  const smoothY = useSpring(useTransform(y, [-300, 300], [-20, 20]), springConfig);

  return (
    <section 
      className={styles.cover}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <div className={styles.grain} />

      <div className={styles.wrapper}>
        <motion.span
          className={styles.signature}
          style={{ x: smoothX, y: smoothY }}
        >
          LUIS MARTÍNEZ // CONTROL TOTAL // 2026
        </motion.span>

        <motion.h1
          className={styles.title}
          style={{ x: smoothX, y: smoothY }}
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }} // Ajuste ultra-agresivo
        >
          ¿OTRO CLON <br />
          DE INTERNET? <br />
          <span className={styles.highlight}>AQUÍ NO.</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Si venías a buscar una plantilla amigable y un desarrollador sumiso que diga que 
          sí a todo, estás perdiendo el tiempo. Cierro la pestaña por ti o te quedas a ver 
          cómo se destruye el software aburrido. Tú decides.
        </motion.p>
      </div>

      <div className={styles.scrollIndicator}>
        <p className={styles.scrollText}>BAJA BAJO TU PROPIO RIESGO</p>
        <span />
      </div>
    </section>
  );
}