import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/projects.module.css";

const projects = [
  {
    name: "Pawify",
    concept: "Diseñar una experiencia clara para adopción y cuidado responsable",
    description:
      "Pawify nace de la necesidad de reducir fricción en procesos emocionales. La prioridad fue la claridad, la empatía y la jerarquía visual.",
    decisions: [
      "Jerarquía visual pensada para usuarios no técnicos",
      "Uso de espacios amplios para reducir carga cognitiva",
      "Estética amable sin caer en lo infantil",
    ],
    link: "https://pawifyy.netlify.app/",
  },
  {
    name: "Proyecto en evolución",
    concept: "Exploración de estructura, narrativa y experiencia",
    description:
      "Un proyecto enfocado en refinar mi proceso como UX Engineer, priorizando intención sobre ornamento.",
    decisions: [
      "Menos elementos, más significado",
      "Diseño guiado por lectura y ritmo",
      "Iteración constante",
    ],
    disabled: true,
  },
];

export default function Projects() {
  const x = useMotionValue(0);

  return (
    <section
      className={styles.projects}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        x.set(posX / 20);
      }}
    >
      <div className={styles.wrapper}>
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={styles.project}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
              delay: index * 0.25,
              ease: "easeOut",
            }}
          >
            {/* Índice editorial */}
            <motion.span
              className={styles.index}
              style={{
                x: useTransform(x, [-30, 30], [-8, 8]),
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            <h2>{project.name}</h2>
            <h3>{project.concept}</h3>

            <p className={styles.description}>{project.description}</p>

            <ul>
              {project.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {!project.disabled && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Ver proyecto →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
