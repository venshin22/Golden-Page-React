import PostCard from "./bComponent/PostCard"
import FeatureCard from "./bComponent/FeatureCard"
import { Anchor, CircleDollarSign, Mail, MapPin, MapPinned, MessageCircle, PencilRuler, Target } from "lucide-react"
import { postcardData } from "../../../data/PostCardData"
import { featurecardData } from "../../../data/FeatureCardData"

export default function Bottom() {
    const firstRowCards = featurecardData.slice(0, 3);
    const secondRowCards = featurecardData.slice(3, 6);
    return (
        <>
        <div className="flex flex-col w-full items-center justify-center pt-4 pb-10 px-8 border border-gray-200 border-x-0">
        <div className="flex flex-col lg:flex-row w-full items-center justify-center text-center">
            <div className="flex flex-col w-full lg:w-[75rem] items-center justify-center py-8 space-y-4 text-gray-600">
                <h1 className="text-4xl lg:text-5xl font-thin">Full Service Digital Marketing Agency</h1>
                <span className="lg:text-xl">Search Engine & Social Media Optimization Experts</span>
            </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-white">

            <div className="w-full lg:w-[75rem] gap-4 md:gap-0 flex flex-col lg:flex-row items-center justify-center p-4">

                {/* PostCards */}
                {postcardData.map((card, index) => (
                    <PostCard key={index} {...card} />
                    ))}
            </div>
        

            <div className="w-full flex flex-col items-center md:items-start gap-8 md:gap-14 justify-center mt-8 text-gray-600 mx-8">

            <div className="w-full lg:w-[75rem] flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto">

            {firstRowCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}

            </div>

            <div className="w-full lg:w-[75rem] flex flex-col lg:flex-row items-center gap-8 justify-between mx-auto">

            {secondRowCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
            ))}

            </div>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row px-4 gap-4 space- items-center justify-center text-white mt-[6rem]">
            <div className="flex bg-[#56aee3] py-4 px-10 mx-2 hover:bg-[#215a94] rounded-md">
                <a href="https://goldenarrowsolution.com/contact-us/" target="_blank" className="flex items-center">
                <MessageCircle size={35} color="white" strokeWidth={2} className="mr-2"/>
                <h1 className="text-xl font-sans">Free SEO Consultation</h1>
                </a>
            </div>
            <div className="flex bg-[#a1c627] py-4 px-10 mx-2 space-x-4 hover:bg-[#8bac24] rounded-md">
                <a href="https://goldenarrowsolution.com/request-a-free-seo-analysis/" target="_blank" className="flex items-center">
                <CircleDollarSign size={35} color="white" strokeWidth={2} className="mr-2"/>
                <h1 className="text-xl font-sans">Request a Free Quote</h1>
                </a>
            </div>
        </div>

        </div>
        </>
    )
}