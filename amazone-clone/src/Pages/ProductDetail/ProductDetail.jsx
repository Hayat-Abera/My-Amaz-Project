import { useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut/LayOut'
import Styles from './productDetail.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'

const ProductDetail = () => {
    const {productId} = useParams()
   const[product, setProducts] = useState([]);
    // console.log(productId)
    useEffect(() => {
        axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
            setProducts(res.data)
        }).catch((err) =>{
            console.log(err)
        })

    }, [])
  return (
    <LayOut>
   <ProductCard products={product}/>
    </LayOut>
  )
}

export default ProductDetail
