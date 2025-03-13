import { BookOpenText, Briefcase, CalendarCog, MessageSquareText, PiggyBank, Presentation } from "lucide-react";

export default function About_drpdwn({ isVisible }: {isVisible:boolean}) {
    if (!isVisible) return null;
    
    return (
        <div id="dropdownAbout" 
        className="flex absolute top-12 -left-32 z-10 bg-gray-100 divide-y divide-gray-50 rounded-lg shadow-xl w-[30rem] text-gray-600 items-center py-4 px-8 justify-between">
            <div className="flex flex-col space-y-1 pr-8">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">AGENCY</h1>
                        <span className="text-xs">Highly experienced team</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Briefcase color="gray" size={25} className="pr-1.5"/>Our Agency</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><CalendarCog color="gray" size={25} className="pr-1.5"/> Our Services</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><PiggyBank color="gray" size={25} className="pr-1.5"/> Pricing Packages</a></li>
            </div>
            <div className="flex flex-col space-y-1 pr-8">
                    <div className="pb-2 flex flex-col">
                        <h1 className="text-md font-mono">EXPERIENCE</h1>
                        <span className="text-xs">Selected clients and projects</span>
                    </div>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><MessageSquareText color="gray" size={25} className="pr-1.5"/> Testimonials</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><BookOpenText color="gray" size={25} className="pr-1.5"/> Free Resources</a></li>
                    <li><a className="flex items-center py-0.5 hover:bg-gray-200 text-sm"><Presentation color="gray" size={25} className="pr-1.5"/> Case Studies</a></li>
            </div>
        </div>
    )
}