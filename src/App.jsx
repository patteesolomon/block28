import NavBar from './Components/NavBar';
import MainSection from './Components/MainSection';
import './App.css'

function App() {
  return (
    <div>
      <h1 id='hello'>Hello React Router!</h1>
        <NavBar/>
        <div id="container">
        <div className="home">
          <MainSection />
        </div>
      </div>
      <footer>
        <NavBar/>
      </footer>
    </div>
   
  )
}

export default App
