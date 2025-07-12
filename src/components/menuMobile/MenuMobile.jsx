import { Link } from "react-router-dom";
import "./MenuMobile.css";

function MenuMobile() {
    return (
        <div className="menu-mobile">
            <div className="btn-fechar">
                <i className="bi bi-x-lg"></i>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <h2>Início</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/confirme-presenca">
                            <h2>Confirme Presença</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/presentes">
                            <h2>Presentes</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nossa-historia">
                            <h2>Nossa História</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuMobile;