import { Box, Globe, Loader, Lock, Map, Search, SquareCheck } from "lucide-react";

export default function Contact_drpdwn({ isVisible }: {isVisible:boolean}) {
    if (!isVisible) return null;
    
    return (
        <div id="dropdownAbout" 
        className="flex absolute top-12 -left-32 z-10 bg-gray-100 divide-y divide-gray-50 rounded-lg shadow-xl w-[30rem] text-gray-600 py-4 px-8 justify-between">
            <div className="flex flex-col space-y-1 pr-8">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">CONTACT US</h1>
                        <span className="text-xs">Contacts pages with maps, addresses and contact forms.</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Map color="gray" size={25} className="pr-1.5"/> Single Address</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Globe color="gray" size={25} className="pr-1.5"/> Multiply Addresses</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm font-semibold"> Simple Forms:</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Search color="gray" size={25} className="pr-1.5"/> Free SEO Analysis</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Lock color="gray" size={25} className="pr-1.5"/> PayPal Service Order</a></li>
            </div>
            <div className="flex flex-col space-y-1 pr-8">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">INSTANT QUOTE</h1>
                        <span className="text-xs">Predefined form tempaltes with instant quote and payment options.</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Loader color="gray" size={25} className="pr-1.5"/> Instant SEO Services Quote</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Box color="gray" size={25} className="pr-1.5"/> Web Design & Development Quote</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><SquareCheck color="gray" size={25} className="pr-1.5"/> Digital Ad Services Quote</a></li>
            </div>
        </div>
    )
}