import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/cover.module.css";

export default function Cover() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const smoothX = useSpring(
    useTransform(x, [-300, 300], [-25, 25]),
    springConfig,
  );
  const smoothY = useSpring(
    useTransform(y, [-300, 300], [-15, 15]),
    springConfig,
  );

  return (
    <section className={styles.cover}>
      <div className={styles.grain} />
      <div className={styles.background} />

      <div className={styles.wrapper}>
        <motion.span
          className={styles.signature}
          style={{ x: smoothX, y: smoothY }}
        >
          LUIS MARTÍNEZ — MÉXICO
        </motion.span>

        <motion.h1
          className={styles.title}
          style={{ x: smoothX, y: smoothY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        >
          Design as <span className={styles.highlight}>ritual.</span>
          <br />
          Code as <span className={styles.highlight}>devotion.</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Digital experiences shaped by identity,
          <br />
          culture and intention.
        </motion.p>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span />
      </motion.div>
    </section>
  );
}
