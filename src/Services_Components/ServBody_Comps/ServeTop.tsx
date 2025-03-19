import {ServCard} from "../ServBody_Comps/top-comp/ServCard";
import { servcardsData } from "../../data/ServCardData";

export default function ServeTop () {
    const firstRowCards = servcardsData.slice(0, 3);
    const secondRowCards = servcardsData.slice(3, 6);
    return(
        <div className="w-full flex flex-col items-center justify-center pt-4 mb-16">
            <div className="flex flex-col w-[70%] lg:w-[75rem] text-gray-600 text-center gap-6  lg:py-8 px-8 lg:px-6">
                <h1 className="text-3xl lg:text-5xl">Full Service Digital Creative Agency</h1>
                <span className="text-sm lg:text-xl">We pride ourselves on delivering compelling, digital marketing solutions.Our winning solutions and experiences help many of our clients interact and engage with their customers in the best possible way.</span>
            </div>

            <div className="flex flex-col md:flex-row w-[65%] lg:w-[75rem] text-white">
                {firstRowCards.map((card, index) => (
                    <ServCard key={index} {...card} />
                ))}
            </div>

            <div className="flex flex-col md:flex-row w-[65%] lg:w-[75rem] text-white">
                {secondRowCards.map((card, index) => (
                    <ServCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};