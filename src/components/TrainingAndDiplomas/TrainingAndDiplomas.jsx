import Image from 'next/image';
import Link from 'next/link';
import styles from './TrainingAndDiplomas.module.css';


const trainingPrograms = [
   {
        title: "Computer Applications",
        img: "/assets/imgs/t&d1.png",  // Use leading slash
        link: "/computer_application",
    },
    {
        title: "Computer Maintenance",
        img: "/assets/imgs/t&d2.png",  // Use leading slash
        link: "/computer_maintainance",
    },
    {
        title: "Computer Networking",
        img: "/assets/imgs/t&d3.png",  // Use leading slash
        link: "/computer_networking",
    },
    {
        title: "Remote Sensing/GIS",
        img: "/assets/imgs/t&d4.png",  // Use leading slash
        link: "/remote_sensing",
    },
    {
        title: "Software Engineering",
        img: "/assets/imgs/t&d5.png",  // Use leading slash
        link: "/prsoftware-engineering",
    }
];

const TrainingAndDiplomas = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                <span>Training &</span> <span className={styles.highlight}>Diplomas</span>
            </h1>
            <div className={styles.programsContainer}>
                {trainingPrograms.map((program, index) => (
                    <div className={styles.programCard} key={index}>
                        <div className={styles.programImage}>
                            <Image src={program.img} alt={program.title} layout="fill" objectFit="cover" />
                        </div>
                        <p className={styles.programTitle}>{program.title}</p>
                        <Link href={program.link}>
                            <button className={styles.learnMoreButton}>Learn more</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingAndDiplomas;
