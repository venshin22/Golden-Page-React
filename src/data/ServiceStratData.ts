import { Megaphone, MessagesSquare, Heart } from "lucide-react";
import { ServiceCardTypes } from "../types/ServiceCardTypes";


export const servicestratcardData: ServiceCardTypes[] = [
    {
	icon: Megaphone,
	iconStrokeWidth: 0.5,
	iconColor: "purple",
	borderColor: "#f6dfff",
	title: "Call To Action",
	description: "Inspire the target audience from social networks to visit your website"
},
{
	icon: MessagesSquare,
	iconStrokeWidth: 1.4,
	iconColor: "#f7c2a5",
	borderColor: "#f7c2a5",
	title: "Engage",
	description: "Encourage dialogue and coverage from influential people and sites" 
},
{
	icon: Heart,
	iconColor: "#60d1d0",
	borderColor: "#60d1d0",
	title: "Inspire",
	description: "Inspire the target audience to visit your website from social networks" 
}
];