import LayOut from "../../Components/LayOut/LayOut"
import CarouselEffect from "../../Components/Carousel/Carousel"
import Catagory from "../../Components/Catagory/Catagory"
import Product from "../../Components/Products/Product"

const Landing = () => {
  return (
      <LayOut>
        <CarouselEffect/>
        <Catagory/>
        <Product/>
     </LayOut>
  
  )
}

export default Landing
