import React from 'react'
import Image from 'next/image';
import styles from '../styles/smart.module.css'

const BusinessDays = (props) => {
    const { day, time } = props;
    return (
        <div className={styles.flexdis}>
            <Image
            src="/images/calendar_icon.svg" // Route of the image file
            height={40} // Desired size with correct aspect ratio
            width={40} // Desired size with correct aspect ratio
            alt=""
            className={styles.calicon}
            />
            <div > 
                { day }<br/> 
                { time } 
            </div>
        </div>
    )
}

export default BusinessDays