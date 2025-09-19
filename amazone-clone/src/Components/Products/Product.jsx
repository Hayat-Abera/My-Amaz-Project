import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard";
import Styles from './Product.module.css'
import Loader from "../Loader/Loader";


function Product() {
    const [products, setProducts]=useState([]);
       const[isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res);
            setProducts(res.data)
      setIsLoading(false)


        }) 
        .catch((err) => {
            console.log(err);
      setIsLoading(false)

        })
    }, [] )

   
  return (
    <>
    {
      isLoading?(<Loader/>) : ( <div className={Styles.product_container}>
       { 
       products.map((singleProduct) =>(
       
          <ProductCard products = {singleProduct} key={singleProduct.id}/>
       ))
       
       }
    </div>)
    }
   
    </>
  )
}

export default Product
