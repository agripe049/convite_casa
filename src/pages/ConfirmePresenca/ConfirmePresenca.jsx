import emailjs from "@emailjs/browser";   // Biblioteca do EmailJS importada
import { useState, useRef } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./ConfirmePresenca.css"

function ConfirmePresenca() {
  const [acompanhantes, setAcompanhantes] = useState([""]);
  const [telefone, setTelefone] = useState("");
  const form = useRef(); // Referência ao formulário

  //Adiciona um novo campo vazio
  const adicionarAcompanhante = (index) => {
    const novaLista = [...acompanhantes];
    novaLista.splice(index + 1, 0, ""); //adiciona logo abaixo
    setAcompanhantes(novaLista);
  };

  // Remove o campo do acompanhante
  const removerAcompanhante = (index) => {
    const novaLista = [...acompanhantes];
    novaLista.splice(index, 1);
    setAcompanhantes(novaLista);
  };

  // Atualiza o nome do acompanhante conforme digita
  const handleNomeChange = (index, novoNome) => {
    const novaLista = [...acompanhantes];
    novaLista[index] = novoNome;
    setAcompanhantes(novaLista);
  };

  // Função para formatar o telefone enquanto o usuário digita
  const formatarTelefone = (valor) => {
    return valor
      .replace(/\D/g, "") // Remove tudo que não for número
      .replace(/^(\d{2})(\d)/g, "($1) $2") // Coloca os parênteses no DDD
      .replace(/(\d{5})(\d{4})$/, "$1-$2"); // Coloca o traço no número
  };

  // Envia o e-mail com os dados do formulário
  const enviarEmail = (e) => {
    e.preventDefault(); // Impede o reload da pa´gina

    const formData = new FormData(form.current); // Captura dados do formulário
    const data = Object.fromEntries(formData.entries()); // Converte para objeto JS

    const templateParams = {
      name: data.name,
      telefone: telefone,
      email: data.email,
      confirmacao: data.confirmacao,
      acompanhantes: acompanhantes.join(", "), // Junta nomes em uma string separada por vírgulas
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert("Confirmação enviada com sucesso!");
        form.current.reset();// Limpa os campos do formulário
        setAcompanhantes([""]);
        setTelefone("");
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Ocorreu um erro ao enviar a confirmação.");
      });
  }

  return (
    <div>
      <section className="formulario">
        <div className="interface">
          <h2 className="titulo-confirmacao">
            Confirmação de presença
          </h2>
          <br />
          <p>Faça parte da nossa história de amor, confirme sua presença</p>
          <form ref={form} onSubmit={enviarEmail}>
            <input type="text" name="name" placeholder="Nome completo" required />

            <label className="label-evento">Você irá ao evento?</label>
            <select name="confirmacao" required>
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>

            <input type="text" name="telefone" placeholder="Telefone"
              required value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))} />
            <input type="email" name="email"
              placeholder="E-mail" required />

            <label className="label-acompanhantes">
              Quantos acompanhantes?
            </label>

            {acompanhantes.map((nome, index) => (
              <div key={index} className="campo-acompanhante">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => handleNomeChange(index, e.target.value)}
                  placeholder="Nome do acompanhante"
                  required
                />

                <div className="icones">
                  <button
                    type="button"
                    onClick={() => adicionarAcompanhante(index)}
                    title="Adicionar"
                  >
                    <FaPlus />
                  </button>

                  {acompanhantes.length > 1 && (
                    <button
                      type="text"
                      onClick={() => removerAcompanhante(index)}
                      title="Remover"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ConfirmePresenca;