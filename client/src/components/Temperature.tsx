import "../styles/Temperature.css"

function Temperature() {

	const temperature = 75

  return (
	<div className="Temperature-container">
		<h2>
			<p className="Temperature-p">Temperature: <span className="temperature-span">{temperature}&deg;F</span></p>
		</h2>
	</div>
  )
}

export default Temperature