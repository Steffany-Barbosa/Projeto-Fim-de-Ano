import frame from "../../assets/frame.png";
import s from "../queroDoar/queroDoar.module.scss";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_Url] = useState("");

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImage = (e) => {
    setImage_Url(e.target.value);
  };

  const enviarDados = async () => {
    const dadosPEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    };
    await axios.post("https://api-livros-t1-skoq.onrender.com/doar", dadosPEnviar);
  };

  return (
    <section className={s.queroDoar}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro.
      </p>

      <form onSubmit={(e)=> e.preventDefault()}>
        <div className={s.infosLivros}>
          <img
            src={frame}
            alt="Imagem com icone de livro aberto com borda azul"
          />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder="Titulo" onChange={capturaTitulo} />
        <input
          type="text"
          placeholder="Categoria"
          onChange={capturaCategoria}
        />
        <input type="text" placeholder="Autor" onChange={capturaAutor} />
        <input
          type="text"
          placeholder="Link da Imagem"
          onChange={capturaImage}
        />
        <input type="submit" value="Doar" className={s.btnDoar} onClick={enviarDados} />
      </form>
    </section>
  );
}
