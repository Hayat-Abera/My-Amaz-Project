import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import Styles from './Product.module.css'
import { Link } from 'react-router-dom';

function ProductCard({products,flex,renderDesc}) {
    const {image,title, id, rating, price,description}=products;
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
            <Rating value={rating} precision={0.1}/>
            {/* rating count */}
           
            <small>{rating?.count}</small>
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount={price}/>
        </div>
        <button className={Styles.button}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
