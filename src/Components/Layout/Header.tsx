import { useState } from "react";
import About_drpdwn from "../Page/Dropdowns/About_drpdwn";
import Services_drpdwn from "../Page/Dropdowns/Services_drpdwn";
import { Menu } from "lucide-react";

export default function Header() {
    const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
    const [isServicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  
    return(
        <div className="flex flex-col items-center justify-between">
        <div className="flex w-[1200px] shrink items-center justify-between bg-white py-2 px-6">
            <div className="flex ">
                <img src="/assets/golden_img.png" alt="logo_blck" className="h-10"/>
            </div>
            <div className="hidden lg:flex lg:text-xl">
                <ul className="flex p-4 space-x-6">
                    <li className="relative">
                        <button 
                        id="dropdownHoverAbout"
                        type="button"
                        onMouseEnter={() => setAboutDropdownVisible(true)}
                        onMouseLeave={() => setAboutDropdownVisible(false)}  
                        className="hover:text-blue-900"
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
                        className="hover:text-blue-900"
                        data-dropdown-toggle="dropdownHoverServices"
                        data-dropdown-trigger="hover">Services</button>
                        <Services_drpdwn isVisible={isServicesDropdownVisible} />
                    </li>
                    
                    <li className="hover:text-blue-900">Blog</li>
                    <li className="hover:text-blue-900">Contacts</li>
                </ul>
            </div>
            <div>
                <button className="p-2 border border-gray-400 rounded-md hover:bg-gray-400"><Menu size={25}/></button>
            </div>
        </div>
        </div>
    )
}