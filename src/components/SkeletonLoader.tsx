// src/components/SkeletonLoader.tsx
import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ width = '100%', height = '20px', className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;
