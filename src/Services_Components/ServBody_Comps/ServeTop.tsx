import ServCard from "./top-comp/ServCard";

export default function ServeTop () {
    return(
        <div className="w-full flex flex-col items-center justify-center pt-4 mb-16">
            <div className="flex flex-col w-full lg:w-[75rem] text-gray-600 text-center gap-6  lg:py-8 px-8 lg:px-6">
                <h1 className="text-3xl lg:text-5xl">Full Service Digital Creative Agency</h1>
                <span className="text-sm lg:text-xl">We pride ourselves on delivering compelling, digital marketing solutions.Our winning solutions and experiences help many of our clients interact and engage with their customers in the best possible way.</span>
            </div>

            <div className="flex flex-col w-full md:flex-row lg:w-[75rem] text-white">
                <ServCard
                    imgSrc="\assets\socmed-servcard.png"
                    bgColor="#1b4b6f"
                    title="Social Media Marketing"
                    description="Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business."
                    footerBgColor="#17486d" />

                <ServCard
                    imgSrc="\assets\searcheng-servcard.png"
                    bgColor="#f3ac34"
                    title="Search Engine Optimization"
                    description="Search Engine Optimization is fundamental. Our SEO strategies can grant you a high-ranking placement in search results."
                    footerBgColor="#efa435" />    

                <ServCard
                    imgSrc="\assets\advanalytics-servcard.png"
                    bgColor="#8ea220"
                    title="Advance Web Analytics"
                    description="Our services cover all aspects of Google Analytics, from inital setup to training, advanced tracking solutions and custom features."
                    footerBgColor="#879b19" />
            </div>

            <div className="flex flex-col w-full md:flex-row lg:w-[75rem] text-white">
                <ServCard
                    imgSrc="\assets\email-servcard.png"
                    bgColor="#2d6eb4"
                    title="Email Marketing"
                    description="Our custom Email Marketing services can help you save time and money."
                    footerBgColor="#2c63a2" />

                <ServCard
                    imgSrc="\assets\ppc-servcard.png"
                    bgColor="#d2321e"
                    title="Pay Per Click"
                    description="Pay-Per-Click marketing is easy and cost-effective. We know everything about PPC!"
                    footerBgColor="#cd2721" />    

                <ServCard
                    imgSrc="\assets\constrat-servcard.png"
                    bgColor="#23a3a9"
                    title="Content Strategy"
                    description="Engage with your audience through great, original content."
                    footerBgColor="#19999f" />
            </div>
        </div>
    );
};