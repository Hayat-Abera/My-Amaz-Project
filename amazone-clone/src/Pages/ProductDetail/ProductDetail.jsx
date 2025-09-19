import { useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut/LayOut'
import Styles from './productDetail.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'

const ProductDetail = () => {
    const {productId} = useParams()
   const[product, setProducts] = useState([]);
   const[isLoading, setIsLoading] = useState(false);


    // console.log(productId)
    useEffect(() => {
      setIsLoading(true)
        axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
            setProducts(res.data)
      setIsLoading(false)

        }).catch((err) =>{
            console.log(err)
      setIsLoading(false)

        })

    }, [])
  return (
    
    <LayOut>
      {isLoading? (<Loader/>):( <ProductCard products={product}
      flex={true}
      renderDesc={true}
      renderAdd={true}

      />)}
    </LayOut>
  )
}

export default ProductDetail
