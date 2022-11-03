
import './Inicio.css'
import InicioFondo from '../../assets/inicio.fondo.jpg'

const Inicio = (props) => {
  return (
    <div className='message-greeting-container'>
        <h2 className='message'>{props.name}</h2>

    </div>
  )
}

export default Inicio