// styles
import styles from "./computer_maintainance.module.css";
import Image from "next/image";
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";;
import WhoCanEnroll from "@/components/program/WhyEnroll/WhoCanEnrollWhoCanEnroll";
import WhatYouLearn from "@/components/program/WhatULearn/WhatULearn";
import ProgramBenefits from "@/components/program/Benefits/Benefits";

//imgs

import CustomBg from "../../../public/assets/imgs/computer_maintainance_bg.jpg";
import icon2 from "../../../public/assets/icons/individual.png";
import icon3 from "../../../public/assets/icons/it_pro.png";
import icon4 from "../../../public/assets/icons/graduates.png";
import md1 from "../../../public/assets/icons/md1.png";
import md2 from "../../../public/assets/icons/md2.png";
import md3 from "../../../public/assets/icons/md3.png";
import md4 from "../../../public/assets/icons/md4.png";
import md5 from "../../../public/assets/icons/md5.png";
import md6 from "../../../public/assets/icons/md6.png";




const computermaintainance = () => {
    const whoCanEnroll = [
        "        Individuals interested in pursuing a career in computer hardware installation, maintenance, and support.",
        "            IT professionals looking to expand their knowledge and skills in computer hardware and gain a competitive edge in the job market.",
        "       Students or recent graduates seeking practical training and hands-on experience in computer hardware and maintenance.",
    ]

    const whatYouLearn = [
        {
            title: "Hardware Fundamentals",
            desc: "Learn the basics of computer hardware components, including processors, memory, storage devices, and peripherals.",
            icon: md1 
        },
        {
            title: "System Installation and Configuration",
            desc: "Gain practical experience in installing, configuring, and troubleshooting hardware components to build functional computer systems.",
            icon: md2
        },
        {
            title: "Operating System Installation",
            desc: "Learn how to install and configure operating systems such as Windows and Linux on desktop and laptop computers.",
            icon: md3
        },
        {
            title: "Hardware Maintenance and Repair",
            desc: "Develop the skills to diagnose and troubleshoot hardware problems, perform routine maintenance tasks, and repair faulty components.",
            icon: md4
        },
        {
            title: "Networking Basics",
            desc: "Understand the fundamentals of computer networking, including network devices, protocols, and configurations.",
            icon: md5
        },
        {
            title: "Safety and ESD Precautions",
            desc: "Learn best practices for handling computer hardware safely and preventing damage from electrostatic discharge (ESD).",
            icon: md6
        },

    ]

    const benefits = [
        "Gain practical experience through hands-on labs, simulations, and real-world projects.",
        "Learn from experienced instructors with extensive knowledge of computer hardware and maintenance,",
        "Stay updated with the latest networking technologies and trends.",
        "Choose from flexible learning options to accommodate your busy schedule.",
        "Earn a diploma certificate",
    ]

    const coverageIcons = [icon2, icon3, icon4];
    return(
        <main>
            <ProgramHeader
             bg={CustomBg}
            programTitle="Computer Hardware & Maintainance"
            fee="_ _ _ _ _"
            location="Jos, Nigeria"
            startDate="_ _ _ _ _"
            />
            <div className={styles.spacing_300}></div>
            <div className={styles.container}>
            <div className={styles.img_content} style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <Image src="/assets/imgs/computer_maintainance.png" alt="About program" fill/>
            </div>
            <div className={styles.text_content}>
                <h2>About the program</h2>
                <p>Our comprehensive Computer Hardware and Maintenance Training program is designed to provide you with the knowledge and skills needed to excel in the field of computer hardware installation, maintenance, and troubleshooting leading to a Diploma in Computer Maintenance. Whether you're a beginner with a passion for technology or an experienced professional seeking to expand your expertise, our program offers hands-on training and practical experience to help you succeed.</p>
            </div>
        </div>
            <div className={styles.spacing_normal}></div>
            <WhoCanEnroll array={whoCanEnroll} icons={coverageIcons}/>
            <div className={styles.spacing_normal}></div>
            <WhatYouLearn array={whatYouLearn}/>
            <div className={styles.spacing_normal}></div>
            <ProgramBenefits array={benefits}/>
        </main>
    )
}

export default computermaintainance;