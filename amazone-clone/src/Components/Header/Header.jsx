import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import Styles from './Header.module.css'
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
const Header = () => {


 const [{user, basket}, dispatch]= useContext(DataContext)
 const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
 }, 0)

// console.log(basket.length)

  return (
    <>
      <section className={Styles.fixed_header}>
      <section  className={Styles.header_container}>
        <div className={Styles.logo_container}>
            {/* logo */}
            <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" /></Link>
            {/* delivery */}
            <div className={Styles.delivery}>
            <span>
                {/* icon */}
                <SlLocationPin />
            </span>
        <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
        </div>
        </div>
        </div>
          {/* search */}
        <div className={Styles.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon */}
            <BsSearch size={39} />
        </div>

         {/* right side */}
        <div className={Styles.order_container}>
            <Link to="" className={Styles.language}>
            <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="american-flag" />
          <select name="" id="">
            <option value="">EN</option>
          </select>
          </Link>
    
            {/* three components */}
            <Link to={!user && "/auth"}>
            {
              user ? (
                <>
              <p>Hello {user?.email?.split("@")[0]} </p>
                 <span onClick={() => auth.signOut()}>SignOut</span> 
              </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>  
                  </>
              )
            }
                  
                             
            </Link>

            {/* orders */}
                <Link to="/orders">
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>

                {/* cart */}
                <Link to="/cart" className={Styles.cart}>
                    {/* icon */}
                    <BiCart size={35} />
                    <span>{totalItem}</span>
                </Link>
        </div>
      </section>
       <LowerHeader/>
    </section>
   
    </>
  )
}

export default Header
