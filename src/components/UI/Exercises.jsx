import '../../styles/exercises.css';
import logo2 from '../../assets/img/logo2.png'
import logo3 from '../../assets/img/logo3.png'
import logo4 from '../../assets/img/logo4.png'

const Exercises = () => {
  return <section id='claves'>
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section__title">Claves de una vida <span className='highlights'>sana</span>
            </h2>
            <p>Para conseguir una vida sana, hay 3 claves que no podemos ignorar.<br/>
            Una vez sigamos las 3, notaremos cambios en nuestro cuerpo y mente en poco tiempo.</p>
        </div>

        {/* Lista de ejercicios */}
        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise__icon"><img src={logo2} alt="" /></span>
                <div className="exercise__content">
                    <h4>Ejercicio de fuerza</h4>
                    <p>Aunque algunas personas le quitan importancia, los ejercicios de fuerza <br/>
                    son clave para una bajada de peso sostenible en el tiempo.
                    </p>
                </div>
            </div>
            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise__icon"><img src={logo3} alt="" /></span>
                <div className="exercise__content">
                    <h4>El cardio, un gran aliado</h4>
                    <p>Hay que acompañar los entrenamientos de fuerza con cardio,<br/>
                    que puede ser de varios tipos (HIT, paseos...) 
                    </p>
                </div>
            </div>
            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
                <span className="exercise__icon"><img src={logo4} alt="" /></span>
                <div className="exercise__content">
                    <h4>Hábitos de alimentación</h4>
                    <p>Acostumbrarnos a una alimentación saludable parece difícil, <br/>
                    pero realmente no lo es tanto, es cambiar solo un par de cosas
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Exercises