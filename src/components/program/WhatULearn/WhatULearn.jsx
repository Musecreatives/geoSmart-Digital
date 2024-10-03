import styles from "./WhatULearn.module.css";
import Image from "next/image"; // Import Image from Next.js for icons

const WhatYouLearn = ({ array }) => {
  return (
    <div className={styles.container}>
      <h2>What you&apos;ll learn</h2>
      <p>Our Computer Networking Training program covers essential topics such as:</p>
      <ul>
        {array.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles.heading}>
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={24} // You can adjust the size of the icon
                  height={24}
                />
                <h4>{item.title}</h4>
              </div>
              <p>{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhatYouLearn;
