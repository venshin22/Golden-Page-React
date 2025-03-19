import ServeTop from "../../Services_Components/ServBody_Comps/ServeTop";
import ServeMid from "../../Services_Components/ServBody_Comps/ServeMid";
import ServeBottom from "../../Services_Components/ServBody_Comps/ServeBottom";

export default function ServBody () {
    return(
        <div className="flex flex-col w-full bg-white">
            <ServeTop/>
            <ServeMid/>
            <ServeBottom/>
        </div>
    );
}