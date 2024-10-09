// styles
import styles from "./remote_sensing.module.css";
import Image from "next/image";
// components
import ProgramHeader from "@/components/program/ProgramHeader/ProgramHeader";
import ProgramCoverage from "@/components/program/ProgramCoverage/ProgramCoverage";
import ProgramBenefits from "@/components/program/Benefits/Benefits";

import CustomBg from "../../../public/assets/imgs/remote_sensing_bg.png";

import icon1 from "../../../public/assets/icons/icon1.png";
import icon2 from "../../../public/assets/icons/icon2.png";
import icon3 from "../../../public/assets/icons/icon3.png";
import icon4 from "../../../public/assets/icons/icon4.png";
import icon5 from "../../../public/assets/icons/icon5.png";
import icon6 from "../../../public/assets/icons/icon6.png";
import icon7 from "../../../public/assets/icons/icon7.png";
import icon8 from "../../../public/assets/icons/icon8.png";
import icon9 from "../../../public/assets/icons/icon9.png";



const RemoteSensing = () => {
    const coverageArray = [
        "  Digital Cartography and mapping",
        "  Land Management information system",
        "  Advanced image processing and transformation",
        "  Remote Sensing and GIS",
        "  Forest Management",
        "  Water Resource Management",
        "  Land use/Land Cover mapping and change detection",
        "  Geospatial database development and management",
        "  Geological and hydrological surveys",
    ]


    const benefits = [
        "Develop expertise in remote sensing and GIS Technology.",
        "Flexible training options to accommodate your schedule and preferences.",
        "Connect with industry professionals.",
        "Earn a certificate.",
    ]

    const coverageIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];
    return(
        <main>
            <ProgramHeader 
            bg={CustomBg}
            programTitle="Remote Sensing/GIS"
            fee="_ _ _ _ _"
            location="Jos, Nigeria"
            startDate="_ _ _ _ _"
            />
            <div className={styles.spacing_300}></div>
            <div className={styles.container}>
            <div className={styles.img_content} style={{ width: '70%', borderRadius: '20px', overflow: 'hidden' }}>
                <Image src="/assets/imgs/remote_sensing_img.jpg" alt="About program" fill />
            </div>
            <div className={styles.text_content}>
                <h2>About the program</h2>
                <p>Unlock the potential of geospatial technologies through our expert-led training programs tailored to beginners and advanced users alike.</p>
            </div>
        </div>
            <div className={styles.spacing_normal}></div>
            <ProgramCoverage array={coverageArray} icons={coverageIcons} />
            <ProgramBenefits title="Prepare to Become Remote Sensing/GIS" array={benefits} />
        </main>
    )
}

export default RemoteSensing;