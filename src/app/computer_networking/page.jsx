"use-client";

// styles
import styles from "./computer_networking.module.css";
import Image from "next/image";
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";;
import WhoCanEnroll from "@/components/program/WhyEnroll/WhoCanEnrollWhoCanEnroll";
import WhatYouLearn from "@/components/program/WhatULearn/WhatULearn";
import ProgramBenefits from "@/components/program/Benefits/Benefits";

//imgs

import CustomBg from "../../../public/assets/imgs/computer_networking_bg.jpg";
import icon2 from "../../../public/assets/icons/icon2.png";
import icon3 from "../../../public/assets/icons/icon3.png";
import icon4 from "../../../public/assets/icons/icon4.png";
import icon5 from "../../../public/assets/icons/icon5.png";

import nw1 from "../../../public/assets/icons/nw1.png";
import nw2 from "../../../public/assets/icons/nw2.png";
import nw3 from "../../../public/assets/icons/nw3.png";
import nw4 from "../../../public/assets/icons/nw4.png";
import nw5 from "../../../public/assets/icons/nw5.png";
import nw6 from "../../../public/assets/icons/nw6.png";
import nw7 from "../../../public/assets/icons/nw7.png";
import nw8 from "../../../public/assets/icons/nw8.png";

const computernetworking = () => {
    const whoCanEnroll = [
        "        Individuals seeking to start a career in network engineering or administration.",
        "         IT professionals looking to expand their knowledge and expertise in computer networking.",
        "        Network administrators, system engineers, and IT managers aiming to enhance their skills and advance their careers.",
        "        Anyone interested in learning about the fundamentals of computer networking and preparing for industry certifications such as CompTIA Network+, Cisco CCNA, or CCNP.",
    ]

    const whatYouLearn = [
        {
            title: "Network Fundamentals",
            desc: "Understand the basics of networking, including protocols, topologies, and network models.",
            icon: nw1
        },
        {
            title: "Network Administration",
            desc: "Learn how to configure and manage network devices, such as routers, switches, and firewalls.",
            icon: nw2
        },
        {
            title: "Newtwork Security",
            desc: "Explore techniques and best practices for securing network infrastructure and data from cyber threats.",
            icon: nw3
        },
        {
            title: "Wireless Networking",
            desc: "Gain proficiency in designing, implementing, and troubleshooting wireless networks.",
            icon: nw4
        },
        {
            title: "Cloud Networking",
            desc: "Learn about cloud computing technologies and how they impact modern network architectures.",
            icon: nw5
        },
        {
            title: "Network Monitoring and Troubleshooting",
            desc: "Explore techniques and best practices for securing network infrastructure and data from cyber threats.",
            icon: nw6
        },
        {
            title: "IPv6 Implementation",
            desc: "Get hands-on experience with IPv6 addressing and migration strategies to support the growing demand for IP addresses.",
            icon: nw7
        },
        {
            title: "Virtualization",
            desc: "Understand the concepts and benefits of network virtualization using technologies like VMware and Hyper-V.",
            icon: nw8
        },

    ]

    const benefits = [
        "Gain expertise in network engineering and administration, opening doors to diverse career opportunities.",
        "Acquire practical experience through labs and real-world projects.",
        "Stay updated with the latest networking technologies and trends.",
        "Learn from experienced professionals dedicated to your success.",
        "Get ready for industry-recognized certifications like CompTIA Network+ and Cisco CCNA. Growth.",
        "Earn a certificate from a trusted leader in IT training.",
    ]

    const coverageIcons = [icon2, icon3, icon4, icon5];
    return(
        <main>
            <ProgramHeader
             bg={CustomBg}
            programTitle="Computer Networking"
            fee="_ _ _ _ _"
            location="Jos, Nigeria"
            startDate="_ _ _ _ _"
            />
            <div className={styles.spacing_300}></div>
            <div className={styles.container}>
            <div className={styles.img_content} style={{ width: '150%', borderRadius: '20px', overflow: 'hidden' }}>
                <Image src="/assets/imgs/computer_networking.jpg" alt="About program" fill/>
            </div>
            <div className={styles.text_content}>
                <h2>About the program</h2>
                <p>Our Computer Networking Training program is designed to equip you with the knowledge and skills needed to excel in the field of network engineering and administration. Whether you&apos;re a beginner looking to enter the industry or an experienced professional seeking to enhance your expertise, our comprehensive curriculum covers a wide range of networking concepts and technologies.</p>
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

export default computernetworking;