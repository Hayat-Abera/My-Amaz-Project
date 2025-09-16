import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import Styles from './Header.module.css'
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
      <section  className={Styles.header_container}>
        <div className={Styles.logo_container}>
            {/* logo */}
            <a href="#"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" /></a>
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
            <a href="" className={Styles.language}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1280px-Flag_of_the_United_States_%28Web_Colors%29.svg.png" alt="american-flag" />
          <select name="" id="">
            <option value="">EN</option>
          </select>
          </a>
    
            {/* three components */}
            <a href="">
                    <p>Sign In</p>
                    <span>Account & Lists</span>           
            </a>

            {/* orders */}
                <a href="">
                    <p>returns</p>
                    <span>& Orders</span>
                </a>

                {/* cart */}
                <a href="" className={Styles.cart}>
                    {/* icon */}
                    <BiCart size={35} />
                    <span>0</span>
                </a>
        </div>
      </section>
    </section>
    <LowerHeader/>
    </>
  )
}

export default Header
