import { ShieldHalf, SlidersVertical, ChartNetwork } from "lucide-react";
import { ServiceCardTypes } from "../types/ServiceCardTypes";


export const servicecardData: ServiceCardTypes[] = [
    {
	icon: ShieldHalf,
	iconStrokeWidth: 0.5,
	iconColor: "purple",
	borderColor: "#f6dfff",
	title: "Online Reputation Management",
	description: "Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
},
{
	icon: SlidersVertical,
	iconStrokeWidth: 1.4,
	iconColor: "#f7c2a5",
	borderColor: "#f7c2a5",
	title: "Conversion Rate Optimization",
	description: "Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy." 
},
{
	icon: ChartNetwork,
	iconColor: "#60d1d0",
	borderColor: "#60d1d0",
	title: "Real-Time Social Media Analytics",
	description: "We produce bespoke reports and technical audits that can help your business with specific areas of digital marketing." 
}
];