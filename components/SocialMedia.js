import React from 'react';
import Image from 'next/image';
import styles from '../styles/smart.module.css'

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
        <Image
      src="/images/ig_icon.png" // Route of the image file
      height={50} // Desired size with correct aspect ratio
      width={50} // Desired size with correct aspect ratio
      alt=""
      className={styles.socialMediaIcons}
      />
      <Image
      src="/images/fb_icon.png" // Route of the image file
      height={50} // Desired size with correct aspect ratio
      width={50} // Desired size with correct aspect ratio
      alt=""
      className={styles.socialMediaIcons}
      />
      <Image
      src="/images/wa_icon.png" // Route of the image file
      height={50} // Desired size with correct aspect ratio
      width={50} // Desired size with correct aspect ratio
      alt=""
      className={styles.socialMediaIcons}
      />
      <Image
      src="/images/yt_icon.png" // Route of the image file
      height={50} // Desired size with correct aspect ratio
      width={50} // Desired size with correct aspect ratio
      alt=""
      className={styles.socialMediaIcons}
      />
        
    </div>
  )
}

export default SocialMedia