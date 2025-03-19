import React from 'react';
import { FeatureCardTypes } from '../../../types/FeatureCardTypes';

type ServiceFeatureCardProps = FeatureCardTypes;

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = "white",
  iconBgColor = "#60788b"
}) => {
  return (
    <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl items-start pr-6">
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
        <h1 className="text-xl sm:text-2xl pb-2 sm:pb-4 text-white">
          {title}
        </h1>
        <span className="text-md text-gray-400">
          {description}
        </span>
        <a className='py-1 px-4 border border-gray-50 rounded-md mt-4 w-28 text-md hover:bg-sky-600 hover:border-sky-600'>Learn More</a>
      </div>
    
    </div>
  );
};

export default ServiceFeatureCard;