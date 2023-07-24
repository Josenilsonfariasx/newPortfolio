import whats from '../../assets/whatsapp-icon.png' 
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'
import styles from './styles.module.css'

export const Footer = ()=>{
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                <div>
                    <h2 className="title2">Contato</h2>
                    <div className={styles.imgs}>
                        <img src={whats} alt="whatsapp" onClick={()=>location.replace('https://wa.me/5588998726934?text=Oi+Josenilson%2C+Vim+do+seu+portf%C3%B3lio')} />
                        <img src={linkedin} alt="linkedin" onClick={()=>location.replace('https://www.linkedin.com/in/josenilsonfariasx/')} />
                        <img src={github} alt="github" onClick={()=>location.replace('https://github.com/Josenilsonfariasx')}/>
                    </div>
                </div>
                <span className='paragraph'>Todos os direitos autorais reservados - Josenilson Farias</span>
            </div>
        </footer>
    )
}