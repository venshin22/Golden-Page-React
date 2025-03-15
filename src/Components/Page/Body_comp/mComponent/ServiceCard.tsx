import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  iconColor?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
  title?: string;
  description?: string;
  borderColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  iconColor,
  iconSize = 65,
  iconStrokeWidth = 1,
  title,
  description,
  borderColor
}) => {

  const borderClass = borderColor ? `border-${borderColor}` : 'border-transparent';
  
  return (
    <div className="flex w-full lg:w-96 pl-2 pr-6">
      <div className="flex mr-4 p-2">
        {Icon && (
          <Icon 
            color={iconColor} 
            size={iconSize} 
            strokeWidth={iconStrokeWidth} 
            className={`p-4 border ${borderClass} rounded-2xl`}
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