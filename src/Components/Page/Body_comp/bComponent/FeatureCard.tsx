import React from 'react';
import { FeatureCardTypes } from '../../../../types/FeatureCardTypes';

type FeatureCardProps = FeatureCardTypes;

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = "white",
  iconBgColor
}) => {
  return (
    <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl items-start p-4 h-[9rem] rounded-lg shadow-md hover:drop-shadow-xl hover:scale-110 transition-all ease-in-out duration-300">
      <div className="flex mr-4 p-2">
        <Icon 
          color={iconColor} 
          size={65} 
          strokeWidth={1} 
          className="p-2.5 rounded-3xl"
          style={{ backgroundColor: iconBgColor }}
        />
      </div>
      <div className="flex flex-col font-thin">
        <h1 className="text-xl sm:text-2xl pb-2 sm:pb-4">
          {title}
        </h1>
        <span className="text-sm md:text-md text-justify">
          {description}
        </span>
      </div>
      
    </div>
  );
};

export default FeatureCard;