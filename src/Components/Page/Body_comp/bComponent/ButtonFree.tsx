import { CircleDollarSign, MessageCircle, } from "lucide-react"

export default function ButtonFree () {
    return(
        <>
        <div className="flex bg-[#56aee3] py-4 px-10 mx-2 hover:bg-[#215a94] rounded-md hover:scale-110 transition-all ease-in-out duration-300">
            <a href="https://goldenarrowsolution.com/contact-us/" target="_blank" className="flex items-center">
                <MessageCircle size={35} color="white" strokeWidth={2} className="mr-2"/>
                <h1 className="text-xl font-sans">Free SEO Consultation</h1>
            </a>
        </div>
        <div className="flex bg-[#a1c627] py-4 px-10 mx-2 space-x-4 hover:bg-[#8bac24] rounded-md hover:scale-110 transition-all ease-in-out duration-300">
            <a href="https://goldenarrowsolution.com/request-a-free-seo-analysis/" target="_blank" className="flex items-center">
                <CircleDollarSign size={35} color="white" strokeWidth={2} className="mr-2"/>
        <h1 className="text-xl font-sans">Request a Free Quote</h1>
            </a>
        </div>
            </>
    )
}