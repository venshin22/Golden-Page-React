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
    <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl items-start pr-6 py-4 shadow-xl rounded-xl border bg-slate-600  hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
      <div className="flex mr-4 pl-4">
        <Icon 
          color={iconColor} 
          size={65} 
          strokeWidth={1} 
          className="p-2.5 rounded-3xl"
          style={{ backgroundColor: iconBgColor }}
        />
      </div>
      <div className="flex flex-col font-thin h-full">
        <h1 className="text-xl sm:text-2xl pb-2 sm:pb-4 text-white">
          {title}
        </h1>
        <div className='flex flex-col h-full justify-between'>
        <span className="text-md text-gray-300">
          {description}
        </span>
        <a className='py-1 px-4 border border-gray-50 bg-[#2a4357] rounded-md mt-4 w-28 text-md hover:bg-sky-600 hover:border-sky-600'>Learn More</a>
        </div>
        
      </div>
    
    </div>
  );
};

export default ServiceFeatureCard;