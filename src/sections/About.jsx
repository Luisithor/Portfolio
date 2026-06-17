import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  
  const smoothX = useSpring(useTransform(x, [-200, 200], [-25, 25]), springConfig);
  const smoothY = useSpring(useTransform(y, [-200, 200], [-15, 15]), springConfig);

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
        <span className={styles.kicker}>¿Buscabas otra plantilla genérica?</span>

        <h2 className={styles.title}>
          El software aburrido <span className={styles.accent}>está muerto.</span>
        </h2>

        <div className={styles.textBlock}>
          <p className={styles.text}>
            La mayoría de las interfaces actuales son clones sin alma creados para usuarios adormecidos. 
            No me interesa el diseño pasivo. Como desarrollador y diseñador, mi trabajo es inyectar 
            <span className={styles.highlight}> precisión contemporánea </span> en sistemas que la gente 
            realmente sienta. Programar no es rellenar cajas; es un ritual de fuerza.
          </p>

          <p className={styles.text}>
            ¿Por qué conformarse con sistemas que tratan a las personas como números? Si una interfaz 
            no genera confianza radical o incomoda al statu quo, no sirve. La accesibilidad y el respeto digital 
            no son favores ni características opcionales; son la base de un diseño que tiene el coraje de 
            <span className={styles.highlight}> plantarse firme </span> ante cualquiera.
          </p>

          <p className={styles.text}>
            No diseño para encajar en pantallas perfectas. Creo código crudo, robusto y directo, estructurado 
            para responder con la misma fuerza en cualquier escenario.
          </p>

          <p className={styles.text}>
            Si buscas código predecible y renders de oficina, estás en el lugar equivocado. Aquí se construye 
            bajo una sola regla implacable: 
            <span className={styles.accent}> "Engineered for every landscape."</span>
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
          zIndex: 2
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