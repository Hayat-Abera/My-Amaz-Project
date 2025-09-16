import Styles from './catagory.module.css'

const CatagoryCard = ({ data }) => {
  return (
    <div className={Styles.catagory}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default CatagoryCard
