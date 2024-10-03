// styles
import styles from "./computer_application.module.css";
import Image from "next/image";
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";
import ProgramCoverage from "@/components/program/ProgramCoverage/ProgramCoverage";
import ProgramBenefits from "@/components/program/Benefits/Benefits";
import RequiredSkillLevel from "../program/RequiredSkillLevel/RequiredSkillLevel";
import icon1 from "../../../public/assets/icons/pg1.png";
import icon2 from "../../../public/assets/icons/pg2.png";
import icon3 from "../../../public/assets/icons/pg3.png";
import icon4 from "../../../public/assets/icons/pg4.png";
import icon5 from "../../../public/assets/icons/pg5.png";
import icon6 from "../../../public/assets/icons/pg6.png";
import icon7 from "../../../public/assets/icons/pg7.png";
import icon8 from "../../../public/assets/icons/pg8.png";

import CustomBg from "../../../public/assets/imgs/computer_application_bg.png";
import WhoCanEnroll from "../program/WhyEnroll/WhoCanEnrollWhoCanEnroll";

const ComputerApplication = () => {
    const coverageArray = [
        "  Introduction to Computers",
        "  Basic Computer Skills",
        "  Microsoft Word",
        "  Microsoft Excel",
        "  Microsoft PowerPoint",
        "  Microsoft Access",
        "  Microsoft Outlook",
        "  CorelDRAW",
    ]


    const benefits = [
        "    Comprehensive curriculum",
        "    Hands-on learning",
        "    Expert Instruction",
        "    Flexible Learning options",
        "    Earn a diploma certificate",
    ]

    const coverageIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
    return(
        <main>
            <ProgramHeader
            bg={CustomBg} 
            programTitle="Computer Application"
            fee="_ _ _ _ _"
            location="Jos, Nigeria"
            startDate="_ _ _ _ _"
            />
            <div className={styles.spacing_300}></div>
            <div className={styles.container}>
            <div className={styles.img_content} style={{borderRadius: '20px', overflow: 'hidden' }}>
                <Image src="/assets/imgs/computer_applications.jpg" alt="About program" fill/>
            </div>
            <div className={styles.text_content}>
                <h2>About the program</h2>
                <p>This comprehensive 3-month program is designed to provide participants with a solid foundation in essential computer skills, coupled with proficiency in the Microsoft Office suite. By the end of the program, graduates will receive a diploma certificate in computer applications, equipping them with the knowledge and credentials needed to succeed in today&apos;s technology-driven landscape.</p>
            </div>
        </div>
            <div className={styles.spacing_normal}></div>
            <ProgramCoverage array={coverageArray} icons={coverageIcons} />
            <div className={styles.spacing_normal}></div>
            <RequiredSkillLevel />
            <div className={styles.spacing_normal}></div>
            <ProgramBenefits array={benefits}/>
        </main>
    )
}

export default ComputerApplication;