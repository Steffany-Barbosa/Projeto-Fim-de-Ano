
import s from './inicio.module.scss'
import community from '../../assets/community.png'
import reading from '../../assets/reading.png'
import transform from "../../assets/transform.png";
import balance from "../../assets/balance.png";


export default function Inicio(){
    return (
        <main>
        <section className={s.redeDoacao}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

        <h2>Por que devo doar</h2>

          <section className={s.cardContainer}>
            <section className={s.card}>
              <img src={community} alt="comunidade" className={s.cardImage}/>
              <section className={s.cardContent}>
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            </section>  

            <section className={s.card}>
              <img src={reading} alt="lendo" />
              <section className={s.cardContent}>
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            </section>

            <section className={s.card}>
              <img src={transform} alt="transformação" />
              <section className={s.cardContent}>
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            </section>

            <section className={s.card}>
              <img src={balance} alt="balance" />
              <section className={s.cardContent}>
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            </section>

            </section>      

      </main>

       
    )
}