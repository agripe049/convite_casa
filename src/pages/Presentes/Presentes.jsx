import { useState } from "react";
import "./Presentes.css";
import qrcode from "../../assets/qrcode.jpeg";

function Presentes() {
  const chavePix = "goncalvesmiguelluis@gmail.com";
  const [copiado, setCopiado] = useState(false);

  const copiarPix = () => {
    navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };


  return (
    <div className="interface-presentes">

      <h1 className="titulo-presentes">Lista de Presentes</h1>

      <h1 className="link-lista">
        <a href="" target="_blank" rel="noopener noreferrer">
          Clique aqui para ver nossa lista de presentes!
        </a>
      </h1>

      <p>Ou, se preferir:</p>
      <h2>Nos presenteie com um Pix</h2>
      <img src={qrcode} alt="QR Code para presente de casamento" className="qr-code"/>

      <p>Chave Pix (e-mail):</p>
      <br />
      <pre className="codigo-pix">{chavePix}</pre>
      <br />
      <button onClick={copiarPix} className="botao-copiar">
          {copiado ? "Copiado!" : "Copiar chave pix"}
      </button>
    </div>
  );
}

export default Presentes;
