import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/process.module.css";
import { 
  Ear, 
  Layers, 
  Code2, 
  ArrowRight,
  Sparkles,
  Puzzle,
  Cpu,
  Zap
} from "lucide-react";

const processSteps = [
  {
    title: "Listen First",
    text: "Before any wireframe, I dive into the friction points. Understanding the real problem is where design truly begins.",
    index: "01",
    icon: <Ear />,
    color: "#FF6B8B",
    delay: 0,
    keywords: ["Empathy", "Research", "Discovery"],
    gradient: "linear-gradient(135deg, #FF6B8B, #EC4899)"
  },
  {
    title: "Structure",
    text: "Aesthetics without structure is just noise. I craft intentional hierarchies, clear flows, and meaningful patterns.",
    index: "02",
    icon: <Layers />,
    color: "#3B82F6",
    delay: 0.2,
    keywords: ["Architecture", "Hierarchy", "Systems"],
    gradient: "linear-gradient(135deg, #3B82F6, #6366F1)"
  },
  {
    title: "Engineer",
    text: "Code isn't the starting point—it's the consequence of thoughtful decisions. I build with precision and purpose.",
    index: "03",
    icon: <Code2 />,
    color: "#10B981",
    delay: 0.4,
    keywords: ["Implementation", "Precision", "Craft"],
    gradient: "linear-gradient(135deg, #10B981, #059669)"
  },
  {
    title: "Elevate",
    text: "Adding that spark of magic. Micro-interactions, delightful moments, and the perfect polish that transforms good into exceptional.",
    index: "04",
    icon: <Sparkles />,
    color: "#8B5CF6",
    delay: 0.6,
    keywords: ["Magic", "Polish", "Delight"],
    gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
  }
];

export default function Process() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-30, 30]);
  const moveY = useTransform(y, [-100, 100], [-30, 30]);
  const rotate = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <section
      className={styles.process}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 8);
        y.set(posY / 8);
      }}
    >
      <div className={styles.circuitBackground} />
      
      <div className={styles.connectionParticles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.connectionParticle}
            style={{
              left: `${10 + i * 5}%`,
              top: `${30 + Math.sin(i) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <svg className={styles.flowLines} width="100%" height="100%">
        {processSteps.map((_, i) => (
          <motion.path
            key={i}
            d={`M ${100 + i * 200} 50 Q ${200 + i * 200} 300 ${300 + i * 200} 50`}
            stroke="url(#flowGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.3 }}
          />
        ))}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B8B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.titleContainer}>
          <Cpu className={styles.titleIcon} />
          <h2 className={styles.title}>
            ENGINEERED
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
              PROCESS
            </motion.span>
          </h2>
        </div>
        <p className={styles.subtitle}>
          A systematic approach to creative problem-solving
        </p>
      </motion.div>

      <div className={styles.grid}>
        {processSteps.map((step, i) => (
          <motion.article
            key={step.title}
            className={styles.card}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: step.delay,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              boxShadow: `0 20px 40px ${step.color}30`,
            }}
          >
            {i < processSteps.length - 1 && (
              <motion.div
                className={styles.connector}
                style={{ left: "calc(100% - 30px)" }}
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: step.delay + 0.3 }}
              >
                <ArrowRight className={styles.arrowIcon} />
              </motion.div>
            )}

            <motion.div
              className={styles.indexContainer}
              style={{
                x: useTransform(x, [-100, 100], [-10, 10]),
                y: useTransform(y, [-100, 100], [-10, 10]),
              }}
            >
              <motion.span
                className={styles.index}
                animate={{
                  textShadow: [
                    `0 0 0px ${step.color}`,
                    `0 0 20px ${step.color}`,
                    `0 0 0px ${step.color}`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: step.delay,
                }}
              >
                {step.index}
              </motion.span>
              <div className={styles.indexGlow} style={{ background: step.gradient }} />
            </motion.div>

            <motion.div
              className={styles.iconContainer}
              style={{ color: step.color }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: step.delay,
              }}
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              {step.icon}
            </motion.div>

            <div className={styles.content}>
              <motion.h3 
                className={styles.cardTitle}
                style={{ color: step.color }}
                whileHover={{ x: 5 }}
              >
                {step.title}
              </motion.h3>
              
              <p className={styles.cardText}>{step.text}</p>

              <div className={styles.keywords}>
                {step.keywords.map((keyword) => (
                  <motion.span
                    key={keyword}
                    className={styles.keyword}
                    style={{ borderColor: `${step.color}40` }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: `${step.color}20`,
                    }}
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className={styles.cardBackground} style={{ background: step.gradient }} />
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <div className={styles.footerContent}>
          <Zap className={styles.zapIcon} />
          <p className={styles.footerText}>
            Every pixel, every line of code, every interaction—intentionally crafted.
          </p>
        </div>
      </motion.div>
    </section>
  );
}