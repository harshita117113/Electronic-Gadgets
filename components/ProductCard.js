import React from 'react'
import Image from 'next/image';
import styles from '../styles/smart.module.css'

const ProductCard = (props) => {
  const {img,pname,price,link} = props;

    return (
    <div className={styles.pcard}>
        <Image
            src={img} // Route of the image file
            height={371} // Desired size with correct aspect ratio
            width={305} // Desired size with correct aspect ratio
            alt={pname}
        />
        <div className={styles.pdetails}>
        <div>
            <span>{pname}</span>
            <div className={styles.productPrice}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="bx:rupee">
                        <path id="Vector" d="M17 6V4H6V6H9.5C10.802 6 11.901 6.838 12.315 8H6V10H12.315C12.1097 10.5832 11.7289 11.0886 11.2249 11.4467C10.7208 11.8048 10.1183 11.9981 9.5 12H6V14.414L11.586 20H14.414L8.414 14H9.5C10.652 13.9985 11.7682 13.5998 12.6604 12.8711C13.5526 12.1424 14.1663 11.1284 14.398 10H17V8H14.398C14.2447 7.2722 13.9288 6.58848 13.474 6H17Z" fill="white"/>
                    </g>
                </svg>
                <span>{price}</span>
            </div>
        </div>
        <div>
            <Image
                src="/images/wa_icon_clrd.svg"// Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={50} // Desired size with correct aspect ratio
                alt=""
                className={styles.waicon}    
            />
        </div>    
        </div>
    </div>
  )
}

export default ProductCard