import { motion } from "framer-motion";
import styles from "../styles/process.module.css";
import { Search, Compass, Code, Rocket } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Análisis & Requerimientos",
    text: "Mapeo a fondo de los procesos actuales, objetivos del negocio y problemas a resolver. Definimos el alcance real antes de tocar una sola línea de código.",
    icon: <Search size={22} strokeWidth={1.75} />,
  },
  {
    index: "02",
    title: "Arquitectura & Diseño",
    text: "Estructura de base de datos, flujos de navegación y prototipado de interfaz. Criterios claros para garantizar que el sistema sea intuitivo y escalable.",
    icon: <Compass size={22} strokeWidth={1.75} />,
  },
  {
    index: "03",
    title: "Desarrollo & Integración",
    text: "Construcción iterativa del código (Frontend + Backend), pruebas de rendimiento e integración de servicios o APIs necesarias.",
    icon: <Code size={22} strokeWidth={1.75} />,
  },
  {
    index: "04",
    title: "Despliegue & Entrega",
    text: "Configuración en servidor de producción, optimización final, documentación de uso y entrega del proyecto 100% funcional.",
    icon: <Rocket size={22} strokeWidth={1.75} />,
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.kicker}>METODOLOGÍA</span>
          <h2 className={styles.title}>
            Proceso de trabajo <br />
            <span className={styles.subtitle}>paso a paso.</span>
          </h2>
        </motion.header>

        <div className={styles.list}>
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.meta}>
                <span className={styles.index}>[{step.index}]</span>
                <div className={styles.icon}>{step.icon}</div>
              </div>

              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.footerSummary}>
          <p className={styles.summaryText}>
            Entregables claros, comunicación directa durante el desarrollo y tiempos de entrega acordados sin sorpresas.
          </p>
        </div>
      </div>
    </section>
  );
}