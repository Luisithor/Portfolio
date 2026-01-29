import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/manifesto.module.css";

export default function Manifesto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-50, 50], [-10, 10]);
  const moveY = useTransform(y, [-50, 50], [-10, 10]);

  return (
    <section
      className={styles.manifesto}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 12);
        y.set(posY / 12);
      }}
    >
      {/* Blobs suaves (eco del cover) */}
      <motion.div
        className={styles.blobOne}
        style={{ x: moveX, y: moveY }}
      />
      <motion.div
        className={styles.blobTwo}
        style={{ x: moveX, y: moveY }}
      />

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.4 },
          },
        }}
      >
        <motion.p variants={fadeUp}>No diseño pantallas.</motion.p>

        <motion.p
          variants={fadeUp}
          className={styles.emphasis}
          style={{ x: moveX, y: moveY }}
        >
          Diseño decisiones.
        </motion.p>

        <div className={styles.spacer} />

        <motion.p variants={fadeUp}>
          Me obsesiona lo que el usuario siente
          <br />
          <span className={styles.subtle}>
            justo antes de hacer clic.
          </span>
        </motion.p>

        <div className={styles.spacer} />

        <motion.p variants={fadeUp}>
          Creo en interfaces claras,
          <br />
          silenciosas,
          <br />
          <span className={styles.subtle}>
            que no compitan con quien las usa.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
