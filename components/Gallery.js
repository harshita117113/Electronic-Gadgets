import React from 'react';
import Image from 'next/image';
import styles from '../styles/smart.module.css'

const Gallery = () => {
  return (
    <>
        <div className={styles.heading}>Gallery</div>
        <div className={styles.galleryimages}>
            <Image
            src="/images/gallery1.png" // Route of the image file
            height={423} // Desired size with correct aspect ratio
            width={322} // Desired size with correct aspect ratio
            alt=""
            />
            <Image
            src="/images/gallery2.png" // Route of the image file
            height={423} // Desired size with correct aspect ratio
            width={322} // Desired size with correct aspect ratio
            alt=""
            />
            <Image
            src="/images/gallery3.png" // Route of the image file
            height={423} // Desired size with correct aspect ratio
            width={322} // Desired size with correct aspect ratio
            alt=""
            />
            <Image
            src="/images/gallery4.png" // Route of the image file
            height={423} // Desired size with correct aspect ratio
            width={322} // Desired size with correct aspect ratio
            alt=""
            />
        </div>
        <div className={styles.galleryimages}>
            <Image
            src="/images/arrow.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt=""
            className={styles.arrow}
            />
            <Image
            src="/images/arrow.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt=""
            className={styles.arrowflip}
            />
        </div>
    </>
  )
}

export default Gallery