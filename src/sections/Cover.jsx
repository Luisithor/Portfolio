import { motion } from "framer-motion";
import styles from "../styles/cover.module.css";
import { ArrowUpRight } from "lucide-react";

export default function Cover() {
  return (
    <div className={styles.cover}>
      {/* Columna Izquierda: Mensaje Claro, Directo y Humano */}
      <div className={styles.infoCol}>
        <div className={styles.badge}>
          <span className={styles.statusDot} />
          <span>DESARROLLO DE SOFTWARE // 2026</span>
        </div>

        <h1 className={styles.title}>
          Software a medida <br />
          <span className={styles.titleSubtitle}>para negocios reales.</span>
        </h1>

        <p className={styles.description}>
          Construyo plataformas web, sistemas de gestión y herramientas digitales enfocadas en funcionalidad, rendimiento y diseño limpio. Sin plantillas genéricas.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>
            Ver proyectos
            <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contacto
          </a>
        </div>
      </div>

      {/* Columna Derecha: Vista Previa de Producto en Contenedor Claro */}
      <div className={styles.visualCol}>
        <div className={styles.previewCard}>
          <div className={styles.cardHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.cardTitle}>tabora_pos_v2.0 — preview</span>
          </div>
          
          <div className={styles.cardBody}>
            {/* Reemplaza este div por la imagen o mockup de tu proyecto real */}
            <div className={styles.placeholderUI}>
              <div className={styles.uiHeaderBar} />
              <div className={styles.uiGrid}>
                <div className={styles.uiCard} />
                <div className={styles.uiCard} />
              </div>
              <div className={styles.uiTable} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}