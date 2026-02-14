import React from 'react';

type TextProps = {
  strings: string[];
};

// Lightweight fallback to avoid external animation dependencies in legacy views.
const Text = ({ strings }: TextProps) => {
  const value = strings[0] ?? '';
  return <span>{value}</span>;
};

export default Text;
