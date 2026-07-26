import { motion } from "framer-motion";
import styles from "../styles/notes.module.css";
import { Terminal, Code2, Layers, Cpu, ShieldCheck, Zap, Gauge, Sparkles } from "lucide-react";

const technicalNotes = [
  { 
    title: "Estado Local vs. Global", 
    text: "No metas todo a Redux o Zustand por inercia. Si el estado vive en un solo componente, ahí debe quedarse.", 
    icon: <Layers size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Tipado Estricto", 
    text: "TypeScript no es para escribir más código, es para atrapar errores en compilación antes de que lleguen al usuario.", 
    icon: <Code2 size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Carga Útil & Assets", 
    text: "Pondera el impacto de cada librería. Un paquete de 50kb para una sola función casi nunca vale la pena.", 
    icon: <Gauge size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Semántica HTML", 
    text: "Un `<button>` resuelve accesibilidad y navegación por teclado gratis. Un `<div>` con `onClick` requiere parches.", 
    icon: <Terminal size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Feedback Visual", 
    text: "Toda acción asíncrona necesita un indicador de carga claro. El usuario no debe adivinar si el sistema responde.", 
    icon: <Zap size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Manejo de Errores", 
    text: "Un 'Error Boundary' bien configurado evita que toda la pantalla se rompa cuando una API falla.", 
    icon: <ShieldCheck size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Refactorización Continua", 
    text: "Escribe código pensando en la persona que lo mantendrá en 6 meses (que probablemente serás tú mismo).", 
    icon: <Cpu size={20} strokeWidth={1.75} /> 
  },
  { 
    title: "Diseño Adaptativo", 
    text: "Prueba primero en dispositivos móviles reales, no solo encogiendo la ventana del navegador.", 
    icon: <Sparkles size={20} strokeWidth={1.75} /> 
  }
];

export default function Notes() {
  return (
    <section className={styles.notes} id="notes">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.kicker}>NOTAS & APUNTES</span>
          <h2 className={styles.title}>
            Criterios técnicos <br />
            <span className={styles.subtitle}>de desarrollo diario.</span>
          </h2>
        </motion.div>

        <div className={styles.notesGrid}>
          {technicalNotes.map((note, index) => (
            <motion.div 
              key={index} 
              className={styles.noteCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.noteIcon}>{note.icon}</div>
                <span className={styles.noteIndex}>[0{index + 1}]</span>
              </div>
              
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p className={styles.noteText}>{note.text}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.footerSummary}>
          <p className={styles.summaryText}>
            "El buen software no se nota: simplemente funciona de forma fluida, segura y predecible."
          </p>
        </div>
      </div>
    </section>
  );
}