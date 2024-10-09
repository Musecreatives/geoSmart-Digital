import Image from "next/image";

import styles from "./softwareEngineering.module.css"
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";
import AboutProgram from "@/components/program/About/About";
import WhoCanEnroll from "@/components/program/WhyEnroll/WhoCanEnrollWhoCanEnroll";
import CoursesUnderProgram from "@/components/program/CoursesUnderProgram/CoursesUnderProgram";
import ProgramBenefits from "@/components/program/Benefits/Benefits";

//images
import icon1 from "../../../public/assets/icons/pg1.png";
import icon2 from "../../../public/assets/icons/graduates.png";
import icon3 from "../../../public/assets/icons/it_professional.png";
import icon4 from "../../../public/assets/icons/entreprenuer.png";
import icon5 from "../../../public/assets/icons/tech_enthusiast.png";
import CustomBg from "../../../public/assets/imgs/software_engineering_bg.jpg";
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
        "      Career changers seeking a path into tech.",
        "      Recent graduates eager to apply their knowledge.",
        "       IT professionals aiming to specialize.",
        "      Entrepreneurs with software ambitions.",
        "       Tech enthusiasts curious about coding."
    ]

    const whoCanEnrollIcons = [icon1, icon2, icon3, icon4, icon5];
    return (
        <main>
            {/* hero */}
            <ProgramHeader
                bg={CustomBg}
                certificate="Training Program"
                />
            <div className={styles.spacing_300}></div>
            <AboutProgram
                aboutParagraph="Our Software Engineering Training program is designed to equip you with the knowledge and expertise to excel in the fast-paced and dynamic field of software development."
            />
            <div className={styles.spacing_normal}></div>
            <WhoCanEnroll array={whoCanEnroll} icons={whoCanEnrollIcons} />
            <div className={styles.spacing_normal}></div>
            <CoursesUnderProgram />
            <div className={styles.spacing_normal}></div>
            <ProgramBenefits title="Prepare to Become a Software Engineering" array={benefits} />
        </main>
    )
}

export default SoftwareEngineeringPage;