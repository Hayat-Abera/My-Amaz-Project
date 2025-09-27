import LayOut from '../../Components/LayOut/LayOut'
import Styles from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { useContext, useState } from 'react'
import ProductCard from '../../Components/Products/ProductCard'
import {useStripe,  useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'


const Payment = () => {

 const [{user,basket}]= useContext(DataContext);
 const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
 }, 0)

   const total = basket.reduce((amount,item) =>{

    return item.price * item.amount + amount

  }, 0)

 const [errorCard, setErrorCard] = useState()

   const stripe = useStripe();
   const elements = useElements();


   const handleChange = (e) =>{
        // console.log(e)
        e?.error?.message? setErrorCard(e.error.message) : 
        setErrorCard("")
   }


  return (
    <LayOut>
      {/* header */}
      <div className={Styles.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={Styles.payment}>
        {/* addres */}
        <div className={Styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Ethiopia, AA</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={Styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            { basket?.map((item) => 
              <ProductCard products={item} flex={true} />) 
              }
          </div>
        </div>
        <hr />


        {/* card form */}

        <div className={Styles.flex}>
          <h3>Payment Method</h3>
          <div className={Styles.payment_card_container}>
            <div className={Styles.payment_details}>
              <form action="">
                {/* error */}
                {errorCard && (
                  <small style={{color:'red'}}>{errorCard}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={Styles.payment_price}>
                  <div>
                    <span  style={{display:"flex", gap:"10px"}}> <p>Total Order | </p> <CurrencyFormat amount={total}/> </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>

    </LayOut>
  )
}

export default Payment
