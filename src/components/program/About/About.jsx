import Image from "next/image";
// styles
import styles from "./About.module.css";
// img
import Img from "../../../../public/assets/imgs/code.png";

const AboutProgram = (
    {
        aboutParagraph=""
    }
) => {
    return(
        <div className={styles.container}>
            <div className={styles.img_content} style={{ width: '80%', borderRadius: '20px', overflow: 'hidden' }}>
                <Image src={Img}  alt="About program" fill/>
            </div>
            <div className={styles.text_content}>
                <h2>About the program</h2>
                <p>{aboutParagraph}</p>
            </div>
        </div>
    )
}

export default AboutProgram;