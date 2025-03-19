import React from "react";
import { ServiceCardTypes } from "../../../../types/ServiceCardTypes";

type ServiceCardProps = ServiceCardTypes;

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  iconColor,
  iconSize = 65,
  iconStrokeWidth = 1,
  title,
  description,
  borderColor
}) => {


  
  return (
    <div className="flex w-full lg:w-96 ">
      <div className="flex mr-4 p-2">
        {Icon && (
          <Icon 
            color={iconColor} 
            size={iconSize} 
            strokeWidth={iconStrokeWidth} 
            className={`p-4 border rounded-2xl`}
            style={{borderColor: borderColor}}
          />
        )}
      </div>
      <div className="flex flex-col font-thin">
        <h1 className="text-2xl pb-4">
          {title}
        </h1>
        <span className="text-sm">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;