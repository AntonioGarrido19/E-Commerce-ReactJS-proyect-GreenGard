import{Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loading.css'

const Loading = () => {
  return (
    <div className='spinner__container'>
        <div className='spinner__container--spinner'>
        <Spinner color='primary' />
        </div>
    </div>
  )
}

export default Loading