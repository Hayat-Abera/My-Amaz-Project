import LayOut from '../../Components/LayOut/LayOut'
import ProductCard from '../../Components/Products/ProductCard'
import Styles from './cart.module.css'
import { useContext } from 'react'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../Utility/actiontype'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  const [{basket, user}, dispatch]= useContext(DataContext);
  const total = basket.reduce((amount,item) =>{

    return item.price * item.amount + amount

  }, 0)

  // console.log(basket)

const increment=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,item
  })
}

const decrement=(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET,id
  })
}

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
            return  <section className={Styles.cart_button}>
           
            <ProductCard
            // key={i}
            products={item}
            renderDesc={true}
            renderAdd={false}
            flex={true}
            />

            <div className={Styles.btn_container}>
              <button className={Styles.btn} onClick={()=>increment(item)}>
                <IoIosArrowUp size={20}/>
              </button>
              <span>{item.amount}</span>
              <button className={Styles.btn} onClick={()=>decrement(item.id)}>
                <IoIosArrowDown size={20} />
              </button>
            </div>

            </section>
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
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )
      }
  
   </section>
    </LayOut>
  )
}

export default Cart
