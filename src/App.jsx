import './app.css'
import { Header } from './components/Header'
import { Recipes } from './components/Recipes'

function App() {
  return (
    <section className='container'>
      <Header />
      <Recipes />
    </section>
  )
}

export default App
