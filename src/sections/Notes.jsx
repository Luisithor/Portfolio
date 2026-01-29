import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/notes.module.css";
import { 
  Sparkles, 
  Zap, 
  Target, 
  Eye, 
  Brain, 
  Heart,
  Lightbulb,
  Quote,
  MessageSquare
} from "lucide-react";

const notes = [
  {
    text: "Fewer options build more trust.",
    icon: <Target />,
    color: "#FF6B8B",
    delay: 0
  },
  {
    text: "Design is also silence.",
    icon: <Eye />,
    color: "#3B82F6",
    delay: 0.2
  },
  {
    text: "Great interfaces aren't explained—they're felt.",
    icon: <Heart />,
    color: "#EC4899",
    delay: 0.4
  },
  {
    text: "Emotion without structure confuses.",
    icon: <Brain />,
    color: "#10B981",
    delay: 0.6
  },
  {
    text: "Clarity is a form of respect.",
    icon: <Lightbulb />,
    color: "#8B5CF6",
    delay: 0.8
  },
  {
    text: "Every pixel carries intention.",
    icon: <Zap />,
    color: "#F59E0B",
    delay: 1.0
  },
  {
    text: "Accessibility isn't a feature—it's the foundation.",
    icon: <Sparkles />,
    color: "#06B6D4",
    delay: 1.2
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    icon: <MessageSquare />,
    color: "#84CC16",
    delay: 1.4
  }
];

const floatingWords = ["INTENTION", "CLARITY", "EMPATHY", "PRECISION", "IMPACT"];

export default function Notes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-30, 30]);
  const moveY = useTransform(y, [-100, 100], [-30, 30]);

  return (
    <section
      className={styles.notes}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 15);
        y.set(posY / 15);
      }}
    >
      <div className={styles.typographyBackground}>
        {floatingWords.map((word, i) => (
          <motion.span
            key={word}
            className={styles.backgroundWord}
            style={{
              left: `${10 + i * 18}%`,
              top: `${20 + Math.sin(i) * 60}%`,
            }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className={styles.particles}>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              backgroundColor: notes[i % notes.length]?.color,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headerContent}>
          <Quote className={styles.headerIcon} />
          <h2 className={styles.title}>
            DESIGN
            <motion.span
              className={styles.titleAccent}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              PRINCIPLES
            </motion.span>
          </h2>
          <p className={styles.subtitle}>
            Philosophy distilled into actionable insights
          </p>
        </div>
      </motion.div>

      <div className={styles.wrapper}>
        <div className={styles.notesGrid}>
          {notes.map((note, index) => (
            <motion.div
              key={note.text}
              className={styles.noteContainer}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: note.delay,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${note.color}30`,
                scale: 1.02,
              }}
            >
              <div 
                className={styles.noteFrame}
                style={{ borderColor: `${note.color}40` }}
              />
              
              <div 
                className={styles.noteBackground}
                style={{ background: `linear-gradient(135deg, ${note.color}15, transparent)` }}
              />

              <motion.div
                className={styles.noteIcon}
                style={{ color: note.color }}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                {note.icon}
              </motion.div>

              <motion.div
                className={styles.noteContent}
                style={{
                  x: useTransform(x, [-100, 100], [-10, 10]),
                  y: useTransform(y, [-100, 100], [-10, 10]),
                }}
              >
                <p className={styles.noteText}>{note.text}</p>
                
                <motion.div
                  className={styles.noteIndicator}
                  style={{ backgroundColor: note.color }}
                  animate={{
                    width: ["0%", "100%", "0%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>

              <motion.div
                className={styles.principleNumber}
                style={{ color: note.color }}
                animate={{
                  textShadow: [
                    `0 0 0px ${note.color}`,
                    `0 0 20px ${note.color}`,
                    `0 0 0px ${note.color}`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <div 
                className={styles.noteGlow}
                style={{ background: `radial-gradient(circle, ${note.color}20, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <div className={styles.footerContent}>
          <motion.div
            className={styles.quoteMark}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            "
          </motion.div>
          <p className={styles.footerQuote}>
            Good design is as little design as possible
          </p>
          <div className={styles.quoteAuthor}>
            <span className={styles.authorName}>— Dieter Rams</span>
            <span className={styles.authorTitle}>Industrial Designer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}