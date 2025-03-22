import React from "react";
import { PostCardTypes } from "../../../../types/PostCardTypes";

type PostCardProps = PostCardTypes;

const PostCard: React.FC<PostCardProps> = ({
    imgSrc,
    title,
    alt,
    bgColor,
    hoverBgColor = "#022b59",
    headerBgColor = "#204e80",
    headerHoverBgColor = "#022b59",
}) => {
    return (
        <div 
            className={`w-full flex flex-col items-center justify-center hover:cursor-pointer`}
            style={{ backgroundColor: bgColor }}
        >
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt={alt || title}
                />
            )}
            <div 
                className={`w-full py-4 text-center`}
                style={{ 
                    backgroundColor: headerBgColor,
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = headerHoverBgColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = headerBgColor;
                }}
            >
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default PostCard;