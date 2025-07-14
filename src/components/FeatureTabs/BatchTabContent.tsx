import { motion, Variants } from 'motion/react';
import phoneBatch from '../../assets/img/phone-batch.png';
import phoneBatchFile1 from '../../assets/img/phone-batch-file1.png';
import phoneBatchFile2 from '../../assets/img/phone-batch-file2.png';
import phoneBatchFile3 from '../../assets/img/phone-batch-file3.png';

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
      staggerChildren: 0.4,
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

const item: Variants = {
  active: {
    scale: 1,
    y: '0%',
    originY: 1,
    transition: {
      duration: 0.4,
    },
  },
  inactive: {
    scale: 1.2,
    y: '115%',
  },
};

const BatchTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={item}
        className="phone-batch-file3"
        src={phoneBatchFile3}
      />
      <motion.img
        variants={item}
        className="phone-batch-file2"
        src={phoneBatchFile2}
      />
      <motion.img
        variants={item}
        className="phone-batch-file1"
        src={phoneBatchFile1}
      />
      <img src={phoneBatch} />
    </motion.div>
  );
};

export default BatchTabContent;
