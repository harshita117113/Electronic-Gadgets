import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/smart.module.css'

const p=[
    {
        img:"/images/watch.png",
        pname:"Smart Watch",
        price:"2000",
        link:""
    },{
        img:"/images/earphone.png",
        pname:"Earphone",
        price:"2000",
        link:""
    },{
        img:"/images/speaker.png",
        pname:"Speaker",
        price:"2000",
        link:""
    },{
        img:"/images/laptop.png",
        pname:"Laptop",
        price:"2000",
        link:""
    },{
        img:"/images/earbuds.png",
        pname:"Earbuds",
        price:"2000",
        link:""
    },{
        img:"/images/headphone.png",
        pname:"Headphone",
        price:"2000",
        link:""
    },{
        img:"/images/vr.png",
        pname:"VR",
        price:"2000",
        link:""
    },{
        img:"/images/speaker1.png",
        pname:"Speaker",
        price:"2000",
        link:""
    },
]

  const list = []

  for (const [i, product] of p.entries()) {
    //list.push(<li>{product.img}</li>)
    list.push(<ProductCard img={product.img} pname={product.pname} price={product.price} link={product.link}/>)
  }


const products = () => {
  return (
    <div >
    <span className={styles.heading}>Your Products</span>
    <div className={styles.pdisplay}>
        {list}
    </div>
    </div>
  )
}

export default products