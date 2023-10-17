import "../styles/ForecastCard.css";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForecastCard() {
	return (
		<div className="ForecastCard-container">
			<FontAwesomeIcon icon={faCloud} style={{ color: "#ffffff" }} />
			<div>
				<h2>Today</h2>
				<h2>Clear Skies</h2>
			</div>
			<h3>70&deg;F - 85&deg;F</h3>
		</div>
	);
}

export default ForecastCard;
