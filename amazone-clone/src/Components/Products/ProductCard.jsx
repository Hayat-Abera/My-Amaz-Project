import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import Styles from './Product.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/actiontype';

function ProductCard({products,flex,renderDesc,renderAdd}) {
    const {image,title, id, rating, price,description}=products;



   const [state, dispatch] =useContext(DataContext)
  //  console.log(state)
 

   const addToCart = () =>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image,title, id, rating, price,description
      }
    })
   }


  return (
    <div className={`${Styles.card_container} ${flex?Styles.product_flex : ' '}`}>
       <Link to={`/products/${id}`}>
        <img src={image} alt="product image" />
      </Link>
      <div>
        <h2>{title}</h2>
     {renderDesc && <div style={{maxWidth:'750px'}}>{description}</div>}   
        <div className={Styles.rating}>
            {/* rating */}
            <Rating value={rating?.rate} precision={0.1}/>
            {/* rating count */}
           
            <small>{rating?.count}</small>
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount={price}/>
        </div>
        {
          renderAdd &&   <button className={Styles.button} onClick={addToCart}>Add to cart</button>
        }
       
      </div>
    </div>
  )
}

export default ProductCard
