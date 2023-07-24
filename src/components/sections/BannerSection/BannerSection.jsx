import { username } from "../../../data/user"
import bannerImg from "../../../assets/banner-img.png";
import styles from "./style.module.css"

export const BannerSection = ()=>{
    return (
        <section className={styles.banner}>
            <div className="container">
                <section className={styles.sectionText}>
                    <span className="label">{username}</span>
					<h1 className="title1">Bem vindo ao meu portfólio</h1>
					<p className="paragraph">Uma frase interessante sobre mim</p>
					<button className="btn" onClick={()=>location.replace('https://www.linkedin.com/in/josenilsonfariasx/')} >Saiba mais</button>
                </section>
                <img src={bannerImg}/>
            </div>
        </section>
    )
}