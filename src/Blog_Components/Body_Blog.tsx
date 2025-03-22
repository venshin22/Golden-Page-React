import React, { useState } from "react"
import { BlogPostCardData } from "../data/BlogPostCardData"
import BlogPostCard from "./BlogPostCard"
import Pagination from "./Pagination"

export default function Body_Blog (){
    const [currentPage, setCurrentPage] = useState <number> (1);
    return(
        <div className="flex flex-col w-full justify-center md:w-[75rem] my-4 gap-4">
            <header className="flex w-full py-10 font-thin text-gray-600 items-center">
                <h1 className="text-3xl font-semibold">
                    Latest company updates and industry news | 
                </h1>
                <span className="text-lg ml-2 text-blue-700">Subscribe to email updates</span>
            </header>

            <section className="flex flex-col w-full">

            <div className="flex flex-col gap-4">
            {BlogPostCardData.map((card, index) => (
                    <BlogPostCard key={index} {...card} />
                    ))}
            </div>

            <div className="p-4">
                <Pagination 
                    totalPages={3} 
                    currentPage={currentPage} 
                    onPageChange={setCurrentPage} 
                />
            </div>
            
            </section>
        </div>
    )
}