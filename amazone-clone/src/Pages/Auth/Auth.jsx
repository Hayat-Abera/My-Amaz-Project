import Styles from './signUp.module.css'
import { Link } from 'react-router-dom';


const Auth = () => {

    return (
        <div className={Styles.login}>
            <Link to="/">
                <img
                    className={Styles.login__logo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className={Styles.login__container}>
                <h1>Sign-in</h1>

                <form action="">
                    <label htmlFor='email'>E-mail</label> 
                    <input type="text" id='email'/>

                    <label htmlFor='password'>Password</label>
                    <input type="password"  id='password'/>

                    <button
                        type="submit" className={Styles.login__signInButton} >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>

                <button 
                    className={Styles.login__registerButton}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Auth
