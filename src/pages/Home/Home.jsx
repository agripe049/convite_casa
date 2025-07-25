import "./Home.css"
import ConfirmePresenca from "../ConfirmePresenca/ConfirmePresenca"
import { IoLocationOutline } from "react-icons/io5";
import Presentes from "../Presentes/Presentes";

function Home() {
  return (
    <div> 
      <div className="topo-do-site">
        <div className="interface">
          <p className="monograma">
            LE
          </p>
          <h1 className="titulo-home">
            EMANUELY & LUIS MIGUEL
          </h1>
          <p className="traco-home"></p>
          {/* Contador */}
          <h2 className="data-home">
            11 DE JANEIRO DE 2026
          </h2>
          <p className="horario">
              as 15:30h
          </p>
          <p className="bem-vindo">
            Bem-vindo(a) ao nosso site! <br />
            Aqui você encontra a localização do casamento, nossa lista de presentes,<br /> confirmação de presença e todos os detalhes importantes para o grande dia!
          </p>
          <a
            className="local"
            href="https://maps.app.goo.gl/cFLXiKa9piHuk3gG7?g_st=ac"
            target="_blank"
          >
            LOCALIZAÇÃO <IoLocationOutline />
          </a>
        </div>
      </div>
      <Presentes />
      <ConfirmePresenca />
    </div>
  )
}

export default Home;