import Image from "next/image";
// style
import styles from "./CoursesUnderProgram.module.css";
// image
import Icon1 from "../../../../public/assets/icons/cup-1.png";
import Icon2 from "../../../../public/assets/icons/cup-2.png";
import Icon3 from "../../../../public/assets/icons/cup-3.png";


const CoursesUnderProgram = () => {
    return(
        <div className={styles.container}>
            <h2>Courses Under the Program</h2>
            <ul>
                <li>
                    <span>
                        <Image src={Icon1} width={50} height={50} alt="Frontend Engineering"/>
                        <h3>Frontend Engineering</h3>
                    </span>
                    <p>Frontend engineering is the art of creating visually appealing and user-friendly interfaces for web applications. In our Frontend Engineering course, you will learn the fundamentals of HTML, CSS, and JavaScript, along with modern frameworks like React and Angular. Through hands-on projects and real-world examples, you&apos;ll gain the skills needed to build responsive and interactive web applications that delight users</p>
                </li>
                <li>
                    <span>
                    <Image src={Icon2} width={50} height={50} alt="Backend Engineering"/>
                        <h3>Backend Engineering</h3>
                    </span>
                    <p>Backend engineering is the backbone of any software application, responsible for handling data storage, processing, and logic. In our Backend Engineering course, you will dive deep into server-side programming using languages such as Node.js and python, and frameworks like Express.js and Django. You&apos;ll learn how to design robust APIs, manage databases, and implement security measures to create scalable and secure backend systems.</p>
                </li>
                <li>
                    <span>
                        <Image src={Icon3} width={50} height={50} alt="Mobile Engineering"/>
                        <h3>Mobile Engineering</h3>
                    </span>
                    <p>Mobile engineering is all about creating native or cross-platform mobile applications that run seamlessly on smartphones and tablets. In our Mobile Engineering course, you&apos;ll explore the intricacies of iOS and Android app development using Swift, Kotlin, and Flutter. From designing user interfaces to integrating with device features like GPS and cameras, you&apos;ll learn how to build high-performance mobile apps that deliver an exceptional user experience.</p>
                </li>
            </ul>
        </div>
    )
}

export default CoursesUnderProgram;