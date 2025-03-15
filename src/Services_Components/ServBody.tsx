import ServeTop from "./ServBody_Comps/ServeTop";
import ServeMid from "./ServBody_Comps/ServeMid";
import ServeBottom from "./ServBody_Comps/ServeBottom";

export default function ServBody () {
    return(
        <div className="flex flex-col w-full bg-white">
            <ServeTop/>
            <ServeMid/>
            <ServeBottom/>
        </div>
    );
}