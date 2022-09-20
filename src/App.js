import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { PeliDetails } from './pages/PeliDetails';
import { LandingPage } from './pages/LandingPage';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <Link to="/">
            <h1 className='title'>Movies</h1>
          </Link>
        </header>
          <main>
            
              <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/pelicula/:peliculaId" element={<PeliDetails/>} />
              </Routes>
        
          
          </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
