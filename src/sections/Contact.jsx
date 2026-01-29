import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/contact.module.css";
import { 
  Send, 
  Linkedin, 
  Github, 
  Mail,
  ArrowUpRight,
  Sparkles,
  Zap,
  MessageSquare,
  Coffee,
  Rocket
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    platform: "Email",
    url: "mailto:luismmunoz409@gmail.com",
    icon: <Mail />,
    color: "#FF6B8B",
    gradient: "linear-gradient(135deg, #FF6B8B, #EC4899)",
    label: "Let's start a conversation",
    username: "luismmunoz409@gmail.com"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/luismm12",
    icon: <Linkedin />,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
    label: "Connect professionally",
    username: "@luismm12"
  },
  {
    platform: "GitHub",
    url: "https://github.com/Luisithor",
    icon: <Github />,
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    label: "Explore my code",
    username: "@Luisithor"
  },
];

const interactionMessages = [
  "Let's build something exceptional",
  "Design + Code = Magic",
  "From concept to production",
  "User-focused, engineer-driven",
  "Pixel-perfect execution"
];

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hoveredLink, setHoveredLink] = useState(null);

  const moveX = useTransform(x, [-100, 100], [-40, 40]);
  const moveY = useTransform(y, [-100, 100], [-40, 40]);

  return (
    <section
      className={styles.contact}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 10);
        y.set(posY / 10);
      }}
    >
      <div className={styles.interactiveBackground}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingShape}
            style={{
              background: socialLinks[i % socialLinks.length]?.gradient,
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className={styles.floatingMessages}>
        {interactionMessages.map((message, i) => (
          <motion.div
            key={message}
            className={styles.floatingMessage}
            style={{
              left: `${10 + i * 20}%`,
              top: `${10 + Math.cos(i) * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            {message}
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <motion.div
            className={styles.titleContainer}
            style={{ x: moveX, y: moveY }}
          >
            <Sparkles className={styles.titleIcon} />
            <h1 className={styles.title}>
              LET'S
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
                CREATE
              </motion.span>
            </h1>
          </motion.div>
          <p className={styles.subtitle}>
            Together, we can build experiences that matter
          </p>
        </div>

        <div className={styles.messageContainer}>
          <motion.div
            className={styles.messageBlock}
            style={{ x: moveX, y: moveY }}
          >
            <MessageSquare className={styles.messageIcon} />
            <motion.p className={styles.message}>
              Looking for someone who
              <motion.span
                className={styles.highlight}
                animate={{
                  color: ["#FF6B8B", "#3B82F6", "#10B981"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                {" thinks before building "}
              </motion.span>
              and
              <motion.span
                className={styles.highlight}
                animate={{
                  color: ["#8B5CF6", "#EC4899", "#F59E0B"],
                }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                }}
              >
                {" feels before designing?" }
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.ctaBlock}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Zap className={styles.ctaIcon} />
            <motion.p
              className={styles.ctaText}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              Let's build something amazing together
            </motion.p>
          </motion.div>
        </div>

        <div className={styles.linksGrid}>
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.platform}
              className={styles.linkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px ${link.color}30`,
                scale: 1.02,
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div 
                className={styles.cardBackground}
                style={{ background: link.gradient }}
              />
              
              <div className={styles.cardContent}>
                <motion.div
                  className={styles.linkIcon}
                  style={{ color: link.color }}
                  animate={{
                    rotate: hoveredLink === index ? 360 : 0,
                    scale: hoveredLink === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {link.icon}
                </motion.div>

                <div className={styles.linkInfo}>
                  <h3 className={styles.linkPlatform}>{link.platform}</h3>
                  <p className={styles.linkLabel}>{link.label}</p>
                  <p className={styles.linkUsername}>{link.username}</p>
                </div>

                <motion.div
                  className={styles.linkArrow}
                  animate={{
                    x: hoveredLink === index ? 5 : 0,
                  }}
                >
                  <ArrowUpRight className={styles.arrowIcon} />
                </motion.div>
              </div>

              <motion.div
                className={styles.cardBorder}
                style={{ background: link.gradient }}
                animate={{
                  opacity: hoveredLink === index ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.invitation}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.invitationContent}>
            <Coffee className={styles.coffeeIcon} />
            <p className={styles.invitationText}>
              Always open for a virtual coffee chat about design, tech, or creative projects
            </p>
            <motion.a
              href="mailto:luismmunoz409@gmail.com"
              className={styles.emailButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className={styles.sendIcon} />
              <span>Say Hello</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className={styles.footerText}>
            Crafted with intention by Luis Martínez
            <motion.span
              className={styles.heart}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ♥
            </motion.span>
          </p>
          <p className={styles.footerMeta}>
            UX Engineer · Creative Developer · Design Thinker
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}