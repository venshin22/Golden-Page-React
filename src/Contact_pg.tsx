import { Mail, Phone } from "lucide-react"
export default function Contact () {
    return (
        <div className="w-screen flex flex-col items-center justify-center py-12">
            <div className="w-full h-[20rem] flex items-center justify-center bg-rose-200">
                <span>Map</span>
            </div>
            <div className="w-full md:w-[75rem] bg-white flex flex-col md:flex-row justify-center py-10">
                <div className="flex flex-col gap-4 p-6 md:p-4">
                    <span className="text-3xl text-gray-700 flex items-center"><Phone color="gray" size={20}/>(02) 8373-5645</span>
                    <span className="text-gray-400 mb-4">Monday-Friday 9am-6pm</span>
                    <span className="text-sky-300 hover:text-sky-600 flex mb-8"><Mail color="blue" size={20}/> goldenarrowsolutions@gmail.com</span>
                    <span className="text-xl text-gray-600">4th Floor 331 Bldg Sen. Gil Puyat <br/> Ave, Makati City</span>
                </div>
                <form className="flex flex-col w-full md:w-[45rem] p-6 md:p-4">
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
                    className="w-[10rem] bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                    >
                    Submit
                    </button>
                </form>
            </div>
        </div>
    )
}