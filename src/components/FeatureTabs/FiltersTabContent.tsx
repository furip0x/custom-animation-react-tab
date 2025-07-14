import { motion, Variants } from 'motion/react';
import phoneFilters from '../../assets/img/phone-filters.png';
import phoneFiltersLeftbar from '../../assets/img/phone-filters-leftbar.png';
import phoneFiltersRightbar from '../../assets/img/phone-filters-rightbar.png';

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
      staggerChildren: 0.1,
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
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  inactive: {
    opacity: 0,
  },
};

const FiltersTabContent = () => {
  return (
    <motion.div
      className="feature-content-anim"
      variants={containerVariant}
      initial="inactive"
      animate="active"
    >
      <motion.img
        variants={item}
        className="phone-filters-leftbar"
        src={phoneFiltersLeftbar}
      />
      <motion.img
        variants={item}
        className="phone-filters-rightbar"
        src={phoneFiltersRightbar}
      />
      <img src={phoneFilters} />
    </motion.div>
  );
};

export default FiltersTabContent;
