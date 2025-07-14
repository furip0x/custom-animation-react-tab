import { motion, Variants } from 'motion/react';

interface TabContentProps {
  title: string;
  subtitle: string;
  desc: string;
  animCompontent: React.ReactNode;
}

const tabContentVariant: Variants = {
  active: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const TabContent = ({
  title,
  subtitle,
  desc,
  animCompontent,
}: TabContentProps) => {
  return (
    <motion.div
      className="feature-content"
      variants={tabContentVariant}
      initial="inactive"
      animate="active"
      exit="inactive"
    >
      <motion.div className="feature-content-inner">
        <div className="feature-content-text">
          <h2 className="feature-content-title">{title}</h2>
          <h3 className="feature-content-subtitle">{subtitle}</h3>
          <p className="feature-content-desc">{desc}</p>
          <a href="#" className="feature-content-link">
            Learn More
          </a>
        </div>
        <div className="feature-content-anim-wrapper">{animCompontent}</div>
      </motion.div>
    </motion.div>
  );
};

export default TabContent;
