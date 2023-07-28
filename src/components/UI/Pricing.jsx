import '../../styles/pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return <section id="cuotas">
    <div className="container">
        <div className="pricing__top">
            <h2 className="section__title">El mejor <span className="highlights">precio</span></h2>
            <p>El objetivo de Strong Gim no es otro que ser un gimnasio accesible para <br/>
            todo tipo de personas y bolsillos.
            </p>
        </div>
        {/* PRECIOS */}
        <div className="pricing__wrapper">
            <div className="pricing__item" data-aos='fade-up' data-aos-duration='1500'>
            <div className="pricing__card-top">
                <h2>Tarifa Basic</h2>
                <h2 className="pricing section__title">19.99€ <span>al mes</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Acceso ilimitado al gimnasio</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Aplicación con dietas personalizadas</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Tabla de ejercicios</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Acceso a la piscina</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Clases online para hacer desde casa</li>
                </ul>
                <button className='register_btn'>Únete ahora</button>
            </div>
            </div>
            <div className="pricing__item pricing__item-02" data-aos='fade-up' data-aos-duration='1800'>
            <div className="pricing__card-top">
                <h2>Tarifa Premium</h2>
                <h2 className="pricing section__title">29.99€ <span>al mes</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Ventajas de Tarifa Basic</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Agua de sabores</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Taquilla propia</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Acceso prioritario a clases</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Regalos anuales de equipo deportivo</li>
                </ul>
                <button className='register_btn'>Únete ahora</button>
            </div>
            </div>
            <div className="pricing__item" data-aos='fade-up' data-aos-duration='2000'>
            <div className="pricing__card-top">
                <h2>Tarifa Deluxe</h2>
                <h2 className="pricing section__title">39.99€ <span>al mes</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Ventajas de Tarifa Premium</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Entrenador personal</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Acceso a la sauna</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Sesión de masaje 2 veces al mes</li>
                    <li><span><FontAwesomeIcon icon={faCircle} /></span>Invita a un amigo a entrenar</li>
                </ul>
                <button className='register_btn'>Únete ahora</button>
            </div>
            </div>
            </div>
        </div>
  </section>
}

export default Pricing