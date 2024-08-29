import styles from "./softwareEngineering.module.css"
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";
import AboutProgram from "@/components/program/About/About";
import WhoCanEnroll from "@/components/program/WhyEnroll/WhoCanEnrollWhoCanEnroll";
import CoursesUnderProgram from "@/components/program/CoursesUnderProgram/CoursesUnderProgram";
import ProgramBenefits from "@/components/program/Benefits/Benefits";
import WhatYouLearn from "@/components/program/WhatULearn/WhatULearn";

const SoftwareEngineeringPage = () => {
    const benefits = [
        "Acquire sought-after software development skills for diverse career opportunities.",
        "Gain practical experience through real-world projects.",
        "Cutting-Edge Curriculum",
        "Flexible Options",
        "Connect with industry professionals and peers.",
        "Personal & Professional Growth",
        "Earn a certificate from a respected IT training provider.",
    ]

    const whoCanEnroll = [
        "Career changers seeking a path into tech.",
        "Recent graduates eager to apply their knowledge.",
        "IT professionals aiming to specialize.",
        "Entrepreneurs with software ambitions.",
        "Tech enthusiasts curious about coding."
    ]
    return(
        <main>
            {/* hero */}
            <ProgramHeader />
            <div className={styles.spacing_300}></div>
            <AboutProgram 
                aboutParagraph="Our Computer Networking Training program is designed to equip you with the knowledge and skills needed to excel in the field of network engineering and administration. Whether you're a beginner looking to enter the industry or an experienced professional seeking to enhance your expertise, our comprehensive curriculum covers a wide range of networking concepts and technologies."
            />
            <div className={styles.spacing_normal}></div>
            <WhoCanEnroll array={whoCanEnroll}/>
            <div className={styles.spacing_normal}></div>
            <CoursesUnderProgram />
            <div className={styles.spacing_normal}></div>
            <ProgramBenefits array={benefits}/>
        </main>
    )
}

export default SoftwareEngineeringPage;