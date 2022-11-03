
import './App.css';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <>
   <NavBar/>
   { <Inicio name='WELCOME TO GREENGARD'/> }
   </>
  );
}

export default App;
