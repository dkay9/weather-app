import Navbar from './components/Navbar'
import SeachBar from './components/SearchBar'
import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-neutral-900 text-white'>
      <Navbar />
      <h1 className='font-bricola text-4xl text-center mt-5'>How's the sky looking today?</h1>
      <SeachBar />
    </div>
  )
}

export default App
