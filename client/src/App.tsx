import './App.css'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import ForecastCard from './components/ForecastCard'

function App() {



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
  )
}

export default App
