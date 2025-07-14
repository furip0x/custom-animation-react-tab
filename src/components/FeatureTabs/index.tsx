import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Tab from './Tab';
import TabContent from './TabContent';
import {
  featureTabContentData,
  featureTabsTabData,
} from '../../data/feature-tabs';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="feature-tabs-section">
      <div className="feature-contents">
        <AnimatePresence mode="wait">
          {featureTabContentData.map(
            (content) =>
              activeTab === content.id && (
                <TabContent
                  key={content.id}
                  title={content.title}
                  subtitle={content.subtitle}
                  desc={content.desc}
                  animCompontent={<content.component />}
                />
              ),
          )}
        </AnimatePresence>
      </div>
      <div className="feature-tabs">
        {featureTabsTabData.map((tab) => (
          <Tab
            key={tab.id}
            icon={
              <tab.icon color={activeTab === tab.id ? '#0381ff' : '#666'} />
            }
            title={tab.title}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureTabs;
