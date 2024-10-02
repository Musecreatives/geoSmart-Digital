import Image from 'next/image';
import Link from 'next/link';
import styles from './TrainingAndDiplomas.module.css';


const trainingPrograms = [
   {
        title: "Computer Applications",
        img: "/assets/imgs/computer-application.png",  // Use leading slash
        link: "/programs/computer-applications",
    },
    {
        title: "Computer Maintenance",
        img: "/assets/imgs/computer-maintainance.png",  // Use leading slash
        link: "/programs/computer-maintenance",
    },
    {
        title: "Computer Networking",
        img: "/assets/imgs/computer-networking.png",  // Use leading slash
        link: "/programs/computer-networking",
    },
    {
        title: "Remote Sensing/GIS",
        img: "/assets/imgs/remote-sensing-gis.png",  // Use leading slash
        link: "/programs/remote-sensing",
    },
    {
        title: "Software Engineering",
        img: "/assets/imgs/software-engineering.png",  // Use leading slash
        link: "/programs/software-engineering",
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
