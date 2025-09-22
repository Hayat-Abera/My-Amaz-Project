import { useContext, useEffect } from 'react'
import './App.css'
import Routing from './Router.jsx'
import { DataContext } from './Components/DataProvider/DataProvider.jsx'
import { auth } from './Utility/firebase.js';
import { Type } from './Utility/actiontype.js';


function App() {

  const [{user}, dispatch] = useContext(DataContext);

  useEffect(() =>{

      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          console.log(authUser)
          dispatch({
            type: Type.SET_USER,
            user: authUser,
          })
          
        } else {
           dispatch({
            type: Type.SET_USER,
            user: authUser,
          })
          
        }

      })
  }, []);
  
  return (
    <>
      <Routing/>

    </>
  )
}

export default App
