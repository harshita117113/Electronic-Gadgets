import React from 'react'
import Image from 'next/image';
import styles from '../styles/smart.module.css';

const Header = () => {
  return (
    <>
      <Image
      src="/images/banner.png" // Route of the image file
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      height={400} // Desired size with correct aspect ratio
      width={1440} // Desired size with correct aspect ratio
      alt=""
      className={styles.banner}
      priority={true}
      configuration={false}
      />
      <Image
      src="/images/smartWatch.png" // Route of the image file
      sizes="100vw"
      style={{
        width: '25%',
        height: 'auto',
      }}
      height={280} // Desired size with correct aspect ratio
      width={280}
      alt=""
      className={styles.smart}
      />
    </>
  )
}

export default Header