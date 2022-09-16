
import './App.css';
import { Peliculas } from './components/Peliculas';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='title'>Movies</h1>
        <main>
          <Peliculas />
        </main>
      </header>
    </div>
  );
}

export default App;
