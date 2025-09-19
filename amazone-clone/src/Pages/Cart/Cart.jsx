import LayOut from '../../Components/LayOut/LayOut'
import ProductCard from '../../Components/Products/ProductCard'
import Styles from './cart.module.css'
import { useContext } from 'react'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [{basket, user}, dispatch]= useContext(DataContext);
  const total = basket.reduce((amount,item) =>{

    return item.price + amount

  }, 0)
  return (
    <LayOut>
   <section className={Styles.container}>
    <div className={Styles.cart_container}>
      <h2>Hello</h2>
       <h3>Your shopping basket</h3>
       <hr />
       {
        basket?.length==0?(<p>Opps ! No item in your Cart</p>):(
          basket?.map((item) =>{
            return <ProductCard
            // key={i}
            products={item}
            renderDesc={true}
            renderAdd={false}
            flex={true}
            />
          })
        )
       }
    </div>
    
      {
        basket?.length !==0 && (
          <div className={Styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )
      }
  
   </section>
    </LayOut>
  )
}

export default Cart
