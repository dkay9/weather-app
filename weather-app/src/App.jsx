import { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WeatherDashboard from './components/WeatherDashboard'
import './App.css'

function App() {
  const [location, setLocation] = useState({
    lat: 51.5074,
    lon: -0.1278,
    city: "London"
  });

  const handleSearch = (lat, lon, city) => {
    setLocation({ lat, lon, city });
  };

  return (
    <div className='min-h-screen bg-neutral-900 text-white'>
      <Navbar />
      <h1 className='font-bricola text-6xl text-center mt-10 px-3'>How's the sky looking today?</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDashboard lat={location.lat} lon={location.lon} city={location.city} />
    </div>
  )
}

export default App
