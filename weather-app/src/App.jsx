import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WeatherDashboard from './components/WeatherDashboard'
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-neutral-900 text-white'>
      <Navbar />
      <h1 className='font-bricola text-6xl text-center mt-10 px-3'>How's the sky looking today?</h1>
      <SearchBar />
      <WeatherDashboard lat={51.5074} lon={-0.1278} city={"London"} />
    </div>
  )
}

export default App
