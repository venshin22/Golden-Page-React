import { Briefcase, CalendarCog, ChartPie, CodeXml, MailOpen, MapPinned, MessagesSquare, MonitorSmartphone, Pencil, PiggyBank, Podcast, Search, SquareActivity, TabletSmartphone, Trophy, Users } from "lucide-react";
export default function Services_drpdwn({ isVisible } : {isVisible:boolean}) {
    if (!isVisible) return null;
    
    return (
        <div id="dropdownAbout" 
        className="flex absolute lg:flex-grow top-12 -left-96 z-10 bg-gray-100 divide-y divide-gray-50 rounded-lg shadow-xl w-[78rem] text-gray-600 py-4 px-8 justify-between">
            
            <div className="flex flex-col space-y-1">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">WEB DEVELOPMENT</h1>
                        <span className="text-xs">Web Design & Development Solutions</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Pencil color="gray" size={25} className="pr-1.5"/>Content Marketing Strategy</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><MonitorSmartphone color="gray" size={25} className="pr-1.5"/> Web Design</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><CodeXml color="gray" size={25} className="pr-1.5"/> Web Development</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><TabletSmartphone color="gray" size={25} className="pr-1.5"/> Mobile Marketing</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Briefcase color="gray" size={25} className="pr-1.5"/> Digital Consultancy</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Trophy color="gray" size={25} className="pr-1.5"/> Reputation Management</a></li>
            </div>
            <div className="flex flex-col space-y-1">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">ONLINE MARKETING</h1>
                        <span className="text-xs">How we can help you to get more sales</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Search color="gray" size={25} className="pr-1.5"/>Search Engine Optimization</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><MapPinned color="gray" size={25} className="pr-1.5"/> Local SEO</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><MessagesSquare color="gray" size={25} className="pr-1.5"/> Social Media Marketing</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><MailOpen color="gray" size={25} className="pr-1.5"/> Email Marketing</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Podcast color="gray" size={25} className="pr-1.5"/> Pay Per Click (PPC) Management</a></li>
            </div>
            <div className="flex flex-col space-y-1">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">SALES OPTIMIZATION</h1>
                        <span className="text-xs">Improve the success of marketing efforts</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><SquareActivity color="gray" size={25} className="pr-1.5"/>Conversion Rate Optimization</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><ChartPie color="gray" size={25} className="pr-1.5"/> Online Presence Analysis</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Users color="gray" size={25} className="pr-1.5"/> Affiliate Management</a></li>
            </div>
            <div className="flex flex-col space-y-1 pr-8 w-[20rem]">
                    <div className="flex flex-col">
                        <h1 className="pb-6 text-2xl font-mono">Full Service Digital Creative Agency</h1>
                        <span className="text-lg">We have a strategy, experience and a proven track record in increasing leads for our clients</span>
                    </div>
            </div>
        </div>
    )
}