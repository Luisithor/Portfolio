import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(
    useTransform(x, [-200, 200], [-15, 15]),
    springConfig,
  );
  const smoothY = useSpring(
    useTransform(y, [-200, 200], [-10, 10]),
    springConfig,
  );

  return (
    <section
      className={styles.about}
      id="about"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <motion.div
        className={styles.backgroundText}
        style={{ x: smoothX, y: smoothY }}
      >
        Raíces
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.kicker}>The Human Behind the Code</span>

        <h2 className={styles.title}>
          Engineering with a <span className={styles.accent}>soul.</span>
        </h2>

        <div className={styles.textBlock}>
          <p className={styles.text}>
            I am a software developer and designer deeply shaped by my Mexican
            identity—a blend of
            <span className={styles.highlight}> ancestral roots </span>
            and contemporary precision. My work is a ritual of transforming
            complex friction into human-centered clarity.
          </p>

          <p className={styles.text}>
            I believe technology belongs to everyone. Inspired by the challenge
            of bringing digital confidence to those who feel left behind, I
            design for
            <span className={styles.highlight}> radical inclusion </span>.
            Accessibility isn't a feature; it is the foundation of digital
            respect.
          </p>

          <p className={styles.text}>
            Whether through code or design, my goal is to build interfaces that
            feel as
            <span className={styles.highlight}> natural as soil </span> and as
            precise as an engineered ritual.
          </p>

          <p className={styles.text}>
            Inspired by the resilience of my community and the strength of
            identity, I design with a clear mantra:
            <span className={styles.accent}> "Engineered for every landscape."</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
