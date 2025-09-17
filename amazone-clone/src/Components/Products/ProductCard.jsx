import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import Styles from './Product.module.css'

function ProductCard({products}) {
    const {image,title, id, rating, price}=products;
  return (
    <div className={`${Styles.card_container}`}>
       <a href="">
        <img src={image} alt="product image" />
      </a>
      <div>
        <h2>{title}</h2>
        <div className={Styles.rating}>
            {/* rating */}
            <Rating value={rating} precision={0.1}/>
            {/* rating count */}
           
            <small>{rating.count}</small>
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
