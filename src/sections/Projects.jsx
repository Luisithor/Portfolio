import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "I", 
    name: "Pawify",
    concept: "Designing with heart on sleeve.",
    description:
      "A project born from emotional friction. Pawify explores how clarity, softness, and hierarchy can guide people through vulnerable decisions with grace.",
    notes: [
      "Clarity over decoration",
      "Whitespace as emotional relief",
      "Human-centric flow",
    ],
    link: "https://pawifyy.netlify.app/",
  },
  {
    index: "II",
    name: "Umbral",
    concept: "Interfaces with a human pulse.",
    description:
      "Umbral is about restraint. Removing noise until only meaning remains. A deliberate exercise in clarity, rhythm, and digital trust.",
    notes: [
      "Radical simplicity",
      "Narrative-driven structure",
      "Intentional restraint",
    ],
    link: "https://umbralweb.netlify.app/",
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
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.kicker}>Selected Projects</span>
        <h2 className={styles.title}>
          Decisions made <br />
          <span style={{ fontStyle: 'italic', color: '#a62621' }}>visible.</span>
        </h2>
      </motion.header>

      <div className={styles.list}>
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className={styles.project}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1 }}
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

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                whileHover={{ gap: '1rem' }}
              >
                Explore work
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className={styles.closing}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1.5 }}
      >
        I don’t design to impress.
        <br />
        I design to make things <span style={{ color: '#a62621' }}>feel right.</span>
      </motion.p>
    </section>
  );
}