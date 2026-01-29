import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/projects.module.css";
import { 
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Zap,
  Eye,
  Heart,
  Target,
  Layers,
  Code2,
  MousePointerClick
} from "lucide-react";

const projects = [
  {
    name: "Pawify",
    concept: "Designing clear experiences for pet adoption & responsible care",
    description: "Born from the need to reduce friction in emotional processes. Focus on clarity, empathy, and visual hierarchy.",
    decisions: [
      "Visual hierarchy designed for non-technical users",
      "Spacious layouts to reduce cognitive load",
      "Friendly aesthetic without being childish"
    ],
    meta: ["UX Design", "User Research", "Visual Design", "Prototyping"],
    tags: ["Empathy", "Accessibility", "Emotional Design"],
    link: "https://pawifyy.netlify.app/",
    color: "#FF6B8B",
    icon: <Heart />,
    gradient: "linear-gradient(135deg, #FF6B8B, #EC4899)",
    tech: ["React", "Framer Motion", "CSS Modules", "Lucide Icons"]
  },
  {
    name: "Umbral",
    concept: "A gateway to more human interfaces",
    description: "Project focused on absolute clarity, demonstrating that technology can be understandable, elegant, and welcoming.",
    decisions: [
      "Radical clarity over visual saturation",
      "Informational hierarchy for user guidance",
      "Continuous optimization based on real usage"
    ],
    meta: ["UX Strategy", "Design Systems", "User Testing", "Motion Design"],
    tags: ["Narrative", "Rhythm", "Human-Centered"],
    link: "https://umbralweb.netlify.app/",
    color: "#3B82F6",
    icon: <Eye />,
    gradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
    tech: ["Next.js", "TypeScript", "Framer", "Tailwind CSS"]
  },
];

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-40, 40]);
  const moveY = useTransform(y, [-100, 100], [-40, 40]);

  return (
    <section
      className={styles.projects}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 10);
        y.set(posY / 10);
      }}
    >
      <div className={styles.backgroundGrid} />
      
      <div className={styles.floatingElements}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingElement}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 60}%`,
              background: `conic-gradient(from 90deg, 
                ${projects[i % 3]?.color}40, 
                ${projects[(i + 1) % 3]?.color}40, 
                ${projects[(i + 2) % 3]?.color}40,
                ${projects[i % 3]?.color}40)`
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, delay: i * 0.3 }
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headerContent}>
          <Sparkles className={styles.headerIcon} />
          <h1 className={styles.headerTitle}>
            SELECTED
            <motion.span
              className={styles.headerAccent}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              PROJECTS
            </motion.span>
          </h1>
          <p className={styles.headerSubtitle}>
            Where design thinking meets technical execution
          </p>
        </div>
      </motion.div>

      <div className={styles.wrapper}>
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={styles.project}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              boxShadow: `0 30px 60px ${project.color}20`,
            }}
          >
            <div className={styles.projectFrame} style={{ borderColor: `${project.color}30` }} />
            
            <motion.div
              className={styles.indexContainer}
              style={{
                x: useTransform(x, [-100, 100], [-15, 15]),
                y: useTransform(y, [-100, 100], [-15, 15]),
              }}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div 
                className={styles.indexGlow} 
                style={{ background: project.gradient }} 
              />
            </motion.div>

            <motion.div
              className={styles.projectIcon}
              style={{ color: project.color }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {project.icon}
            </motion.div>

            <div className={styles.titleGroup}>
              <motion.h2 
                className={styles.projectName}
                whileHover={{ x: 5 }}
              >
                {project.name}
                <motion.span
                  className={styles.nameUnderline}
                  style={{ background: project.gradient }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                />
              </motion.h2>
              <h3 className={styles.projectConcept}>{project.concept}</h3>
            </div>

            <motion.p 
              className={styles.description}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {project.description}
            </motion.p>

            <ul className={styles.decisionsList}>
              {project.decisions.map((item, i) => (
                <motion.li
                  key={item}
                  className={styles.decisionItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + i * 0.1 + 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <Target className={styles.bulletIcon} style={{ color: project.color }} />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className={styles.techTags}>
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className={styles.techTag}
                  style={{ borderColor: `${project.color}40` }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${project.color}15`,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
              style={{ 
                background: project.gradient,
                color: 'white'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 10px 30px ${project.color}40`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Project</span>
              <ArrowUpRight className={styles.linkIcon} />
            </motion.a>

            <motion.aside
              className={styles.metaSidebar}
              style={{
                x: useTransform(x, [-100, 100], [10, -10]),
                y: useTransform(y, [-100, 100], [10, -10]),
              }}
            >
              <div className={styles.metaContent}>
                {project.meta.map((item, i) => (
                  <motion.div
                    key={item}
                    className={styles.metaItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <Zap className={styles.metaIcon} style={{ color: project.color }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className={styles.projectTag}
                    style={{ color: project.color }}
                    whileHover={{ scale: 1.1 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </motion.aside>

            <div 
              className={styles.projectBackground} 
              style={{ background: project.gradient }} 
            />
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.ctaContent}>
          <Code2 className={styles.ctaIcon} />
          <p className={styles.ctaText}>
            Interested in my process? Let's build something exceptional together.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <MousePointerClick className={styles.ctaButtonIcon} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}