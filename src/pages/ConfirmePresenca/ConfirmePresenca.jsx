import emailjs from "@emailjs/browser";   // Biblioteca do EmailJS importada
import { useRef } from "react";
import "./ConfirmePresenca.css"

function ConfirmePresenca() {
  const form = useRef(); // Referência ao formulário

  // Envia o e-mail com os dados do formulário
  const enviarEmail = (e) => {
    e.preventDefault(); // Impede o reload da pa´gina

    const formData = new FormData(form.current); // Captura dados do formulário
    const data = Object.fromEntries(formData.entries()); // Converte para objeto JS

    const templateParams = {
      name: data.name,
      confirmacao: data.confirmacao,
      to_email: "goncalvesmiguelluis@gmail.com,emanuelyzaneboni@gmail.com,agripeheber@gmail.com",
      reply_to: data.emailUsuario  // o e-mail que o usuário preencheu no formulário
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
          <p className="faca-confirme">Faça parte da nossa história de amor, confirme sua presença</p>
          <form ref={form} onSubmit={enviarEmail} className="form-confirme">
            <input type="text" name="name" placeholder="Nome completo" required />
    
            <label className="label-evento">Você irá ao evento?</label>
            <select name="confirmacao" required>
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ConfirmePresenca;