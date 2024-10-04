import Image from "next/image";
import styles from "./CoursesUnderProgram.module.css";

// Image paths for the icons
const courses = [
  {
    title: "Frontend Engineering",
    description: `Frontend engineering is the art of creating visually appealing 
    and user-friendly interfaces for web applications. In our Frontend Engineering 
    course, you will learn the fundamentals of HTML, CSS, and JavaScript, along with modern 
    frameworks like React and Angular. Through hands-on projects and real-world examples, 
    you'll gain the skills needed to build responsive and interactive web applications.`,
    img: "/assets/icons/cup-1.png", // Ensure correct path
    link: "/frontend_engineering"
  },
  {
    title: "Backend Engineering",
    description: `Backend engineering is the backbone of any software application, 
    responsible for handling data storage, processing, and logic. In our Backend Engineering 
    course, you will dive deep into server-side programming using languages such as Node.js and Python, 
    and frameworks like Express.js and Django.`,
    img: "/assets/icons/cup-2.png", // Ensure correct path
    link: "/backend_engineering"
  },
  {
    title: "Mobile Engineering",
    description: `Mobile engineering is all about creating native or cross-platform mobile 
    applications that run seamlessly on smartphones and tablets. In our Mobile Engineering course, 
    you'll explore the intricacies of iOS and Android app development using Swift, Kotlin, and Flutter.`,
    img: "/assets/icons/cup-3.png", // Ensure correct path
    link: "/mobile_engineering"
  }
];

const CoursesUnderProgram = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span>Courses Under</span> <span className={styles.highlight}>the Program</span>
      </h1>
      <div className={styles.coursesContainer}>
        {courses.map((course, index) => (
          <div className={styles.courseCard} key={index}>
            <div className={styles.courseImage}>
              <Image src={course.img} alt={course.title} layout="fill" objectFit="cover" />
            </div>
            <p className={styles.courseTitle}>{course.title}</p>
            <p className={styles.courseDescription}>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesUnderProgram;
