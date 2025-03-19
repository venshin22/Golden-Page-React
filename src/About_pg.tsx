import BottomAbout from "./About_Components/Bottom_About"
import MidAbout from "./About_Components/Mid_About"
import TopAbout from "./About_Components/Top_About"

export default function About() {
    return (
        <>
        <div className="w-screen">
            <TopAbout/>
            <MidAbout/>
            <BottomAbout/>
        </div>
        </>
    )
}