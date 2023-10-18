import "../styles/CurrentWeather.css";
import Temperature from "./Temperature";

function CurrentWeather() {
	const location = "Castrovel";

	return (
		<div className="CurrentWeather-container">
			<h1>{location}</h1>
			<h2>Firstday</h2>
			<div className="CurrentWeather-details">
				<Temperature />
				<h2 className="CurrentWeather-condition">Clear Skies</h2>
			</div>
		</div>
	);
}

export default CurrentWeather;
