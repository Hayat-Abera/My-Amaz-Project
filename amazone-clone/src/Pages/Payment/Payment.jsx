import LayOut from '../../Components/LayOut/LayOut';
import Styles from './payment.module.css';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { useContext, useState } from 'react';
import ProductCard from '../../Components/Products/ProductCard';
import {useStripe,  useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import {axiosInstance} from '../../Api/axios.js';
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/actiontype.js";
import { doc, setDoc } from "firebase/firestore";


const Payment = () => {

 const [{user,basket}, dispatch]= useContext(DataContext);
 const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
 }, 0)

   const total = basket.reduce((amount,item) =>{

    return item.price * item.amount + amount

  }, 0)

//error handle if client puts wrong card number
 const [errorCard, setErrorCard] = useState()
 //when it clicks some processing
  const [processing, setProcessing] = useState(false);

   const stripe = useStripe();
   const elements = useElements();
   const navigate = useNavigate();


   const handleChange = (e) =>{
        // console.log(e)
        e?.error?.message? setErrorCard(e.error.message) : 
        setErrorCard("")
   }

 const handlePayment = async (e) => {
  e.preventDefault();

  if (!stripe || !elements) return;
  if (basket.length === 0) return;
    //   //step 1-backend functions
    try {
    setProcessing(true);

    //Step 1: Create payment intent via your backend
    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    const clientSecret = response.data?.clientSecret;
    if (!clientSecret) throw new Error("No client secret received");

    //  Step 2: Confirm card payment with Stripe
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error(error.message);
      setErrorCard(error.message);
      setProcessing(false);
      return;
    }

    console.log("Payment success:", paymentIntent);
      // //push data base on firebase
      const orderRef = doc(db, "users", user?.uid, "orders", paymentIntent.id);
    await setDoc(orderRef, {
      basket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created,
    });


      //empty basket
      dispatch({ type: Type.EMPTY_BASKET });

     setProcessing(false);
    navigate("/orders", { state: { msg: "You have placed a new order!" } });

  } catch (err) {
    console.error("Payment error:", err);
    setProcessing(false);
    setErrorCard("Payment failed. Please try again.");
  }
};


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
              <form onSubmit={handlePayment}>
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
                      <button type="submit">
                    {processing ? (
                      <div className ={Styles.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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
