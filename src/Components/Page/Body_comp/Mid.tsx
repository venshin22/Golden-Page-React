import {
  User,
  ClockArrowDown,
  Trophy,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "./mComponent/ServiceCard";
import { servicecardData } from "../../../data/ServiceCardData";

export default function Mid() {
  return (
    <>
      <div className="flex w-full h-full items-center justify-center p-6 border border-y-gray-200 border-x-0"> 
        <div className="flex flex-col items-center w-full lg:w-[75rem] space-y-8">

            <div className="w-full flex flex-col lg:flex-row items-center justify-between text-gray-700 gap-8">

              {/* Service Cards */}
              {servicecardData.map((card, index) => (
                <ServiceCard key={index} {...card} />
              ))}

            </div>

          <div className="h-full w-full">
            <img
              alt="logo"
              src="\assets\g_arrow.png"
              className="object-cover w-full lg:w-[75rem] h-auto rounded-lg shadow-md mb-6"
            />
          </div>
        </div>
      </div>

      
      <div className="flex w-full h-full items-center justify-center p-6 border border-y-gray-200 border-x-0"> 
        <div className="flex flex-col w-full lg:flex-row items-center lg:w-[75rem] space-y-8">
          <div>
            <img src="\assets\icons.png" alt="icon" className="w-[47rem]"/>
          </div>

          <div className="flex flex-col font-thin text-gray-700 w-full py-[4rem] mx-8 px-8">
            <h1 className="text-4xl mb-10">
              Appear On the Front Page of Google!
            </h1>
            <span className="font-thin text-xl text-justify text-gray-700">
              We offer professional SEO services that help websites increase
              their organic search score drastically in order to compete for the
              highest rankings -- even when it comes to highly competitive
              keywords.
            </span>

            <div className="flex items-center mt-11 text-lg lg:text-2xl text-gray-500">
            <User
                    color="gray"
                    size={38}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Connect with pre-qualified customers
            </div>
            <div className="flex items-center mt-11 text-lg lg:text-2xl text-gray-500">
            <ClockArrowDown
                    color="gray"
                    size={30}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Save time and money
            </div>
            <div className="flex items-center mt-11 text-lg lg:text-2xl text-gray-500">
            <Trophy
                    color="gray"
                    size={38}
                    strokeWidth={0.5}
                    className="mr-6"
                  />
                  Rely on an experience and knowledgeable team
            </div>
            <div className="flex items-center mt-12 text-sm lg:text-lg font-thin text-sky-500">
            <button className="py-2 px-4 border border-gray-200 rounded-md flex items-center hover:bg-sky-700 hover:text-white">
              <ArrowRight strokeWidth={1} className="mr-4" />Learn More About Us</button>
            </div>

          </div>
          </div>
        </div>
    </>
  );
}
