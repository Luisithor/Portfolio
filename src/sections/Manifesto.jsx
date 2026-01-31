import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/manifesto.module.css";
import { Sparkles, Target, Eye, Heart, Layers } from "lucide-react";

export default function Manifesto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const moveX = useSpring(useTransform(x, [-200, 200], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(y, [-200, 200], [-10, 10]), springConfig);

  const manifestoPoints = [
    { text: "I don’t design screens.", icon: <Layers strokeWidth={1} /> },
    { text: "I design decisions.", icon: <Target strokeWidth={1} />, emphasis: true },
    { text: "I design with empathy.", icon: <Heart strokeWidth={1} /> },
    { text: "I build what users feel.", icon: <Eye strokeWidth={1} /> },
    { text: "Meaning remains.", icon: <Sparkles strokeWidth={1} /> },
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
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.kicker}>Philosophy & Roots</span>
          <h1 className={styles.title}>
            Design is not how it looks.
            <br />
            It’s how it <span style={{ color: '#f1bf3b' }}>listens.</span>
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
          I design interfaces that stay quiet enough
          <br />
          for humans to hear themselves.
        </motion.p>

        <motion.span className={styles.signature} variants={fadeUp}>
          — Made with intention
        </motion.span>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};