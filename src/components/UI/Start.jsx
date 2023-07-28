import '../../styles/start.css'
import mujerfitness from '../../assets/img/mujerfitness.png'

const Start = () => {
  return <section id='cambio'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={mujerfitness} alt="" data-aos='fade-left' data-aos-duration='1500' />
            </div>
            <div className="start__content" data-aos='fade-right' data-aos-duration='1500'>
                <h2 className="section__title">
                    ¿Listo para<span className="highlights"> cambiar?</span>
                </h2>
                <p>Si has llegado hasta aquí, significa que te has decidido a comenzar con tu cambio.
                El camino en algunos momentos será difícil, pero la perseverancia será tu mejor aliada.
                </p>
                <button className='register_btn'>Comienza tu viaje</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start