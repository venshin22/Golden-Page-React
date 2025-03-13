export default function Services_drpdwn({ isVisible } : {isVisible:boolean}) {
    if (!isVisible) return null;
    
    return (
        <div id="dropdownServices" 
        className="flex absolute top-10 left-0 right-0 z-10 mx-auto bg-gray-100 divide-gray-50 rounded-lg shadow-lg h-[20rem] w-[60rem] p-2 text-sm text-gray-600">
            <div className="flex flex-col space-y-2 mr-8">
                <ul>
                    <li><a className="block text-lg px-4 text-gray-900 py-2 hover:bg-gray-200">WEB DEVELOPMENT</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Content Marketing Strategy</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Web Design</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Web Development</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Mobile Marketing</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Digital Consultancy</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Reputation Management</a></li>
                </ul>
            </div>
            <div className="flex flex-col space-y-2 mr-8">
                <ul>
                    <li><a className="block text-lg px-4 text-gray-900 py-2 hover:bg-gray-200">ONLINE MARKETING</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Seach Engine Optimization</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Local SEO</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Social Media Marketing</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Email Marketing</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Pay Per Click (PPC) Management</a></li>
                </ul>
            </div>
            <div className="flex space-y-2 mr-8">
                <ul>
                    <li><a className="block text-lg px-4 text-gray-900 py-2 hover:bg-gray-200">SALES OPTIMIZATION</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Conversion Rate Optimization</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Online Presence analysis</a></li>
                    <li><a className="block px-4 py-1 hover:bg-gray-200">Affiliate Management</a></li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 mr-8">
                <h1 className="text-3xl mb-2">Full Service Digital Creative Agency</h1>
                <span className="text-lg">We have a strategy, experience and a proven track record in increasing leads for our clients</span>
            </div>
        </div>
    )
}