import Top from "./Body_comp/Top"
import Mid from "./Body_comp/Mid"
import Bottom from "./Body_comp/Bottom"
export default function Body() {
    return(
        <div className="h-full w-full bg-white">
            <Top/>
            <Mid />
            <Bottom />
        </div>
    )
}