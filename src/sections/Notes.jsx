import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/notes.module.css";
import { Target, Eye, Heart, Brain, Lightbulb, Zap, Shield, HelpCircle, Quote } from "lucide-react";

const notes = [
  { text: "Menos opciones imponen más control.", icon: <Target />, color: "#0026C8" }, 
  { text: "El diseño cobarde satura; el diseño de autor calla.", icon: <Eye />, color: "#0026C8" }, 
  { text: "Las grandes interfaces se sufren o se dominan.", icon: <Heart />, color: "#0026C8" }, 
  { text: "La estructura destruye la decoración inútil.", icon: <Brain />, color: "#0026C8" }, 
  { text: "La claridad técnica es el único respeto digital.", icon: <Lightbulb />, color: "#0026C8" }, 
  { text: "El pixel no es un adorno, es una orden.", icon: <Zap />, color: "#0026C8" }, 
  { text: "La base del software es la accesibilidad sin excusas.", icon: <Shield />, color: "#0026C8" }, 
  { text: "La optimización absoluta es nuestro único ritual.", icon: <HelpCircle />, color: "#0026C8" }
];

export default function Notes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 120 };
  const smoothX = useSpring(useTransform(x, [-100, 100], [-20, 20]), springConfig);
  const smoothY = useSpring(useTransform(y, [-100, 100], [-20, 20]), springConfig);

  return (
    <section className={styles.notes} onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }}>
      
      <div className={styles.typographyBackground}>
        {["CÓDIGO", "FUERZA", "RITUAL"].map((word, i) => (
          <motion.span key={word} className={styles.backgroundWord}
            style={{ left: `${5 + i * 28}%`, top: `${20 + i * i * 10}%`, x: smoothX, y: smoothY }}>
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div className={styles.header} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className={styles.headerContent}>
          <Quote className={styles.headerIcon} strokeWidth={2.5} />
          <h2 className={styles.title}>
            LEYES DE <span className={styles.titleAccent}>CONTROL</span>
          </h2>
          <p className={styles.subtitle}>Filosofía No Complaciente</p>
        </div>
      </motion.div>

      <div className={styles.wrapper}>
        <div className={styles.notesGrid}>
          {notes.map((note, index) => (
            <motion.div key={index} className={styles.noteContainer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.86, 0, 0.07, 1] }}
              whileHover={{ y: 0 }} // En el brutalismo compacto eliminamos el desplazamiento flotante, preferimos el golpe de color plano
            >
              
              <div className={styles.principleNumber}>L_0{index + 1}</div>
              
              <div className={styles.noteIcon} style={{ color: note.color }}>
                {note.icon}
              </div>

              <div className={styles.noteContent}>
                <p className={styles.noteText}>{note.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerQuote}>"Hacer lo que la mayoría acepta es perpetuar la basura que ya inunda la red."</p>
        <span className={styles.authorName}>— MANIFIESTO RITUAL & CODE</span>
      </div>
    </section>
  );
}