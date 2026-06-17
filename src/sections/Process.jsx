import { motion } from "framer-motion";
import styles from "../styles/process.module.css";
import { EyeOff, Hammer, Code2, Terminal } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Diagnóstico",
    text: "No escucho lamentos. Analizo la ineficiencia, el desorden del sistema actual y extraigo los datos reales donde otros solo ven ruido.",
    icon: <EyeOff strokeWidth={2.5} />,
  },
  {
    index: "02",
    title: "Arquitectura",
    text: "La claridad se impone por la fuerza de la estructura. Defino jerarquías rígidas y flujos optimizados imposibles de romper.",
    icon: <Hammer strokeWidth={2.5} />,
  },
  {
    index: "03",
    title: "Ejecución",
    text: "El código es la consecuencia final. Traduzco decisiones críticas en materia digital limpia, precisa y lógicamente perfecta.",
    icon: <Code2 strokeWidth={2.5} />,
  },
  {
    index: "04",
    title: "Demolición",
    text: "Elimino cualquier adorno innecesario o distracción visual hasta que solo quede la utilidad pura del sistema. Si no optimiza, muere.",
    icon: <Terminal strokeWidth={2.5} />,
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.grain} /> 
      
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <span className={styles.kicker}>Metodología de Impacto</span>
        <h2 className={styles.title}>
          DEL CAOS A LA
          <br />
          <span style={{ color: '#0026C8' }}>EJECUCIÓN.</span>
        </h2>
      </motion.header>

      <div className={styles.list}>
        {steps.map((step, i) => (
          <motion.article
            key={step.title}
            className={styles.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.86, 0, 0.07, 1] }}
          >
            <div className={styles.meta}>
              <span className={styles.index}>{step.index}</span>
              <div className={styles.icon}>{step.icon}</div>
            </div>

            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className={styles.final}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        El proceso no es una negociación.
        <br />
        Es el control absoluto del entorno.
      </motion.p>
    </section>
  );
}