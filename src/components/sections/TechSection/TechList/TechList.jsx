import { technologies } from "../../../../data/technologies"
import { TechCard } from "../TechCard/TechCard"
import style from './style.module.css'
export const TechList = () =>{
    return (
            <section id="stack" className={style.sectionTech}>
                <div className="container">
                    <h2 className="title2">Tecnologias</h2>
                    <ul className={style.ul}>
                        {technologies.map(res =>
                            <TechCard key={res.name} img={res.img} name={res.name}/>
                        )}
                    </ul>
                </div>
            </section>
    )
}