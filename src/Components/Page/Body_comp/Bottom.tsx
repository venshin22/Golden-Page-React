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

        <div className="w-[75rem] flex flex-col items-center justify-center text-white">

            <div className="w-full flex flex-col lg:flex-row items-center">
                <div className="w-[18.75rem] flex flex-col bg-[#215a94] items-center justify-center hover:cursor-pointer">
                    <img alt="Social Media Marketing" src="\assets\socmed.png"/>
                    <div className="bg-[#204e80] w-full py-4 text-center hover:bg-[#022b59]">
                    <h1>Social Media Marketing</h1>
                    </div>
                </div>
                <div className="w-[18.75rem] flex flex-col bg-[#56aee3] items-center justify-center hover:cursor-pointer">
                    <img alt="Organic Long-Term SEO" src="\assets\se.png"/>
                    <div className="bg-[#44a2db] w-full py-4 text-center hover:bg-[#1e81b0]">
                    <h1>Organic Long-Term SEO</h1>
                    </div>
                </div>
                <div className="w-[18.75rem] flex flex-col bg-[#a1c627] items-center justify-center hover:cursor-pointer">
                    <img alt="Advanced Analytics" src="\assets\analytic.png"/>
                    <div className="bg-[#90b636] w-full py-4 text-center hover:bg-[#8bac24]">
                    <h1>Advanced Analytics</h1>
                    </div>
                </div>
                <div className="w-[18.75rem] flex flex-col bg-[#8bac24] items-center justify-center hover:cursor-pointer">
                    <img alt="Pay Per Click Strategies" src="\assets\ads.png"/>
                    <div className="bg-[#7da02c] w-full py-4 text-center hover:bg-[#5e7f0b]">
                    <h1>Pay Per Click Strategies</h1>
                    </div>
                </div>
            </div>
        

        <div className="w-full flex flex-col items-center justify-center mt-8 text-gray-600">

            <div className="w-[75rem] flex flex-col lg:flex-row gap-4 items-center justify-between">

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <MapPin color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#64b3e3] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Local Search Strategy
                </h1>
                <span className="text-sm text-justify">
                    Maximize your presence on seach engine results pages on a local scale
                </span>
                </div>
            </div>

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <MapPinned color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#9ec73b] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Map Search Optimization
                </h1>
                <span className="text-sm text-justify">
                    Google Maps Optimization is an important part of any successful local marketing strategy
                </span>
                </div>
            </div>

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <Anchor color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#ff9e28] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Link Building & Content
                </h1>
                <span className="text-sm text-justify">
                    Link building is and will continue to be a tremendously important component of Search Engine Optimization (SEO).
                </span>
                </div>
            </div>

            </div>
        
            <div className="w-[75rem] flex flex-col lg:flex-row gap-4 items-center justify-between mt-[2rem]">

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <Target color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#265a92] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Paid Search Advertising
                </h1>
                <span className="text-sm text-justify">
                    Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers 
                </span>
                </div>
            </div>

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <PencilRuler color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#88ad34] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Custom Website Design
                </h1>
                <span className="text-sm text-justify">
                    Our team speacializes in affordable web design and e-commerce.
                </span>
                </div>
            </div>

            <div className="flex w-[23rem]">
                <div className="flex mr-4 p-2">
                    <Mail color="white" size={65} strokeWidth={1} className="p-2.5 bg-[#f86a40] rounded-3xl"/>
                </div>
                <div className="flex flex-col font-thin">
                <h1 className="text-2xl pb-4">
                    Custom Email Design
                </h1>
                <span className="text-sm text-justify">
                    Custom email tempaltes that speak to your customers and resonate with your brand.
                </span>
                </div>
            </div>

            </div>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row px-4 gap-4 space- items-center justify-center text-white mt-[6rem]">
            <div className="flex bg-[#56aee3] p-4 mx-2 space-x-4 hover:bg-[#215a94] rounded-md">
                <a href="https://goldenarrowsolution.com/contact-us/" target="_blank" className="flex items-center">
                <MessageCircle size={35} color="white" strokeWidth={2}/>
                <h1 className="text-xl font-sans">Free SEO Consultation</h1>
                </a>
            </div>
            <div className="flex bg-[#a1c627] p-4 mx-2 space-x-4 hover:bg-[#8bac24] rounded-md">
                <a href="https://goldenarrowsolution.com/request-a-free-seo-analysis/" target="_blank" className="flex items-center">
                <CircleDollarSign size={35} color="white" strokeWidth={2}/>
                <h1 className="text-xl font-sans">Request a Free Quote</h1>
                </a>
            </div>
        </div>

        </div>
        </>
    )
}