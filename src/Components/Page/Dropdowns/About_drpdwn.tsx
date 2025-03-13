export default function About_drpdwn({ isVisible }: {isVisible:boolean}) {
    if (!isVisible) return null;
    
    return (
        <div id="dropdownAbout" 
        className="flex absolute top-12 left-0 z-10 bg-gray-100 divide-y divide-gray-50 rounded-lg shadow-lg w-[18rem] text-sm text-gray-600">
            <div className="flex flex-col space-y-2">
                <ul>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Our Agency</a></li>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Our Services</a></li>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Pricing Packages</a></li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2">
                <ul>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Testimonials</a></li>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Free Resources</a></li>
                    <li><a className="block px-4 py-2 hover:bg-gray-200">Case Studies</a></li>
                </ul>
            </div>
        </div>
    )
}