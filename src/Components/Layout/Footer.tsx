import { ChevronUp, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col w-full items-center justify-between px-4 md:px-8 py-8 bg-[#282d30] text-gray-100">
                <div className="flex flex-col lg:flex-row items-center gap-5 justify-center px-4">
                    <img src="/assets/golden_img2.png" alt="logo" className="h-12 lg:h-16" />
                    <h1 className="text-xl lg:text-2xl text-gray-100 font-sans uppercase text-center">
                        Digital Marketing That Grows Your Business
                    </h1>
                </div>
                <span className="text-center font-thin text-gray-50 px-4 mt-4 max-w-2xl">
                    We are a digital marketing agency in the Philippines that connects people, ideas, and opportunities. We specialize in digital advertising, website design, and content creation.
                </span>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 px-4">
                    <a className="flex items-center hover:text-blue-400" href="mailto:goldenarrowsolution@gmail.com">
                        <Mail size={24} color="gray" className="mr-2" />
                        goldenarrowsolution@gmail.com
                    </a>
                    <a className="flex items-center hover:text-blue-400" href="tel:+63283735645">
                        <Phone size={24} color="gray" className="mr-2" />
                        (02) 8373-5645
                    </a>
                </div>
            </footer>

            <div className="w-full flex items-center justify-center bg-[#25282a] py-6">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 gap-4">
                    <div className="flex gap-2 mr-8">
                        <a href="https://www.facebook.com/goldenarrowdigitalsolution/" target="_blank">
                            <Facebook color="gray" size={36} className="hover:bg-[#56aee3] rounded-lg p-2" />
                        </a>
                        <a href="https://www.youtube.com/@GoldenArrowDigitalPH" target="_blank">
                            <Youtube color="gray" size={36} className="hover:bg-[#56aee3] rounded-lg p-2" />
                        </a>
                        <a href="https://www.instagram.com/goldenarrowdigitalsolution/" target="_blank">
                            <Instagram color="gray" size={36} className="hover:bg-[#56aee3] rounded-lg p-2" />
                        </a>
                    </div>

                    <a
                        href="#top"
                        className="px-1.5 border border-gray-200 rounded-lg hover:bg-[#56aee3] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
                    >
                        <ChevronUp color="gray" size={28} />
                    </a>

                    <span className="text-sm text-gray-50 font-thin text-center">
                        ©2023 Golden Arrow Solution. All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    );
}