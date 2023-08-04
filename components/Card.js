import React from 'react'
import styles from '../styles/smart.module.css'
import Image from 'next/image';

const Card = (props) => {
    const {title,desc,img}=props;
    return (
        <>
        <div className={styles.contactcard}>
        <div>
            <Image
            src={img} // Route of the image file
            height={86} // Desired size with correct aspect ratio
            width={86} // Desired size with correct aspect ratio
            alt=""
            className={styles.icon}
            />
        </div>        
        <div className={styles.card}>
        
            <div className={styles.cardheading}>{title}</div>
            <div className={styles.carddesc}>
                {desc}
            </div>
        </div>
        </div>
        </>
    )
}

export default Card