import { CatagoryFile } from "./catagoryFile.js"
import CatagoryCard from "./CatagoryCard"
import Styles from './catagory.module.css'

const Catagory = () => {
  return (
    <div className={Styles.catagory_container}>
     { CatagoryFile.map((file)=>(
          <CatagoryCard data={file}/>
        ))} 
    </div>
  )
}

export default Catagory
