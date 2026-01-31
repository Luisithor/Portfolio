import { motion } from "framer-motion";
import styles from "../styles/process.module.css";
import { Ear, Layers, Code2, Sparkles } from "lucide-react";

const steps = [
  {
    index: "I",
    title: "Listening",
    text: "Before interfaces, I listen. I observe friction, intent, and what remains unsaid in the silence of the user.",
    icon: <Ear strokeWidth={1} />,
  },
  {
    index: "II",
    title: "Structuring",
    text: "Clarity is designed. I define hierarchies and systems that feel natural, like they've always been there.",
    icon: <Layers strokeWidth={1} />,
  },
  {
    index: "III",
    title: "Building",
    text: "Code is a consequence. I translate human needs into precise, intentional digital matter.",
    icon: <Code2 strokeWidth={1} />,
  },
  {
    index: "IV",
    title: "Refining",
    text: "I remove noise until only the soul remains. This is where the work begins to breathe.",
    icon: <Sparkles strokeWidth={1} />,
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.grain} /> 
      
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.kicker}>Process</span>
        <h2 className={styles.title}>
          From chaos to 
          <br />
          <span style={{ color: '#f1bf3b' }}>Intention.</span>
        </h2>
      </motion.header>

      <div className={styles.list}>
        {steps.map((step, i) => (
          <motion.article
            key={step.title}
            className={styles.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Process is not a line.
        <br />
        It is a presence.
      </motion.p>
    </section>
  );
}