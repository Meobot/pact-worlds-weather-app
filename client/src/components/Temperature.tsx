import "../styles/Temperature.css"

function Temperature() {

	const temperature = 75

  return (
	<div className="Temperature-container">
		<h2>
			<p className="Temperature-p">{temperature}&deg;F</p>
		</h2>
	</div>
  )
}

export default Temperature