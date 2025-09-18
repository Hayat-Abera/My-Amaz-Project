import { Link } from 'react-router-dom'
import Styles from './catagory.module.css'

const CatagoryCard = ({ data }) => {
  console.log(data)
  return (
    <div className={Styles.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  )
}

export default CatagoryCard
