import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Alert from './Alert';
import Highlight from '@site/src/components/Highlight';
import SageCell from '@site/src/components/SageCell';

// 这个函数会被 Docusaurus 自动调用
export default {
  // Re-use the default mapping
  ...MDXComponents,
  Alert,
  Highlight,
  SageCell
};