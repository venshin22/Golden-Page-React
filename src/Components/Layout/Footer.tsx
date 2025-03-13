import { ChevronUp, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react"
export default function Footer() {
    return(
        <>
        <footer className="flex flex-col w-screen items-center py-8 bg-[#282d30] text-gray-100 space-x-4 space-y-6">
            <div className="flex flex-col lg:flex-row items-center gap-5 justify-center space-x-6">
                <img src="\assets\golden_img2.png" alt="logo" className="h-14"></img>
                <h1 className="text-2xl text-gray-100 font-sans uppercase">Digital Marketing That Grows Your Business</h1>
            </div>
            <span className="text-center font-thin text-gray-50">We are a digital marketing agency in the Philippines that connects people,
                 ideas, and opportunities.<br/> We specialize in digital advertising, website design,
                  and content creation.</span>

                  <div className="flex gap-8">
                    <a className="flex hover:text-blue-400" href="goldenarrowsolution@gmail.com"><Mail size={30} color="gray" className="mr-2"/>goldenarrowsolution@gmail.com</a>
                    <a className="flex" href="goldenarrowsolution@gmail.com" target="_blank"><Phone size={30} color="gray" className="mr-2 hover:bg-white rounded-md"/>(02) 8373-5645</a>
                  </div>
                
        </footer>

                  <div className="w-screen flex items-center justify-center bg-[#25282a] py-8 ">
                  <div className="w-[75rem] flex items-center justify-between">
                    <div className="flex gap-2">
                        <a href="https://www.facebook.com/goldenarrowdigitalsolution/" target="_blank"> <Facebook color="gray" size={45} className="hover:bg-[#56aee3] rounded-lg p-2"/></a>
                        <a href="https://www.youtube.com/@GoldenArrowDigitalPH" target="_blank"><Youtube color="gray" size={45} className="hover:bg-[#56aee3] rounded-lg p-2"/></a>
                        <a href="https://www.instagram.com/goldenarrowdigitalsolution/" target="_blank"><Instagram color="gray" size={45} className="hover:bg-[#56aee3] rounded-lg p-2"/></a>
                    </div>
                    <span className="flex gap-2 items-center">
                        
                        
                        
                    </span>
                    <a 
                        href="#top" 
                        target="_self" 
                        className="px-1.5 border border-gray-200 rounded-lg hover:bg-[#56aee3] hover:text-white transition-all duration-800 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                        >
                        <ChevronUp color="gray" size={35}/>
                        </a>
                    <span className="text-sm text-gray-50 font-thin">©2023 Golden Arrow Solution. All Rights Reserved.</span>
                  </div>
                  </div>


        </>
    )
}