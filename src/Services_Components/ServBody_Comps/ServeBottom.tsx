import { servicestratcardData } from "../../data/ServiceStratData";
import ServiceStratCard from "./bot-comp/Service-strat";

export default function ServeBottom(){
    return(
        <div className="flex flex-col items-center justify-center py-24">
            <div className="flex flex-col lg:w-[75rem] items-center justify-center text-center text-gray-600 gap-12 p-8">
                <h1 className="text-3xl md:text-5xl text-gray-900">We use strategy and experience to generate results</h1>
                <span className="text-lg md:text-xl">Our team specializes in on-page and off-page SEO as well as PPC. We have a proven track record in increasing search engine rankings for our clients. Our strategies are designed to achive one or more of the following goals:</span>
            </div>

            <div className="flex flex-col md:flex-row"></div>
            <div className="flex flex-col md:flex-row lg:w-[75rem] py-12 px-4">
            {servicestratcardData.map((card, index) => (
                    <ServiceStratCard key={index} {...card} />
                    ))}
            </div>

            <div className="flex flex-col md:flex-row w-full lg:w-[75rem] px-12 text-gray-700 gap-8 text-md md:text-lg font-thin mt-12">
                    <div>
                        <span>We can help you achive great results across several key areas including Search Engine Optimization, Social Media Marketing, Email Marketing and Digital Marketing</span>
                    </div>
                    <div>
                        <span>We combine creative ideas with our vast experience in seach technologies to deliver measurable results to our clients by engaging them with your brand using social media promotion.</span>
                    </div>
            </div>
        </div>
    );
};