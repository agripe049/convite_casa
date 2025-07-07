import CountDown from "../../components/CountDown/CountDown";
import "./Home.css"
import ConfirmePresenca from "../ConfirmePresenca/ConfirmePresenca"

function Home() {
  return (
    <div>
      <div className="topo-do-site">
        <div className="interface">
          <h1 className="titulo-home">
            LUIS MIGUEL & EMANUELLY
          </h1>
          <p className="traco-home"></p>
          <h2 className="data-home">
            30 DE MAIO DE 2026
          </h2>
          {/* Contador */}
          <CountDown />
        </div>
      </div>
      <ConfirmePresenca />
    </div>
  )
}

export default Home;