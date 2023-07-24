import portfolio from "../../assets/portfolio.png"
import styles from "./style.module.css"
export const Header = ()=>{
    return (
        <header className={styles.header}>
            <div className="container">
                <img src={portfolio} alt="Portfolio" />
                <nav>
                    <a className="paragraph" href="#about">Sobre</a>
                    <a className="paragraph" href="#stack">Stack</a>
                    <a className="paragraph" href="#projects">Projeto</a>
                </nav>
                <button type="button" className='btn' onClick={()=>{location.replace("#footer")}}>Contato</button>
            </div>
        </header>
    )
}