export default function BottomAbout(){
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-between w-full md:w-[75rem] text-xl font-light bg-white text-gray-900 py-8">
                <span className="w-full md:w-[36.5rem] bg-gray-100 p-4 drop-shadow-md rounded-lg">
                    Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience. We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.
                </span>
                <span className="w-full md:w-[36.5rem] bg-gray-100 p-4 drop-shadow-md rounded-lg flex items-center">
                    We work in areas as diverse as search engine optimizatioon, social media marketing, email marketing and digital marketing.
                </span>
            </div>
            <div className="w-screen flex bg-white items-center justify-center text-gray-800 pb-10">
                <div className="w-full lg:w-[75rem] px-10  py-12 text-center font-thin bg-gray-100 drop-shadow-xl rounded-lg">
                <h1 className="text-3xl">We pursue relationship based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.</h1>
                </div>
            </div>  
        </div>
    )
}