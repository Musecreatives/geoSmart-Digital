// styles
import styles from "./remoteSensing.module.css";
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";
import AboutProgram from "@/components/program/About/About";
import WhoCanEnroll from "@/components/program/WhyEnroll/WhoCanEnrollWhoCanEnroll";
import WhatYouLearn from "@/components/program/WhatULearn/WhatULearn";

const RemoteSensing = () => {
    const whoCanEnroll = [
        "Individuals seeking to start a career in network engineering or administration.",
        "IT professionals looking to expand their knowledge and expertise in computer networking.",
        "Network administrators, system engineers, and IT managers aiming to enhance their skills and advance their careers.",
        "Anyone interested in learning about the fundamentals of computer networking and preparing for industry certifications such as CompTIA Network+, Cisco CCNA, or CCNP.",
    ]

    const whatYouLearn = [
        {
            title: "Network Fundamentals",
            desc: "Understand the basics of networking, including protocols, topologies, and network models."
        },
        {
            title: "Network Administration",
            desc: "Learn how to configure and manage network devices, such as routers, switches, and firewalls."
        },
        {
            title: "Newtwork Security",
            desc: "Explore techniques and best practices for securing network infrastructure and data from cyber threats."
        },
        {
            title: "Wireless Networking",
            desc: "Gain proficiency in designing, implementing, and troubleshooting wireless networks."
        },
        {
            title: "Cloud Networking",
            desc: "Learn about cloud computing technologies and how they impact modern network architectures."
        },
        {
            title: "Network Monitoring and Troubleshooting",
            desc: "Explore techniques and best practices for securing network infrastructure and data from cyber threats."
        },
        {
            title: "IPv6 Implementation",
            desc: "Get hands-on experience with IPv6 addressing and migration strategies to support the growing demand for IP addresses."
        },
        {
            title: "Virtualization",
            desc: "Understand the concepts and benefits of network virtualization using technologies like VMware and Hyper-V."
        },

    ]
    return(
        <main>
            <ProgramHeader 
            programTitle="REMOTE Sensing/GIS"
            fee="Free (Early Bird)"
            location="Wuse, FCT Abuja"
            startDate="_____"
            />
            <div className={styles.spacing_300}></div>
            <AboutProgram 
                aboutParagraph="Unlock the potential of geospatial technologies through our expert-led training programs tailored to beginners and advanced users alike."
            />
            <div className={styles.spacing_normal}></div>
            <WhoCanEnroll array={whoCanEnroll}/>
            <div className={styles.spacing_normal}></div>
            <WhatYouLearn array={whatYouLearn}/>
            
        </main>
    )
}

export default RemoteSensing;