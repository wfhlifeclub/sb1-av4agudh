import React from 'react';
import { Circle, Star, Triangle, Umbrella } from 'lucide-react';
import { Shape } from '../types';

interface ShapeIconProps {
  shape: Shape;
  className?: string;
}

export const ShapeIcon: React.FC<ShapeIconProps> = ({ shape, className = "" }) => {
  const iconProps = {
    className: `w-6 h-6 ${className}`,
    strokeWidth: 2
  };

  switch (shape) {
    case 'star':
      return <Star {...iconProps} />;
    case 'triangle':
      return <Triangle {...iconProps} />;
    case 'circle':
      return <Circle {...iconProps} />;
    case 'umbrella':
      return <Umbrella {...iconProps} />;
  }
};