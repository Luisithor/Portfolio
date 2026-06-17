import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "P_01",
    name: "Pawify",
    concept: "Gestión de refugios y respeto digital.",
    description:
      "Un sistema diseñado para resolver la fricción operativa en la gestión de refugios y agilizar los procesos de adopción canina. Pawify demuestra que la empatía no es suavidad; es respeto radical al usuario a través de flujos limpios, jerarquías rígidas y una arquitectura optimizada que elimina el ruido en decisiones vulnerables.",
    notes: [
      "Estructura orientada a la acción",
      "Cero decoración, máxima utilidad",
      "Control de flujos optimizado",
    ],
    link: "https://pawifyy.netlify.app/",
  },
  {
    index: "P_02",
    name: "Vertitrack",
    concept: "Precisión técnica sin intermediarios.",
    description:
      "Un ejercicio de contención y control de datos. Vertitrack elimina las distracciones de las interfaces genéricas para entregar métricas críticas en tiempo real. Cero elementos decorativos; pura utilidad de sistema diseñada para tomar decisiones bajo presión.",
    notes: [
      "Simplicidad estructural radical",
      "Layout asimétrico de alto rendimiento",
      "Carga instantánea sin latencia",
    ],
    link: "https://vertitrack.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <span className={styles.kicker}>Sistemas en Producción</span>
        <h2 className={styles.title}>
          DECISIONES TÉCNICAS
          <br />
          <span style={{ color: '#0026C8' }}>HECHAS MATERIA.</span>
        </h2>
      </motion.header>

      <div className={styles.list}>
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className={styles.project}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.86, 0, 0.07, 1] }}
          >
            <div className={styles.index}>{project.index}</div>

            <div className={styles.body}>
              <h3 className={styles.name}>{project.name}</h3>
              <span className={styles.concept}>{project.concept}</span>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.notes}>
                {project.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                EJECUTAR EXPLORACIÓN
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className={styles.closing}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        No programo para decorar pantallas.
        <br />
        Programo para imponer <span style={{ color: '#0026C8' }}>orden técnico.</span>
      </motion.p>
    </section>
  );
}