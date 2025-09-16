import { Carousel } from 'react-responsive-carousel';
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Styles from './carousel.module.css'
const CarouselEffect = () => {
  return (
    <>
         <Carousel 
         autoPlay={true}
         infiniteLoop={true}
         showIndicators={false}
         showThumbs={false}
         >
           {
            img.map((imageItemLink) => {
                return <img src={imageItemLink}/>
            })
           } 
         </Carousel>
         <div className={Styles.hero_image}></div>
    </>
  )
}

export default CarouselEffect
