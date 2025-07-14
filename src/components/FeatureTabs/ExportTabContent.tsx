import { motion, Variants } from 'motion/react';
import phoneExport from '../../assets/img/phone-scan.png';
import phoneExportArrow from '../../assets/img/phone-export-arrow.png';
import phoneExportPdf from '../../assets/img/phone-export-pdf.png';
import phoneExportJpg from '../../assets/img/phone-export-jpg.png';
import phoneExportTxt from '../../assets/img/phone-export-txt.png';

const containerVariant: Variants = {
  active: {
    y: 0,
    originY: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      type: 'spring',
      stiffness: 80,
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  inactive: {
    y: 483,
    originY: 1,
    transition: {
      when: 'afterChildren',
    },
  },
};

const arrowVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    rotate: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 170,
      damping: 20,
    },
  },
  inactive: {
    y: '210%',
    x: '335%',
    rotate: 35,
  },
};

const pdfVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    x: '65%',
    y: '100%',
  },
};

const jpgVariant: Variants = {
  active: {
    y: '0%',
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    y: '135%',
  },
};

const txtVariant: Variants = {
  active: {
    y: '0%',
    x: '0%',
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 170,
      damping: 25,
    },
  },
  inactive: {
    x: '-65%',
    y: '100%',
  },
};

const ExportTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={arrowVariant}
        className="phone-export-arrow"
        src={phoneExportArrow}
      />
      <motion.img
        variants={pdfVariant}
        className="phone-export-pdf"
        src={phoneExportPdf}
      />
      <motion.img
        variants={jpgVariant}
        className="phone-export-jpg"
        src={phoneExportJpg}
      />
      <motion.img
        variants={txtVariant}
        className="phone-export-txt"
        src={phoneExportTxt}
      />
      <img src={phoneExport} />
    </motion.div>
  );
};

export default ExportTabContent;
