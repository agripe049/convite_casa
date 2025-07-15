import CountDown from "../../components/CountDown/CountDown";
import "./Home.css"
import ConfirmePresenca from "../ConfirmePresenca/ConfirmePresenca"
import { IoLocationOutline } from "react-icons/io5";

function Home() {
  return (
    <div>
      <div className="topo-do-site">
        <div className="interface">
          <p className="monograma">
            LE
          </p>
          <h1 className="titulo-home">
            EMANUELLY & LUIS MIGUEL
          </h1>
          <p className="traco-home"></p>
          {/* Contador */}
          <CountDown />
          <h2 className="data-home">
            11 DE JANEIRO DE 2026
          </h2>
          <a 
            className="local" 
            href="https://maps.app.goo.gl/cFLXiKa9piHuk3gG7?g_st=ac"
            target="_blank"
          >
            LOCALIZAÇÃO <IoLocationOutline />
          </a>
        </div>
      </div>
      <ConfirmePresenca />
    </div>
  )
}

export default Home;