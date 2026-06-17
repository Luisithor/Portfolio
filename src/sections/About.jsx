import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };

  const smoothX = useSpring(
    useTransform(x, [-200, 200], [-25, 25]),
    springConfig,
  );
  const smoothY = useSpring(
    useTransform(y, [-200, 200], [-15, 15]),
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
        RITUAL
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <span className={styles.kicker}>
          ¿Buscabas otra plantilla genérica?
        </span>

        <h2 className={styles.title}>
          El software aburrido{" "}
          <span className={styles.accent}>está muerto.</span>
        </h2>

        <div className={styles.textBlock}>
          <p className={styles.text}>
            La mayoría del software actual funciona. Eso ya no es suficiente.
            Como desarrollador y diseñador, me interesa crear experiencias que
            sean claras, memorables y humanas. Busco combinar funcionalidad,
            identidad y
            <span className={styles.highlight}> accesibilidad real </span>
            en cada proyecto.
          </p>

          <p className={styles.text}>
            La accesibilidad y el respeto digital no son extras ni favores. Son
            el punto de partida. Una interfaz debería ayudar a las personas, no
            obligarlas a adaptarse a ella. El diseño tiene la responsabilidad de
            generar confianza antes que impresionar.
          </p>

          <p className={styles.text}>
            No diseño para encajar en pantallas perfectas. Construyo productos
            digitales sólidos, directos y pensados para funcionar en condiciones
            reales, para personas reales.
          </p>

          <p className={styles.text}>
            Si buscas otra plantilla genérica, probablemente este no sea tu
            lugar. Aquí cada decisión tiene una intención:
            <span className={styles.accent}>
              {" "}
              "Engineered for every landscape."
            </span>
          </p>
        </div>
      </motion.div>

      <motion.svg
        style={{
          position: "absolute",
          bottom: "8%",
          left: "8%",
          width: "380px",
          opacity: 0.8,
          pointerEvents: "none",
          zIndex: 2,
        }}
        viewBox="0 0 100 100"
        initial={{ pathLength: 0, rotate: -5 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.path
          d="M5,60 C15,20 35,90 55,40 C65,10 75,80 95,30 C65,90 25,10 5,70 C45,95 65,5 85,60"
          fill="none"
          stroke="#0026C8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.svg>
    </section>
  );
}
