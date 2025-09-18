import LayOut from '../../Components/LayOut/LayOut'
import Styles from './results.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../../Components/Products/ProductCard'



const Results = () => {
   const [results, setResults] =useState([]);
    const {categoryName} =useParams()
    // console.log(categoryName)
    useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) =>{
        // console.log(res)
        setResults(res.data)
    }).catch((err) =>{
        console.log(err)
    })

    }, [])

  return (
    <LayOut >
    <div>
      <h1 style={{padding:'30px'}}>Results</h1>
      <p style={{padding:'30px'}}>Category / {categoryName}</p>
      <hr />
      <div className={Styles.products_container}>
        {
            results?.map((products) => (
                <ProductCard key={productUrl.id} products={products}/>
            ))
        }

      </div>
    </div>
    </LayOut >

  )
}

export default Results
