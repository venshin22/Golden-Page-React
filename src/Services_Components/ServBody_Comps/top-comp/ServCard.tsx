import React from "react";
import { ChevronRight } from "lucide-react";
import { ServCardTypes } from '../../../types/ServCardTypes';


type ServCardProps = ServCardTypes;

export const ServCard: React.FC<ServCardProps> = ({
    imgSrc,
    title,
    description,
    alt,
    bgColor,
    footerBgColor,
    footerText = "Learn More"
}) => {
    return (
        <div className="flex flex-col w-full items-center p-2.5">
            <div className="flex flex-col w-full lg:w-full h-full items-center p-6" style={{ backgroundColor: bgColor }}>
                <div className="lg:p-8 lg:h-[20rem]">
                    {imgSrc && (
                        <img 
                            src={imgSrc}
                            alt={alt || title}
                        />
                    )}
                </div>
                <div className="flex flex-col w-full gap-6">
                    <h1 className="text-2xl text-white">{title}</h1>
                    <span className="text-sm font-thin text-gray-50">{description}</span>
                </div>
            </div>

            <div className="flex w-full p-4 py-6 text-white" style={{ backgroundColor: footerBgColor }}>
                <ChevronRight />
                <h1>{footerText}</h1>
            </div>
        </div>
    );
};