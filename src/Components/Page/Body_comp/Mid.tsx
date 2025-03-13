import {
  ShieldHalf,
  SlidersVertical,
  ChartNetwork,
  User,
  ClockArrowDown,
  Trophy,
  ArrowRight,
} from "lucide-react";
export default function Mid() {
  return (
    <>
      <div className="flex w-full] h-full items-center justify-center p-6 border border-y-gray-200"> 
        <div className="flex flex-col items-center w-[75rem] space-y-8">

            <div className="w-full flex flex-col lg:flex-row items-center justify-between text-gray-700">

              {/* Online Reputation Management */}
                <div className="flex w-[23.5rem]">
                  <div className="flex mr-4 p-2">
                    <ShieldHalf color="purple" size={65} strokeWidth={0.3} className="p-4 border border-purple-300 rounded-2xl"/>
                  </div>
                  <div className="flex flex-col font-thin">
                  <h1 className="text-2xl pb-4">
                    Online Reputation Management
                  </h1>
                  <span className="text-sm">
                    Analyzing negative materials about your brand and addressing
                    them with sentiment analysis and press release distribution.
                  </span>
                  </div>
                </div>

                {/* Conversion Rate Optimization */}
                <div className="flex w-[23.5rem]">
                  <div className="flex mr-4 p-2">
                    <SlidersVertical color="#f5af89" size={65} strokeWidth={1} className="p-4 border border-orange-200 rounded-2xl"/>
                  </div>
                  <div className="flex flex-col font-thin">
                  <h1 className="text-2xl pb-4">
                    Conversion Rate Optimization
                  </h1>
                  <span className="text-sm">
                    Turn your visitors into customers with our team of
                    experts. We'll analyze your website and develop a suitable conversion-rate strategy.
                  </span>
                  </div>
                </div>

                {/* Real-time Social Media Analytic */}
                <div className="flex w-[23.5rem]">
                  <div className="flex mr-4 p-2">
                    <ChartNetwork color="#60d1d0" size={65} strokeWidth={1} className="p-4 border border-teal-200 rounded-2xl"/>
                  </div>
                  <div className="flex flex-col font-thin">
                  <h1 className="text-2xl pb-4">
                    Real-Time Social Media Analytics
                  </h1>
                  <span className="text-sm">
                    We produce bespoke reports and technical audits that
                    can help your business with specific areas of digital
                    marketing.
                  </span>
                  </div>
                </div>

            </div>

          <div className="h-full w-full">
            <img
              alt="logo"
              src="\assets\g_arrow.png"
              className="object-cover w-[75rem] h-auto rounded-lg shadow-md mb-6"
            />
          </div>
        </div>
      </div>

      
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div>
            <img src="\assets\icons.png" alt="icon"/>
          </div>
          <div className="flex flex-col font-thin text-gray-700 w-[42.5rem] py-[4rem] ml-8 pl-6">
            <h1 className="text-4xl mb-10">
              Appear On the Front Page of Google!
            </h1>
            <span className="font-thin text-xl text-justify text-gray-700">
              We offer professional SEO services that help websites increase
              their organic search score drastically in order to compete for the
              highest rankings -- even when it comes to highly competitive
              keywords.
            </span>
            <div className="flex items-center mt-11 text-2xl text-gray-500">
            <User
                    color="gray"
                    size={38}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Connect with pre-qualified customers
            </div>
            <div className="flex items-center mt-11 text-2xl text-gray-500">
            <ClockArrowDown
                    color="gray"
                    size={38}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Save time and money
            </div>
            <div className="flex items-center mt-11 text-2xl text-gray-500">
            <Trophy
                    color="gray"
                    size={38}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Rely on an experience and knowledgeable team
            </div>
            <div className="flex items-center mt-12 text-lg font-thin text-sky-500">
            <button className="py-2 px-4 border border-gray-200 rounded-md flex items-center hover:bg-sky-700 hover:text-white">
              <ArrowRight strokeWidth={1} className="mr-4" />Learn More About Us</button>
            </div>

          </div>
          </div>
        </div>
    </>
  );
}
