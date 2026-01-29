import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/cover.module.css";
import { Code2, Palette, Zap, Sparkles, MousePointerClick, Layers } from "lucide-react";

export default function Cover() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-40, 40]);
  const moveY = useTransform(y, [-100, 100], [-40, 40]);
  const rotate = useTransform(x, [-100, 100], [-10, 10]);

  const floatingElements = [
    { icon: <Code2 />, color: "#FF6B8B", delay: 0 },
    { icon: <Palette />, color: "#3B82F6", delay: 0.2 },
    { icon: <Zap />, color: "#10B981", delay: 0.4 },
    { icon: <Sparkles />, color: "#8B5CF6", delay: 0.6 },
    { icon: <MousePointerClick />, color: "#F59E0B", delay: 0.8 },
    { icon: <Layers />, color: "#EC4899", delay: 1.0 }
  ];

  return (
    <section
      className={styles.cover}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 8);
        y.set(posY / 8);
      }}
    >
      <div className={styles.gradientBackground} />
      
      <div className={styles.particlesContainer}>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              x: useTransform(x, [-100, 100], [i * -2, i * 2]),
              y: useTransform(y, [-100, 100], [i * -2, i * 2]),
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={styles.floatingElement}
          style={{
            left: `${15 + index * 12}%`,
            top: `${20 + Math.sin(index) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div 
            className={styles.elementIcon}
            style={{ 
              color: element.color,
              backgroundColor: `${element.color}15`
            }}
          >
            {element.icon}
          </div>
        </motion.div>
      ))}

      <svg className={styles.connectionLine} width="100%" height="100%">
        <motion.path
          d="M 10,50 Q 500,30 1000,200"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="25%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="75%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.wrapper}>
        <motion.div
          className={styles.signatureContainer}
          style={{ x: moveX, y: moveY }}
        >
          <span className={styles.signature}>LUIS MARTÍNEZ</span>
          <motion.div 
            className={styles.signatureGlow}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className={styles.titleContainer}>
          <motion.div
            className={styles.glitchContainer}
            style={{ x: moveX, y: moveY }}
          >
            <h1 className={`${styles.static} ${styles.glitch}`}>
              <span data-text="I build">I build</span>
              <span data-text="I build">I build</span>
              <span data-text="I build">I build</span>
            </h1>
          </motion.div>

          <motion.div
            className={styles.dynamicWords}
            style={{ rotate }}
          >
            <motion.span
              className={`${styles.word} ${styles.word1}`}
              animate={{ 
                color: ["#FF6B8B", "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              bold
            </motion.span>
            <motion.span
              className={`${styles.word} ${styles.word2}`}
              animate={{ 
                color: ["#8B5CF6", "#F59E0B", "#FF6B8B", "#3B82F6"],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              intuitive
            </motion.span>
            <motion.span
              className={`${styles.word} ${styles.word3}`}
              animate={{ 
                color: ["#10B981", "#8B5CF6", "#F59E0B", "#FF6B8B"],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 6,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              accessible
            </motion.span>
          </motion.div>

          <h1 className={styles.static}>digital experiences</h1>
        </div>

        <motion.div 
          className={styles.subtitleContainer}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.roleTags}>
            <motion.span 
              className={styles.tag}
              whileHover={{ scale: 1.1, backgroundColor: "#FF6B8B20" }}
            >
              UX ENGINEER
            </motion.span>
            <motion.span 
              className={styles.tag}
              whileHover={{ scale: 1.1, backgroundColor: "#3B82F620" }}
            >
              CREATIVE DEVELOPER
            </motion.span>
            <motion.span 
              className={styles.tag}
              whileHover={{ scale: 1.1, backgroundColor: "#10B98120" }}
            >
              INTERACTION DESIGNER
            </motion.span>
          </div>
          
          <p className={styles.meta}>
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦
            </motion.span>
            Where design meets code with intention
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
            >
              ✦
            </motion.span>
          </p>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}