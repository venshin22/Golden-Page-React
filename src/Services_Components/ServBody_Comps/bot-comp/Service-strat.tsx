import React from "react";
import { ServiceCardTypes } from "../../../types/ServiceCardTypes";

type ServicestratCardProps = ServiceCardTypes;

const ServiceStratCard: React.FC<ServicestratCardProps> = ({
  icon: Icon,
  iconColor,
  iconSize = 95,
  iconStrokeWidth = 0.5,
  title,
  description,
  borderColor
}) => {
  
  return (
    <div className="flex justify-between text-gray-700">
      <div className="flex px-6 py-4 gap-6">
        {Icon && (
          <Icon 
            color={iconColor} 
            size={iconSize} 
            strokeWidth={iconStrokeWidth} 
            className={`px-4 py-2 w-[25%] md:w-[40%] border rounded-[40%]`}
            style={{borderColor: borderColor}}
          />
        )}
        <div className="flex flex-col font-thin gap-4">
        <h1 className="text-3xl">
          {title}
        </h1>
        <span className="text-sm">
          {description}
        </span>
      </div>
      </div>
    </div>
  );
};

export default ServiceStratCard;