import React from 'react';
import ScanTabContent from '../components/FeatureTabs/ScanTabContent';
import SignTabContent from '../components/FeatureTabs/SignTabContent';
import BatchTabContent from '../components/FeatureTabs/BatchTabContent';
import FiltersTabContent from '../components/FeatureTabs/FiltersTabContent';
import ExportTabContent from '../components/FeatureTabs/ExportTabContent';
import DocText from '../components/Icons/DocText';
import Certified from '../components/Icons/Certified';
import Scanner from '../components/Icons/Scanner';
import Filters from '../components/Icons/Filters';
import Export from '../components/Icons/Export';

interface TabContent {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  component: React.ElementType;
}

interface TabData {
  id: number;
  icon: React.ElementType;
  title: string;
}

export const featureTabContentData: TabContent[] = [
  {
    id: 0,
    title: 'DOCUMENT SCANNER',
    subtitle: 'Scan with Ease',
    desc: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    component: ScanTabContent,
  },
  {
    id: 1,
    title: 'SIGN & STAMP',
    subtitle: 'One-Tap Focus',
    desc: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    component: SignTabContent,
  },
  {
    id: 2,
    title: 'BATCH SCANNING',
    subtitle: 'Multiple Page Scan',
    desc: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    component: BatchTabContent,
  },
  {
    id: 3,
    title: 'ADVANCED FILTERS',
    subtitle: 'Unique Filters',
    desc: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    component: FiltersTabContent,
  },
  {
    id: 4,
    title: 'EXPORT & SHARE',
    subtitle: 'All-Round Conversion',
    desc: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    component: ExportTabContent,
  },
];

export const featureTabsTabData: TabData[] = [
  { id: 0, icon: DocText, title: 'Document Scanner' },
  { id: 1, icon: Certified, title: 'Sign & Stamp' },
  { id: 2, icon: Scanner, title: 'Batch Scanning' },
  { id: 3, icon: Filters, title: 'Advanced Filters' },
  { id: 4, icon: Export, title: 'Export & Share' },
];
