import Image from "next/image";
// styles
import styles from "./about.module.css";
// images
import ManagerImg from "../../../public/assets/imgs/manager-photo.png";
import BulbImg from "../../../public/assets/imgs/bulb.png";
import WritingImg from "../../../public/assets/imgs/writing.png";


const AboutPage = () => {
    return(
        <div className={styles.container}>
        {/* hero section */}
        <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
            <div className={styles.textContent}>
            <h1>About GeoSmart Digital Solutions</h1>
                <p>At Geosmart Digital Solutions we empower individuals and organizations 
                to harness the power of technology for informed decision-making and innovation</p>
            </div>
            <div className={styles.imageContent}>
              <Image src="/assets/imgs/about_us_banner.jpg" alt="Slide 1" layout="fill" objectFit="cover" />
            </div>
          </div>
            </div>

            {/* mission and vision section */}
            <div className={styles.missionAndVisionContainer}>
                <p>Our Mission  & Vision</p>
                <h2>Nurturing a Vision</h2>
                <p>At GeoSmart Digital Solutions we distinguish ourselves through: 
                    Experienced Instructors, Learn from industry professionals with extensive expertise in their respective fields.</p>
            </div>

            {/* manager section */}
            <div className={styles.managerContainer}>
                <div className={styles.managerImgContainer}>
                    <Image src={ManagerImg} alt="Dr. Kehinde Ogunmola" fill/>
                </div>
                <div className={styles.aboutManager}>
                    <div className={styles.heading}>
                        <h2>Dr. Kehinde Ogunmola</h2>
                        <p>Manager, GeoSmart Digitals</p>
                    </div>
                    <p className={styles.desc}>Frontend engineering is the art of creating visually appealing and user-friendly interfaces for web applications. In our Frontend Engineering course, you will learn the fundamentals of HTML, CSS, and JavaScript, along with modern frameworks like React and Angular.</p>
                    <div className={styles.readMoreBtn}>
                        <span>Read More</span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* vission and mission statement */}
            <div className={styles.vissionMissionStatementContaiiner}>
                <div className={styles.mission}>
                    <div className={styles.heading}>
                        <h2>OUR MISSION & VISION STATEMENT</h2>
                        <p>Figma ipsum component variant main layer. Select connection flows edit fill. Layer horizontal line scale mask. Pen italic flatten list figjam main. Move flatten blur text boolean object distribute main horizontal. Polygon rotate plugin ipsum opacity group layout. Thumbnail export blur style mask. Figjam editor create union duplicate project arrange pen plugin reesizing. Flatten hand duplicate font star strikethrough object device editor. Horizontal inspect link style auto. Strikethrough object image follower star. Duplicate export main horizontal rectangle shadow. Draft distribute underline style undo fill team flatten. Figjam figma device bullet.</p>
                    </div>
                    <div>
                        <div className={styles.m_img}>
                            <Image src={BulbImg} alt="Light bulb image" fill/>
                        </div>
                    </div>
                </div>

                <div className={styles.mission}>
                    <div>
                        <div className={styles.m_img}>
                            <Image src={WritingImg} alt="Light bulb image" fill/>
                        </div>
                    </div>

                    <div className={styles.heading}>
                        <p>Figma ipsum component variant main layer. Select connection flows edit fill. Layer horizontal line scale mask. Pen italic flatten list figjam main. Move flatten blur text boolean object distribute main horizontal. Polygon rotate plugin ipsum opacity group layout. Thumbnail export blur style mask. Figjam editor create union duplicate project arrange pen plugin reesizing. Flatten hand duplicate font star strikethrough object device editor. Horizontal inspect link style auto. Strikethrough object image follower star. Duplicate export main horizontal rectangle shadow. Draft distribute underline style undo fill team flatten. Figjam figma device bullet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;