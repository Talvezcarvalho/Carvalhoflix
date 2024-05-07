import logo from '../../assets/Logo.png'; 
import Botao from '../Botao';
import Button from '../Button';
import './Menu.css'

export default function Menu () {
    return (
        <nav className='Menu'>
            <a>
                <img className='Logo' src={logo} alt='logo'></img>
            </a>
            <Button
            as= 'a'
            href = "/"
            >
                SLA
            </Button>
        </nav>
    )
}