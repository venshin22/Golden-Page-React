import { MapPin, MapPinned, Anchor, Target, PencilRuler, Mail } from "lucide-react";
import { FeatureCardTypes } from "../types/FeatureCardTypes";

export const featurecardData: FeatureCardTypes[] = [
    {
        icon: MapPin,
        title: "Local Search Strategy",
        description: "Maximize your presence on seach engine results pages on a local scale",
        iconBgColor: "#64b3e3"
},
{
        icon: MapPinned,
        title: "Map Seach Optimization",
        description: "Google Maps Optimization is an important part of any successful local marketing strategy",
        iconBgColor: "#9ec73b"
},
{
        icon: Anchor,
        title: "Link Building & Content",
        description: "Link building is and will continue to be a tremendously important component of Search Engine Optimizaiton (SEO).",
        iconBgColor: "#ff9e28"
},
{
        icon: Target,
        title: "Paid Search Advertising",
        description: "Paid listings on Google AdWords and Microsoft AdCenter can help you reach new customers.",
        iconBgColor: "#265a92"
},
{
        icon: PencilRuler,
        title: "Custom Website Design",
        description: "Our team specialized in affordable web design and e-commerce.",
        iconBgColor: "#88ad34"
},
{
        icon: Mail,
        title: "Custom Email Design",
        description: "Custom email templates that speak to your customers and resonate with your brand.",
        iconBgColor: "#f86a40"
},
];