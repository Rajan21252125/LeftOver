import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function CheifCard({cheif}) {
  return (
    <div className="cheif-card">
      <img src={cheif.img} alt=""></img>
      <div className="cheif-card-info">
        <h3 className="cheif-card-name">{cheif.name}</h3>
        <p className="cheif-recipe-count">Recipes: <b>{cheif.recipeCount}</b></p>
        <p className="cheif-recipe-cuisine">Cuisine: <b>{cheif.cuisine}</b></p>
        <p className="cheif-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  )
}
