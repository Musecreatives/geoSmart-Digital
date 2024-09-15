import Link from "next/link";
import Image from "next/image";
// styles
import styles from "./home.module.css";
// img
import BoyOnLaptop from "../../public/assets/boy-on-laptop.png";
import ComputerApplicationImg from "../../public/assets/imgs/computer-application.png";
import ComputerMaintainanceImg from "../../public/assets/imgs/computer-maintainance.png";
import ComputerNetworkingImg from "../../public/assets/imgs/computer-networking.png";
import RomoteSensingImg from "../../public/assets/imgs/remote-sensing-gis.png";
import SoftwareEngineeringImg from "../../public/assets/imgs/software-engineering.png";
import PinchIcon from "../../public/assets/icons/pinch.png";
import TipAndUpdatesIcon from "../../public/assets/icons/tip-and-updates.png";
import GroupIcon from "../../public/assets/icons/group.png";
import NasaLogo from "../../public/assets/brands/nasa.png";
import NGLogo from "../../public/assets/brands/ng.png";
import NcrsLogo from "../../public/assets/brands/ncrs.png";
import SpaceXLogo from "../../public/assets/brands/spacex.png";
import T1Img from "../../public/assets/imgs/t1.png";
import T2Img from "../../public/assets/imgs/t2.png";
import T3Img from "../../public/assets/imgs/t3.png";
import T4Img from "../../public/assets/imgs/t4.png";
import WriteOnBoardImg from "../../public/assets/imgs/writing-board.png";
import ArrowIcon from "../../public/assets/icons/arrow.png";
import VisionImg from "../../public/assets/imgs/work.png";

const HomePage = () => {
    const trainingProgram = [
        {
            img: ComputerApplicationImg,
            program: "Computer Application",
            link: "/computer-application"
        },
        {
            img: ComputerMaintainanceImg,
            program: "Computer Maintainance",
            link: "/computer-maintainance"
        },
        {
            img: ComputerNetworkingImg,
            program: "Computer Networking",
            link: "/computer-networking"
        },
        {
            img: RomoteSensingImg,
            program: "Remote Sensing and GIS",
            link: "/remote-sensing"
        },
        {
            img: SoftwareEngineeringImg,
            program: "Software Engineering",
            link: "/software-engineering"
        },
    ]

    const reasons = [
        {
            icon: PinchIcon,
            text: "Hands-On Learning: Gain practical experience through interactive sessions and real-world projects."
        },
        {
            icon: TipAndUpdatesIcon,
            text: "Customized Solutions: Tailored training programs and consultancy services to meet your specific needs and objectives."
        },
        {
            icon: GroupIcon,
            text: "Ongoing Support: Access to resources, mentorship, and support to ensure your continued success."
        }
    ]

    const testimonies = [
        {
            img: T1Img,
            testimony: "Don't just take our word for it! Hear from our satisfied",
            name: "Client"
        },

        {
            img: T2Img,
            testimony: "Don't just take our word for it! Hear from our satisfied",
            name: "Client"
        },

        {
            img: T3Img,
            testimony: "Don't just take our word for it! Hear from our satisfied",
            name: "Client"
        },

        {
            img: T4Img,
            testimony: "Don't just take our word for it! Hear from our satisfied",
            name: "Client"
        }
    ]
    
    return(
        <div className={styles.container}>
            {/* hero section */}
            <div className={styles.hero}>
                {/* hero message */}
                <div className={styles.heroMsg}>
                    <h1>GeoSmart digital Solutions</h1>
                    <p>Your premier destination for comprehensive training and consultancy services in Remote sensing/GIS and IT. 
                        At Geosmart Digital Solutions we empower individuals and organizations to harness the power of technology for informed decision-making and innovation</p>
                </div>
                
                {/* boy on laptop image */}
                <div className={styles.boyOnLaptop}>
                    <Image src={BoyOnLaptop} alt="GeoSmart digital Solutions" fill/>
                </div>
            </div>

            {/* training and diplomas */}
            <div className={styles.tandDContainer}>
                <h1 className={styles.title}>
                    <span>Training &</span>
                    <span> Diplomas</span>
                </h1>
                {/* card */}
                <div className={styles.tAndDCard}>
                    {
                        trainingProgram.map((program, index) => {
                            return(<div className={styles.card} key={index}>
                                {/* img */}
                                <div className={styles.programImg}>
                                    <Image src={program.img} alt={program.img} fill/>
                                </div>
                                {/* title */}
                                <p>{program.program}</p>
                                {/* btn */}
                                <Link href={program.link}>
                                    <button>Learn more</button>
                                </Link>
                            </div>)
                        })
                    }
                </div>
            </div>

            {/* vision and goal */}
            <div className={styles.visionStatement}>
                {/* img */}
                <div className={styles.visionImg}>
                    {/* TODO: img here */}
                    <Image src={VisionImg} alt="our-vision" fill/>
                </div>
                <p>At GeoSmart Digital Solutions we distinguish ourselves through: 
                    Experienced Instructors, Learn from industry professionals with extensive expertise in their respective fields.</p>
            </div>

            {/* why chose us */}
            <div className={styles.whyChoseUsContainer}>
                <h1 className={styles.title}>
                    <span>Why chose</span>
                    <span> Us?</span>
                </h1>
                <ul className={styles.reasonsContainer}>
                    {
                        reasons.map(((reason, index) => {
                            return <div key={index}>
                                <li>
                                    {/* <Image /> */}
                                    <span className={styles.reasonImg}>
                                        <Image src={reason.icon} alt={reason.text} height={50} width={50}/>
                                    </span>
                                    <span>
                                        <p className={styles.reasonText}>{reason.text}</p>
                                    </span>
                                </li>
                            </div>
                        }))
                    }
                </ul>
            </div>

            {/* partners */}
            <div className={styles.partnersContainer}>
                <h1 className={styles.title}>
                    <span>Our Partners</span>
                    <span></span>
                </h1>
                <ul className={styles.partnerBrands}>
                    <li className={styles.logo1}><Image src={NcrsLogo} alt="NCRS Logo" fill/></li>
                    <li className={styles.logo2}><Image src={SpaceXLogo} alt="SpaceX Logo" fill/></li>
                    <li className={styles.logo3}><Image src={NcrsLogo} alt="NCRS Logo" fill/></li>
                    <li className={styles.logo4}><Image src={NasaLogo} alt="Nasa Logo" fill/></li>
                    <li className={styles.logo5}><Image src={NGLogo} alt="Nigeria Logo" fill/></li>
                </ul>
            </div>

            {/* testimonials */}
            <div className={styles.testimonialsContainer}>
                <div className={styles.tHeading}>
                    <h1 className={styles.title}>
                        <span>Testimonials</span>
                        <span></span>
                    </h1>
                    <p>Don&apos;t just take our word for it! Hear from our satisfied clients.</p>
                </div>

                <div className={styles.individualsWrapper}>
                    {
                        testimonies.map((t, index) => {
                            return <div className={styles.testifier} key={index}>
                                {/* img */}
                                <div className={styles.testifierImg}>
                                    <Image src={t.img} alt={t.name} fill/>
                                </div>
                                {/* text */}
                                <p>{t.testimony}</p>
                                {/* name */}
                                <small>{t.name}</small>
                            </div>
                        })
                    }
                </div>
            </div>

            {/* get started - call to action */}
            <div className={styles.callToActionContainer}>
                <div>
                    <h1 className={styles.title}>
                        <span>Get Started</span>
                        <span></span>
                    </h1>
                    <h3>Want to get started?</h3>
                    <Link href="/" className={styles.applyNowBtn}><button><span>Apply Now</span><span><Image src={ArrowIcon} alt="apply now" width={12} height={5}/></span></button></Link>
                </div>

                <div className={styles.ctaImg}>
                    <Image src={WriteOnBoardImg} alt="writing-board" fill/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;