import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
  import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='contenedor-logo'>
        <img className='logo' src={freeCodeCampLogo} alt='logo' />
      </div>
      <div className='tareas-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />

      </div>
    </div>
  );
}

export default App;
