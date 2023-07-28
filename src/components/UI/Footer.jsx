import '../../styles/footer.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    
    const year = new Date().getFullYear();
    return (
    <footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                <div className='logo'>
                        <div className='logo__img'><img src={logo} alt="Logo" /></div>
                        <h2>Strong Gim</h2>
                    </div>
                    <p className='loguete'>"El esfuerzo es tuyo, las<br/>
                    facilidades te las damos <br/>
                    nosotros"</p>
                </div>
                <div className="footer__box">
                    <h4 className="footer__title">Compañía</h4>
                    <ul className="footer__links">
                        <li><a href="#">Nuestro programa</a></li>
                        <li><a href="#">Nuestro compromiso</a></li>
                        <li><a href="#">Apúntate hoy</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Acceso rápido</h4>
                    <ul className="footer__links">
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Zona de socios</h4>
                    <ul className="footer__links">
                        <li><a href="#">Reservar clase</a></li>
                        <li><a href="#">Contacta con un entrenador</a></li>
                        <li><a href="#">Zona de pagos</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyright - {year} desarrollado por Andrés Ruiz. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer