import { motion } from "framer-motion";
import styles from "../styles/manifesto.module.css";
import { CheckCircle2, Shield, Cpu, Layout, Code2 } from "lucide-react";

export default function Manifesto() {
  const principles = [
    { 
      title: "Claridad sobre adorno", 
      text: "Si un elemento visual no ayuda a entender o usar el sistema, está de más.", 
      icon: <Layout size={20} strokeWidth={1.75} /> 
    },
    { 
      title: "Rendimiento como norma", 
      text: "Código optimizado y respuestas inmediatas. El usuario no debe esperar.", 
      icon: <Cpu size={20} strokeWidth={1.75} /> 
    },
    { 
      title: "Diseño para la realidad", 
      text: "Interfaces pensadas para resolver casos de uso cotidianos, no solo para verse bien en capturas.", 
      icon: <CheckCircle2 size={20} strokeWidth={1.75} /> 
    },
    { 
      title: "Arquitectura mantenible", 
      text: "Estructura limpia y escalable. Pensada para que el software crezca sin romperse.", 
      icon: <Code2 size={20} strokeWidth={1.75} /> 
    },
    { 
      title: "Cero dependencias innecesarias", 
      text: "Soluciones directas con el mínimo de 'ruido' técnico posible.", 
      icon: <Shield size={20} strokeWidth={1.75} /> 
    },
  ];

  return (
    <section className={styles.manifesto}>
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.kicker}>PRINCIPIOS DE TRABAJO</span>
          <h2 className={styles.title}>
            Menos abstracción.
            <br />
            <span className={styles.titleSubtitle}>Más criterios de ingeniería.</span>
          </h2>
        </motion.div>

        <div className={styles.manifestoList}>
          {principles.map((item, i) => (
            <motion.div
              key={i}
              className={styles.manifestoItem}
              variants={fadeUp}
            >
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.finalStatement} variants={fadeUp}>
          El objetivo es simple: entregar software bien construido, intuitivo y listo para trabajar.
        </motion.p>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};