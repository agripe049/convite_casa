import CountDown from "../../components/CountDown/CountDown";
import "./Home.css"
import ConfirmePresenca from "../ConfirmePresenca/ConfirmePresenca"

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
            30 DE MAIO DE 2026
          </h2>
        </div>
      </div>
      <ConfirmePresenca />
    </div>
  )
}

export default Home;