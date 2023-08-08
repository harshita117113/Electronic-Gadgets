import Image from 'next/image';
import styles from '../styles/smart.module.css'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let galleryArr = [
  {
    id: 1,
    img: "/images/gallery1.png",
  },
  {
    id: 2,
    img: "/images/gallery2.png",
  },
  {
    id: 3,
    img: "/images/gallery3.png",
  },
  {
    id: 4,
    img: "/images/gallery4.png",
  }
]

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
    
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
    
const Gallery = () => {
  const options = {
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay:true,
    smartSpeed: 1000,
    navClass: [styles.arrow,styles.arrowflip],
    navText: [
      <Image
            src="/images/arrow.svg" 
            height={50} 
            width={50} 
            alt=""
            />,
            <Image
            src="/images/arrow.svg" 
            height={50} 
            width={50} 
            alt=""
            />
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
    
  return (
    <div>
      <div>
        <span className={styles.heading}>Gallery</span>
        <ul className={styles.owlCarouselUl}>
          <OwlCarousel
            loop
            margin={0}
            nav={false}
            navText={[
              
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {galleryArr && galleryArr.length > 0
              ? galleryArr.map((product) => {
              return (
                <div
                id="featuredProducts"
                className="item float-left w-100"
                key={product.id}
                >
                <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                  <span className="image text-center">
                  <Image
                    src={product.img} // Route of the image file
                    height={423} // Desired size with correct aspect ratio
                    width={322} // Desired size with correct aspect ratio
                    alt=""
                  />
                  </span>
                </div>
              </div>
              );
              })
            : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
    
export default Gallery;