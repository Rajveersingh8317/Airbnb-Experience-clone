
import logo from "../../public/assets/star.png"
function Card(props){
    return(
        <div className="card">
            <img src={`/assets/${props.img}`} className="card-image"/>
            <div className="crad-stats">
                <img src={logo} className="card-star"/>
                <span >{props.rating}</span>
                <span className="gray">({props.reviewcount}) </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}
export default Card