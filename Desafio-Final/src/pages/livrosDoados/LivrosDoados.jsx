import protagonista from '../../assets/protagonista.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados(){
    return (
        
        <section className={s.livrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={protagonista} alt="imagem do livro O protagonista" />
                    <div>
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}