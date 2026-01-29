import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/cover.module.css";

export default function Cover() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-50, 50], [-20, 20]);
  const moveY = useTransform(y, [-50, 50], [-20, 20]);

  return (
    <section
      className={styles.cover}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 10);
        y.set(posY / 10);
      }}
    >
      <motion.div className={styles.blobOne} style={{ x: moveX, y: moveY }} />
      <motion.div className={styles.blobTwo} style={{ x: moveX, y: moveY }} />

      <div className={styles.wrapper}>
        <motion.span
          className={styles.signature}
          style={{ x: moveX, y: moveY }}
        >
          Luis Martínez
        </motion.span>
        <motion.div
          className={styles.line}
          style={{
            height: useTransform(y, [-30, 30], ["40px", "80px"]),
          }}
        />

        <h1 className={styles.static}>
          Diseño experiencias digitales
          <br />
          donde la
        </h1>

        <motion.h1
          className={styles.dynamic}
          style={{ x: moveX, y: moveY }}
          whileHover={{ letterSpacing: "0.05em" }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          emoción
        </motion.h1>

        <h1 className={styles.static}>también tiene estructura.</h1>

        <p className={styles.subtitle}>UX Engineer · Web Designer</p>
        <p className={styles.meta}>
          Diseño, código e inclusión trabajando juntos.
        </p>
      </div>
    </section>
  );
}
