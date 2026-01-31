import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import styles from "../styles/notes.module.css";
import { Target, Eye, Heart, Brain, Lightbulb, Zap, Sparkles, MessageSquare, Quote } from "lucide-react";

const notes = [
  { text: "Fewer options build more trust.", icon: <Target />, color: "#a62621" }, // Rojo barro
  { text: "Design is also silence.", icon: <Eye />, color: "#4a5d4e" }, // Verde nopal oscuro
  { text: "Great interfaces are felt.", icon: <Heart />, color: "#f1bf3b" }, // Oro
  { text: "Structure over decoration.", icon: <Brain />, color: "#d9d2c5" }, // Hueso
  { text: "Clarity is respect.", icon: <Lightbulb />, color: "#a62621" },
  { text: "Pixel as intention.", icon: <Zap />, color: "#4a5d4e" },
  { text: "Foundation is access.", icon: <Sparkles />, color: "#f1bf3b" },
  { text: "Simplicity is ritual.", icon: <MessageSquare />, color: "#d9d2c5" }
];

export default function Notes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const smoothY = useSpring(useTransform(y, [-100, 100], [-15, 15]), springConfig);

  return (
    <section className={styles.notes} onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }}>
      
      <div className={styles.typographyBackground}>
        {["IDENTITY", "CULTURE", "RITUAL"].map((word, i) => (
          <motion.span key={word} className={styles.backgroundWord}
            style={{ left: `${5 + i * 30}%`, top: `${15 + i * 25}%`, x: smoothX, y: smoothY }}>
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div className={styles.header} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className={styles.headerContent}>
          <Quote className={styles.headerIcon} strokeWidth={1} />
          <h2 className={styles.title}>
            Design <span className={styles.titleAccent}>Principles</span>
          </h2>
          <p className={styles.subtitle}>Distilled Philosophy</p>
        </div>
      </motion.div>

      <div className={styles.wrapper}>
        <div className={styles.notesGrid}>
          {notes.map((note, index) => (
            <motion.div key={index} className={styles.noteContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}>
              
              <div className={styles.principleNumber}>{String(index + 1).padStart(2, "0")}</div>
              
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
        <p className={styles.footerQuote}>"Good design is as little design as possible."</p>
        <span className={styles.authorName}>— Dieter Rams</span>
      </div>
    </section>
  );
}