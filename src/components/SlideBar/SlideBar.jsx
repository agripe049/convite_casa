import { Link } from "react-router-dom";
import "./SlideBar.css"


function SlideBar() {
    return (
        <header>
            <div className="interface">
                <div className="logo">
                    <Link to="/">
                        <h2>    </h2>
                    </Link>
                </div>
                <div className="menuSlidebar">
                    <ul>
                        <li>
                            <Link to="/">
                                <h2>Início</h2>
                            </Link>
                        </li>
                        <li>
                             <Link to="/presentes">
                                <h2>Presentes</h2>
                            </Link>
                        </li>
                        <li>
                             <Link to="/confirme-presenca">
                                <h2>Confirme Presença</h2>
                            </Link>
                        </li>
                        <li> 
                            <Link to="/nossa-historia">
                                <h2>Nossa História</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default SlideBar;