import { useState, useContext } from 'react';
import Styles from './signUp.module.css';
import { Link } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/actiontype';

const Auth = () => {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [{user}, dispatch] = useContext(DataContext);

    console.log(user)
    const authHandler = async (e) =>{
        e.preventDefault();
        // console.log(e.target.name);
        if (e.target.name == "signin") {
            //firebase
            signInWithEmailAndPassword(auth, email, password).then((userInfo) =>{
                // console.log(userInfo);

                dispatch({
                    type: Type.SET_USER,
                    user: userInfo.user,
                });
            })

            .catch((err) =>{
                console.log(err)
            });
            
        } else {

            createUserWithEmailAndPassword(auth, email, password).then((userInfo) =>{
                // console.log(userInfo)
                   dispatch({
                    type: Type.SET_USER,
                    user: userInfo.user,
                });
            })

             .catch((err) =>{
                console.log(err)
            });
            
        }
        

    };

console.log(email,password)

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
                    <input type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  id='email'/>

                    <label htmlFor='password'>Password</label>
                    <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'/>

                    <button
                        type="submit"
                         name='signin'
                        className={Styles.login__signInButton}
                        onClick={authHandler}
                        >
                            
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>

                <button 
                type='submit'
                name='signup'
                    className={Styles.login__registerButton}
                    onClick={authHandler}
                    >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Auth
