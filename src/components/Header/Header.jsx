import '../../styles/header.css';
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const nav__links = [
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#claves',
        display: 'Claves de una vida sana'
    },
    {
        path:'#cambio',
        display: 'Comienza tu cambio'
    },
    {
        path:'#cuotas',
        display: 'Cuotas'
    },
    {
        path:'#nosotros',
        display: 'Opiniones'
    },
]

const Header = () => {

const headerRef = useRef(null);
const headerFunc = () =>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
    } else {
        headerRef.current.classList.remove('sticky__header')
    }
}

useEffect(()=>{
    window.addEventListener('scroll', headerFunc)

    return() => window.removeEventListener("scroll", headerFunc);
}, []);

const handleClick= e=> {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;


    window.scrollTo({
        left: 0,
        top: location - 80,

    })}

    return (
        <header className='header' ref={headerRef}>
            <div className='container'>
                <div className='nav__wrapper'>
                    {/* LOGO */}
                    <div className='logo'>
                        <div className='logo__img'><img src={logo} alt="Logo" /></div>
                        <h2>Strong Gim</h2>
                    </div>

                    {/* nav menu */}

                    <div className="navigation">
                        <ul className="menu">
                            {nav__links.map(item => (
                                    <li className="nav__item">
                                        <a onClick={handleClick} href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Nav right */}
                    <div className="nav__right">
                        <button className='register_btn'>Regístrate</button>
                        <span className="mobile__menu">
                        </span>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;