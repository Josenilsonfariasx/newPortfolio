import style from './style.module.css'

export const AboutMe = ()=> {
    return (
        <section id='about' className={style.aboutMe}>
            <div className="container">
                <h2 className="title2">Sobre mim</h2>
                <p className="paragraph">Sou um Desenvolvedor Back-end com formação sólida e experiência prática em criação de soluções. Tenho conhecimentos nas tecnologias como JavaScript, Html, Css, Node, Python, APIs, Git, MySql, PostgreSql, Django Rest Framework, Insomnia, Express Js, Fetch API, JWT, Vercel, Netfly, Render. Sou colaborativo, dedicado e comprometido em entregar soluções de qualidade. Estou em constante evolução e busco oportunidades para desenvolver minha carreira, contribuindo para projetos empolgantes e crescendo junto com a equipe ou empresa. </p>
            </div>
        </section>
    )
}