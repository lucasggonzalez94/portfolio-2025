import NavBar from './components/NavBar/NavBar'
import Home from './containers/Home/Home'

function App() {
  return (
    <div className='w-screen bg-gradient-to-tr from-slate-900 to-black flex flex-col items-center justify-center text-sm'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
