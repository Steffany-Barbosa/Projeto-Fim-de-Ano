import s from "./inicio.module.scss";
import community from "../../assets/community.png";
import reading from "../../assets/reading.png";
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";

export default function Inicio() {
  return (
    <main>
      <section className={s.redeDoacao}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO.</h2>
      </section>

      <section className={s.cardContainer}>
        <h2>Por que devo doar?</h2>

        <section className={s.cardMotivos}>
          <section>
            <img src={community} alt="comunidade" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>

          <section>
            <img src={reading} alt="lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>

          <section>
            <img src={transform} alt="transformação" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>

          <section>
            <img src={balance} alt="balance" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>

        </section>
        
      </section>
    </main>
  );
}
