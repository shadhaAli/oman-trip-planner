import React from 'react';

interface CategoryIconProps {
  category: string;
  size?: 'small' | 'medium' | 'large';
}

const iconSizes = {
  small: 16,
  medium: 20,
  large: 24,
};

const categoryIcons: Record<string, string> = {
  beach: '/icon/beach.png',
  culture: '/icon/culture.png',
  desert: '/icon/desert.png',
  food: '/icon/food.png',
  mountain: '/icon/mountain.png',
  nature: '/icon/nature.png',
};

export default function CategoryIcon({ category, size = 'medium' }: CategoryIconProps) {
  const iconPath = categoryIcons[category.toLowerCase()];
  const dimension = iconSizes[size];

  if (!iconPath) {
    return null;
  }

  return (
    <img 
      src={iconPath} 
      alt={category} 
      width={dimension} 
      height={dimension}
      style={{ 
        display: 'inline-block',
        marginRight: size === 'small' ? 4 : 6,
        verticalAlign: 'middle',
      }}
    />
  );
}

