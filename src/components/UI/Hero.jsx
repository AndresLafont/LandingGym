import flexion from '../../assets/img/flexion.png'
import logo from '../../assets/img/logo.png'
import '../../styles/hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return <section id="home">
    <div className="container">
        <div className="hero__wrapper">

            {/* Hero content */}
            <div className="hero__content">
                <h2 className='section__title' data-aos='fade-up' data-aos-duration='1500'>El ejercicio es la clave para un <span className="highlights">estilo de vida saludable</span></h2><br/>
                <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='1500'>Cambiar los hábitos de vida de las personas es algo realmente complicado.<br/>
                Sin embargo, hacer ejercicio es algo esencial si se quiere tener una vida larga y duradera.</p>
                <div className="hero__btns" data-aos='fade-up' data-aos-delay='200' data-aos-duration='1500'>
                   <button className="register_btn">Empieza hoy</button>
                   <button className="watch__btn"><span><FontAwesomeIcon icon={faPlay} /> </span>
                    Reproducir</button>
                </div>
            </div>
            {/* Hero img */}
            <div className="hero__img">
                <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={flexion} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="heart__rate" data-aos='fade-right' data-aos-duration='1500'>
                        <h5>Intensidad cardíaca</h5>
                        <span><FontAwesomeIcon icon={faHeartPulse} /></span>
                        <h6>2567 PPM</h6>
                    </div>

                    <div className="gym__location" data-aos='fade-left' data-aos-duration='1500'>

                        <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        <h5>Encuentra un gimnasio <br/> cerca de ti</h5>
                    </div>
                </div>
            </div>         
        </div>
    </div>
  </section>
}

export default Hero