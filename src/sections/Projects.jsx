import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "Pawify",
    concept: "Plataforma de gestión de refugios y adopciones",
    description:
      "Aplicación web diseñada para optimizar los procesos de adopción y control operativo en refugios caninos. Simplifica la administración de expedientes, solicitudes y seguimiento en una interfaz intuitiva y fluida.",
    highlights: [
      "Flujos de adopción simplificados",
      "Interfaz enfocada en usabilidad",
      "Gestión y control de expedientes"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://pawifyy.netlify.app/",
  },
  {
    index: "02",
    name: "Vertitrack",
    concept: "Sistema de gestión y mantenimiento de elevadores",
    description:
      "Plataforma enfocada en el monitoreo y control de servicios de mantenimiento preventivo y correctivo. Permite visualizar métricas operativas y registros de servicio con respuesta rápida.",
    highlights: [
      "Visualización de métricas en tiempo real",
      "Diseño de interfaz de alto rendimiento",
      "Estructura orientada a operación continua"
    ],
    tech: ["React", "Express", "PostgreSQL", "REST API"],
    link: "https://vertitrack.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.kicker}>PROYECTOS DESTACADOS</span>
          <h2 className={styles.title}>
            Casos de estudio <br />
            <span className={styles.subtitle}>y desarrollo en producción.</span>
          </h2>
        </motion.header>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.index}>[{project.index}]</span>
                <span className={styles.concept}>{project.concept}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.detailsBlock}>
                  <div className={styles.highlights}>
                    <span className={styles.blockLabel}>PUNTOS CLAVE:</span>
                    <ul>
                      {project.highlights.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.techStack}>
                    <span className={styles.blockLabel}>STACK:</span>
                    <div className={styles.pills}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.pill}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span>Ver proyecto en vivo</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}