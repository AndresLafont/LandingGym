import '../../styles/testimonials.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {EffectCards} from "swiper/modules";
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';
import avatar03 from '../../assets/img/avatar03.png';

export default function Testimonial() {
  return (
    <>
      <section id="nosotros">
        <div className="container sliders">
            <h2 className="section__title">Qué dicen de nosotros</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
            <h4>Roberto Martínez</h4>
            <p>"Una auténtica pasada, máquinas de última generación que ayudan a que mis entrenos 
            sean de gran calidad y realmente efectivos"</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide__item">
            <div className="slide__img-02">
                <img src={avatar02} alt="" />
            </div>
            <h4>Juan Ruiz</h4>
            <p>"Llevo toda la vida en mi gimnasio de barrio, pero el servicio de Strong Gim
            ha mejorado enormemente mi calidad y tranquilidad a la hora de entrenar"</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-03">
                    <img src={avatar03} alt="" />
                </div>
            <h4>Adolfo Suárez</h4>
            <p>"Además de un gimnasio limpio y acogedor, los servicios como la piscina
            o la sauna son un plus para pagar algo más y tener de todo a mano"</p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  );
}
