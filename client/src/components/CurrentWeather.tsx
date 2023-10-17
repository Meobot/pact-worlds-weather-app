import "../styles/CurrentWeather.css"
import Temperature from "./Temperature"

function CurrentWeather() {

	const location = "Castrovel"

  return (
	<div className="CurrentWeather-container">
		<h1>{location}</h1>
		<Temperature />
	</div>
  )
}

export default CurrentWeather