import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/process.module.css";

const steps = [
  {
    title: "Primero escucho",
    text: "Antes del wireframe, intento entender el conflicto. El diseño empieza en la fricción.",
    index: "01",
  },
  {
    title: "Luego ordeno",
    text: "La estética sin estructura es ruido. Busco jerarquía, intención y claridad.",
    index: "02",
  },
  {
    title: "Finalmente construyo",
    text: "El código no es el inicio, es la consecuencia de una buena decisión.",
    index: "03",
  },
];

export default function Process() {
  const x = useMotionValue(0);

  return (
    <section
      className={styles.process}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        x.set(posX / 15);
      }}
    >
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <motion.article
            key={step.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          >
            {/* índice editorial */}
            <motion.span
              className={styles.index}
              style={{
                x: useTransform(x, [-40, 40], [-10, 10]),
              }}
            >
              {step.index}
            </motion.span>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
