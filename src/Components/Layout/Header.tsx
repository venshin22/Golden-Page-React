import { useState } from "react";
import About_drpdwn from "../Page/Dropdowns/About_drpdwn";
import Services_drpdwn from "../Page/Dropdowns/Services_drpdwn";
import Contact_drpdwn from "../Page/Dropdowns/Contact_drpdwn";
import { ChartNoAxesColumn} from "lucide-react";

export default function Header() {
    const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
    const [isServicesDropdownVisible, setServicesDropdownVisible] = useState(false);
    const [isContactsDropdownVisible, setContactsDropdownVisible] = useState(false);
  
    return(
        <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col lg:flex-row w-[75rem] shrink items-center justify-between gap-8 bg-white py-7">
            <div className="flex ">
                <img src="/assets/golden_img.png" alt="logo_blck" className="h-12"/>
            </div>
            <div className="hidden lg:block lg:flex-row lg:text-xl font-thin">
                <ul className="flex p-4 space-x-6">
                    <li className="relative">
                        <button 
                        id="dropdownHoverAbout"
                        type="button"
                        onMouseEnter={() => setAboutDropdownVisible(true)}
                        onMouseLeave={() => setAboutDropdownVisible(false)}  
                        className="hover:text-blue-600"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover">About</button>
                        <About_drpdwn isVisible={isAboutDropdownVisible} />
                    </li>
                    
                    <li className="relative">
                        <button 
                        id="dropdownHoverServices"
                        type="button"
                        onMouseEnter={() => setServicesDropdownVisible(true)}
                        onMouseLeave={() => setServicesDropdownVisible(false)}  
                        className="hover:text-blue-600"
                        data-dropdown-toggle="dropdownHoverServices"
                        data-dropdown-trigger="hover">Services</button>
                        <Services_drpdwn isVisible={isServicesDropdownVisible} />
                    </li>
                    
                    <li className="hover:text-blue-600">Blog</li>
                    <li className="relative">
                        <button 
                        id="dropdownHoverContacts"
                        type="button"
                        onMouseEnter={() => setContactsDropdownVisible(true)}
                        onMouseLeave={() => setContactsDropdownVisible(false)}  
                        className="hover:text-blue-600"
                        data-dropdown-toggle="dropdownHoverContacts"
                        data-dropdown-trigger="hover">Contact</button>
                        <Contact_drpdwn isVisible={isContactsDropdownVisible} />
                    </li>
                </ul>
            </div>
            <div>
                <span className="hidden lg:flex font-semibold items-center p-2 px-4 mr-8 text-white gap-2 rounded-md bg-[#a1c627] hover:bg-sky-500"><ChartNoAxesColumn color="white" size={15} strokeWidth={4}/> FREE QUOTE</span>
            </div>
        </div>
        </div>
    )
}