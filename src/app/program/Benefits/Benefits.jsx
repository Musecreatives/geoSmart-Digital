import Image from "next/image";
// style
import styles from "./Benefits.module.css";
// image
import ManOnLaptopImage from "../../../../public/assets/imgs/man-on-laptop.png";

const ProgramBenefits = (
    {
        array
    }
) => {
    return(
        <div className={styles.container}>
            <div className={styles.text_content}>
                <h2>Benefits</h2>
                <p>Prepare to become a Software Engineer</p>
                <ul>
                    {
                        array.map((content, index) => {
                            return <li key={index}>{content}</li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.img_content}>
                <Image src={ManOnLaptopImage} alt="Man on laptop" fill/>
            </div>
        </div>
    )
}

export default ProgramBenefits;