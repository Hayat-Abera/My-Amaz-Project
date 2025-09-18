import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import Styles from './Header.module.css'
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section>
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1280px-Flag_of_the_United_States_%28Web_Colors%29.svg.png" alt="american-flag" />
          <select name="" id="">
            <option value="">EN</option>
          </select>
          </Link>
    
            {/* three components */}
            <Link to="/auth">
                    <p>Sign In</p>
                    <span>Account & Lists</span>           
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
                    <span>0</span>
                </Link>
        </div>
      </section>
    </section>
    <LowerHeader/>
    </>
  )
}

export default Header
