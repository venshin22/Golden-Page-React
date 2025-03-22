
import React from 'react';
import { BlogPostCardTypes } from '../types/BlogPostCardTypes';

type BlogPostCardProps = BlogPostCardTypes


const BlogPostCard: React.FC<BlogPostCardProps> = ({
        imgSrc,
        title,
        date,
        description,
}) => {
    return (
        <div className="flex items-center justify-center rounded-lg shadow-md w-full h-[20rem] bg-white">
            <div className="w-full md:w-[30rem]">
                <img src={imgSrc} alt={title} className="h-[20rem] rounded-l-lg" />
            </div>
            <div className="flex flex-col w-full md:w-[45rem] font-thin text-gray-600 p-8">
                <h1 className="text-3xl text-gray-700">{title}</h1>
                <p>{date}</p>
                <span className="py-6 text-lg">{description}</span>
                <div className="flex w-full">
                    <button className="px-4 py-2 border rounded-lg shadow-md font-semibold text-blue-800 hover:bg-blue-800 hover:text-white">
                        Continue Reading
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;