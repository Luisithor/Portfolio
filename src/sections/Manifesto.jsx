import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/manifesto.module.css";
import { Sparkles, Target, Brain, Eye, Heart, Zap, Code, Layers } from "lucide-react";

export default function Manifesto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-40, 40]);
  const moveY = useTransform(y, [-100, 100], [-40, 40]);
  const rotate = useTransform(x, [-100, 100], [-8, 8]);

  const manifestoPoints = [
    { text: "I don't design screens.", icon: <Layers />, color: "#FF6B8B", delay: 0 },
    { text: "I design decisions.", icon: <Target />, color: "#3B82F6", delay: 0.2, emphasis: true },
    { text: "I engineer emotions.", icon: <Heart />, color: "#EC4899", delay: 0.4 },
    { text: "I architect experiences.", icon: <Brain />, color: "#10B981", delay: 0.6 },
    { text: "I build clarity from complexity.", icon: <Code />, color: "#8B5CF6", delay: 0.8 },
    { text: "I craft moments before the click.", icon: <Eye />, color: "#F59E0B", delay: 1.0 },
    { text: "I design the invisible interfaces.", icon: <Sparkles />, color: "#06B6D4", delay: 1.2 }
  ];

  const interactiveWords = ["EMPATHY", "PRECISION", "INTENTION", "CLARITY", "IMPACT"];

  return (
    <section
      className={styles.manifesto}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 6);
        y.set(posY / 6);
      }}
    >
      <div className={styles.gridBackground} />
      
      <svg className={styles.connectionLines} width="100%" height="100%">
        <motion.path
          d="M 10,100 Q 300,50 600,200 T 1200,100"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 1200,300 Q 800,250 400,350 T 100,300"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B8B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.particles}>
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              x: useTransform(x, [-100, 100], [i * -3, i * 3]),
              y: useTransform(y, [-100, 100], [i * -2, i * 2]),
              backgroundColor: `hsl(${i * 15}, 80%, 60%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className={styles.floatingWords}>
        {interactiveWords.map((word, index) => (
          <motion.span
            key={word}
            className={styles.floatingWord}
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + Math.sin(index) * 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              color: "#FF6B8B",
              textShadow: "0 0 20px rgba(255, 107, 139, 0.5)",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div
          className={styles.header}
          variants={slideUp}
        >
          <motion.div
            className={styles.titleContainer}
            style={{ rotate }}
          >
            <Sparkles className={styles.titleIcon} />
            <h1 className={styles.title}>
              DESIGN
              <motion.span 
                className={styles.titleAccent}
                animate={{ 
                  color: ["#FF6B8B", "#3B82F6", "#10B981", "#8B5CF6"],
                  x: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity 
                }}
              >
                PHILOSOPHY
              </motion.span>
            </h1>
          </motion.div>
        </motion.div>

        <div className={styles.manifestoList}>
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`${styles.manifestoItem} ${point.emphasis ? styles.emphasis : ''}`}
              variants={fadeUp}
              style={{ x: moveX, y: moveY }}
              whileHover={{
                x: 10,
                scale: 1.02,
                backgroundColor: `${point.color}15`,
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                style={{ color: point.color, borderColor: `${point.color}40` }}
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: point.delay,
                }}
              >
                {point.icon}
              </motion.div>
              
              <p className={styles.text}>
                {point.text}
                {point.emphasis && (
                  <motion.span
                    className={styles.highlight}
                    animate={{
                      textShadow: [
                        `0 0 0px ${point.color}`,
                        `0 0 20px ${point.color}`,
                        `0 0 0px ${point.color}`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    ✦
                  </motion.span>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Declaración final */}
        <motion.div
          className={styles.finalStatement}
          variants={fadeUp}
        >
          <div className={styles.statementContainer}>
            <motion.div
              className={styles.statementLine}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            
            <motion.p
              className={styles.statement}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              I build interfaces that don't compete with the human using them.
            </motion.p>

            <motion.div
              className={styles.signature}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className={styles.zapIcon} />
              <span>Engineered with intent</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};