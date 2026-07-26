import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  const stack = [
    { category: "FRONTEND", items: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion" },
    { category: "BACKEND", items: "Node.js, Express, PostgreSQL, Prisma, REST APIs" },
    { category: "HERRAMIENTAS", items: "Git, Docker, Figma, Vercel" },
  ];

  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.kicker}>SOBRE MÍ // PERFIL</span>

        <h2 className={styles.title}>
          Desarrollo enfocado en <br />
          <span className={styles.subtitle}>estructura, uso real y detalle visual.</span>
        </h2>

        <div className={styles.grid}>
          {/* Columna Izquierda: Bio Directa */}
          <div className={styles.bioCol}>
            <p className={styles.text}>
              Soy desarrollador de software e ingeniero enfocado en construir productos digitales desde cero. Me especializo en plataformas web y sistemas de gestión donde el rendimiento y la facilidad de uso son prioridad.
            </p>
            <p className={styles.text}>
              Mi enfoque combina rigor técnico en el código con un criterio estético limpio: interfaces intuitivas, código mantenible y soluciones diseñadas específicamente para la operación del negocio.
            </p>
          </div>

          {/* Columna Derecha: Stack & Ficha Técnica */}
          <div className={styles.stackCol}>
            <h3 className={styles.stackHeading}>TECNOLOGÍAS & STACK</h3>
            <div className={styles.stackList}>
              {stack.map((item, index) => (
                <div key={index} className={styles.stackItem}>
                  <span className={styles.stackCategory}>[{item.category}]</span>
                  <span className={styles.stackItems}>{item.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}