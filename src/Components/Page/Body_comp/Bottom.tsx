import PostCard from "./bComponent/PostCard"
import FeatureCard from "./bComponent/FeatureCard"
import { Anchor, CircleDollarSign, Mail, MapPin, MapPinned, MessageCircle, PencilRuler, Target } from "lucide-react"
export default function Bottom() {
    return (
        <>
        <div className="flex flex-col items-center justify-center pt-4 pb-10 px-8 border border-gray-200">
        <div className="flex flex-col lg:flex w-full items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center py-8 space-y-4 text-gray-600">
                <h1 className="text-5xl font-thin">Full Service Digital Marketing Agency</h1>
                <span className="text-xl">Search Engine & Social Media Optimization Experts</span>
            </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-white">

            <div className="w-[75rem] flex flex-col lg:flex-row items-center justify-center">
                {/* Social Media Marketing */}
                <PostCard
                    imgSrc="/assets/socmed.png"
                    title="Social Media Marketing"
                    alt="Social Media Marketing"
                    bgColor="#215a94"
                    hoverBgColor="#022b59"
                    headerBgColor="#204e80"
                    headerHoverBgColor="#022b59"
                />

                {/* Organic Long-Term SEO */}
                <PostCard
                    imgSrc="/assets/se.png"
                    title="Organic Long-Term SEO"
                    alt="Organic Long-Term SEO"
                    bgColor="#56aee3"
                    hoverBgColor="#1e81b0"
                    headerBgColor="#44a2db"
                    headerHoverBgColor="#1e81b0"
                />

                {/* Advanced Analytics Card */}
                <PostCard
                    imgSrc="/assets/analytic.png"
                    title="Advanced Analytics"
                    alt="Advanced Analytics"
                    bgColor="#a1c627"
                    hoverBgColor="#8bac24"
                    headerBgColor="#90b636"
                    headerHoverBgColor="#8bac24"
                />

                {/* Pay Per Click Strategies Card */}
                <PostCard
                    imgSrc="/assets/ads.png"
                    title="Pay Per Click Strategies"
                    alt="Pay Per Click Strategies"
                    bgColor="#8bac24"
                    hoverBgColor="#5e7f0b"
                    headerBgColor="#7da02c"
                    headerHoverBgColor="#5e7f0b"
                />
            </div>
        

            <div className="w-full flex flex-col items-center md:items-start gap-8 md:gap-14 justify-center mt-8 text-gray-600 mx-8">


            <div className="w-full max-w-[75rem] flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto">

            <FeatureCard
                icon={MapPin}
                title="Local Search Strategy"
                description="Maximize your presence on search engine results pages on a local scale"
                iconBgColor="#64b3e3"
                />

            <FeatureCard
                icon={MapPinned}
                title="Map Search Optimization"
                description="Google Maps Optimization is an important part of any successful local marketing strategy"
                iconBgColor="#9ec73b"
                />

            <FeatureCard
                icon={Anchor}
                title="Link Building & Content"
                description="Link building is and will continue to be a tremendously important component of Search Engine Optimizaiton (SEO)."
                iconBgColor="#ff9e28"
                />

            </div>

            <div className="w-full max-w-[75rem] flex flex-col lg:flex-row gap-8 justify-between mx-auto">

            <FeatureCard
                icon={Target}
                title="Paid Search Advertising"
                description="Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers."
                iconBgColor="#265a92"
                /> 

            <FeatureCard
                icon={PencilRuler}
                title="Custome Website Design"
                description="Our team specializes in afforable web design and e-commerce."
                iconBgColor="#88ad34"
                />    

            <FeatureCard
                icon={Mail}
                title="Custom Email Design"
                description="Custom email templates that speak to your customers and resonate with your brand."
                iconBgColor="#f86a40"
                />

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