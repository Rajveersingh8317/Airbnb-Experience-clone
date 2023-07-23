
import logo from "../../public/assets/star.png"
function Card(props){
     let badgeText
     if(props.openSpots === 0){
        badgeText = "SOLD OUT"

     } else if (props.location === "Online"){
        badgeText = "ONLINE"
     }
    return(
        <div className="card">
            {badgeText && <div className="card-badge"> {badgeText}</div>}
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