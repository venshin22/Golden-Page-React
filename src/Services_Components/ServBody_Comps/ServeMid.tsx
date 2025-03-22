import ServiceFeatureCard from "./mid-comp/ServiceFeatureCard";
import { servicefeaturecardData } from "../../data/ServiceFeatureCardData";
import ButtonFree from "../../Components/Page/Body_comp/bComponent/ButtonFree";

export default function ServeMid () {
    const firstRowCards = servicefeaturecardData.slice(0, 3);
    const secondRowCards = servicefeaturecardData.slice(3, 6);
    return(
        <div className="w-full flex flex-col shrink items-center justify-center text-white bg-[#2a4357] p-[4%] gap-8 md:gap-14" >

            <section className="w-full flex flex-col items-center justify-center text-white p-[4%] gap-8 md:gap-14">
                
            <div className="w-full lg:w-[75rem] flex flex-col justify-center md:flex-row lg:flex-row gap-6 mx-auto">

            {firstRowCards.map((card, index) => (
                <ServiceFeatureCard key={index} {...card} />
            ))}

            </div>

            <div className="w-full lg:w-[75rem] flex flex-col justify-center md:flex-row gap-6 mx-auto">

            {secondRowCards.map((card, index) => (
                <ServiceFeatureCard key={index} {...card} />
            ))}

            </div>
            </section>

            <div className="flex flex-col md:flex-row px-4 gap-8 lg:gap-4 justify-center text-white">
            <ButtonFree/>
            </div>
            

        </div>
    );
};