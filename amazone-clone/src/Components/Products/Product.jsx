import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard";
import Styles from './Product.module.css'


function Product() {
    const [products, setProducts]=useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res);
            setProducts(res.data)

        }) 
        .catch((err) => {
            console.log(err);
        })
    }, [] )

   
  return (
    <div className={Styles.product_container}>
       { 
       products.map((singleProduct) =>(
       
          <ProductCard products = {singleProduct} key={singleProduct.id}/>
       ))
       
       }
    </div>
  )
}

export default Product
