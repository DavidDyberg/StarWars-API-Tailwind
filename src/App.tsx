
import './App.css'
import { StarWarsData } from './components/Character'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  

  return (
    <>
      <div className=' flex min-h-screen flex-col'>
        <Header />
        <StarWarsData />
        <Footer />
      </div>
    </>
  )
}

export default App
