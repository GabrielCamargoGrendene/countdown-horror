import { Link } from "react-router-dom"
import "./style.scss"

export function Navigator(){
    return (
        <nav className="navigate">
            <ul>
                <li><Link to='/'>Hora da <p>morte</p> </Link></li>
                <li><Link to='/adress'>Endereço</Link></li>
            </ul>
        </nav>
    )
}