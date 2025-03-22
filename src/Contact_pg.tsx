import { Mail, Phone } from "lucide-react"
export default function Contact () {
    return (
        <div className="w-screen flex flex-col items-center justify-center py-12">
            <div className="w-full h-[20rem] flex items-center justify-center bg-gradient-to-r from-black to-[#f7b719]">
                <span className="text-xl text-white font-semibold capitalize">Map</span>
            </div>
            <div className="w-full md:w-[75rem] bg-white flex flex-col md:flex-row justify-center py-10">
                <div className="flex flex-col justify-center gap-4 p-6 md:p-4 border-r-2 mr-6">
                    <span className="text-3xl text-gray-700 flex items-center gap-2"><Phone color="black" size={25}/>(02) 8373-5645</span>
                    <span className="text-gray-400 mb-4">Monday-Friday 9am-6pm</span>
                    <span className="text-sky-300 hover:text-sky-600 flex mb-8 items-center gap-1"><Mail color="blue" size={20}/> goldenarrowsolutions@gmail.com</span>
                    <span className="text-xl text-gray-600">4th Floor 331 Bldg Sen. Gil Puyat <br/> Ave, Makati City</span>
                </div>


                <form className="flex flex-col w-full md:w-[45rem] p-6 md:p-4 shadow-xl rounded-lg ml-4 border border-gradient-to-right from-black to-[#f7b719]">
                <h2 className="text-2xl font-bold mb-4">Start a conversation</h2>
                    <div className="flex justify-between gap-6">
                        <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-700">Name*</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
                            required
                        />
                        </div>
                        <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
                            required
                        />
                        </div>
                    </div>

                    <div className="flex justify-between gap-6">
                        <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
                        />
                        <label className="block text-xs font-medium text-gray-400"> (optional) </label>
                        </div>
                        <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
                        />
                        <label className="block text-xs font-medium text-gray-400"> (optional) </label>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
                        required
                    ></textarea>
                    <label className="block text-xs font-medium text-gray-400">
                        Please, let us know the best time to contact you by phone (if provided).
                    </label>
                    </div>

                    <button
                    type="submit"
                    className="w-[10rem] bg-gradient-to-r from-black to-[#f7b719] text-white py-2 px-4 rounded-md hover:bg-indigo-700 hover:scale-110 transition-all ease-in-out duration-300 border hover:border-gray-700 animate-bounce font-semibold"
                    >
                    Submit
                    </button>
                </form>
            </div>
        </div>
    )
}