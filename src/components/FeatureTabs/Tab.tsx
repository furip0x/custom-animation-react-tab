import { motion, Variants } from 'motion/react';

interface TabProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const blueCircleVariants: Variants = {
  inactive: {
    pathLength: 0,
    transition: { type: 'spring', duration: 1.5, bounce: 0 },
  },
  active: {
    pathLength: 1,
    transition: {
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
    },
  },
};

const Tab = ({ icon, title, isActive, onClick }: TabProps) => {
  return (
    <button
      className={`features-tab-btn ${isActive && 'active'}`}
      onClick={onClick}
    >
      <div className="features-tab-icon">
        <div className="features-tab-circle">
          <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              r="45"
              cx="50"
              cy="50"
              fill="none"
              stroke="#0381ff"
              strokeWidth="1"
              initial="inactive"
              animate={isActive ? 'active' : 'inactive'}
              variants={blueCircleVariants}
            />
            <motion.circle
              r="45"
              cx="50"
              cy="50"
              fill="none"
              stroke="#000"
              strokeOpacity={0.08}
              strokeWidth="1"
            />
          </motion.svg>
        </div>
        {icon}
      </div>
      <span>{title}</span>
    </button>
  );
};

export default Tab;
