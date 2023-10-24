import "./App.css";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";

function App() {
	fetch("http://localhost:3000/api/weather", {
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			// Handle the weather data received from the server
			console.log(data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});

	return (
		<div className="App">
			<Header />
			<CurrentWeather />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
			<ForecastCard />
		</div>
	);
}

export default App;
