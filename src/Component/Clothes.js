import React from "react";
import Slider from "react-slick";
import "./Clothes.css";
import Sweater from "./Sweater"

const Clothes = ()=>{
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }
    return(
      <div className="Bigbody">
      <div className="catalog">
      <h2 className="Garchig1">Эрчүүдэд улирлын хувцас</h2>
      <Slider {...settings}>
        <div className="slider">
            <div className="Picture">
              <Sweater />
           </div>
           <div className="Info">
           <h2 className="Garchig">Kurtka</h2>
            <p className="Tailbar">very cool</p>
            <p className="Une">500,000₮</p>
           </div>
        </div>
        <div className="slider">
          <div className="Picture">
            <img className="Zurag1" src="https://cdnp.cody.mn/spree/images/1609664/zoom/open-uri20221229-745958-otierw." alt="/" />
          </div>
          <div className="Info">
            <h2 className="Garchig">Гутал</h2>
            <p className="Tailbar">Very Timberlake like</p>
            <p className="Une">800,000₮</p>
           </div>
        </div>
        <div className="slider">
            <div className="Picture">
             <img className="Zurag1" src="https://cdnp.cody.mn/spree/images/1531599/zoom/open-uri20221028-841149-1jzizze." alt="/" />
            </div>
            <div className="Info">
            <h2 className="Garchig">Цамц</h2>
            <p className="Tailbar">Very cool looking guy</p>
            <p className="Une">200,000₮</p>
           </div>
        </div>
        <div className="slider">
            <div className="Picture">
              <img className="Zurag1" src="https://cdnp.cody.mn/spree/images/1037427/zoom/open-uri20210701-3981068-iyjftd." alt="/" />
            </div>
            <div className="Info">
            <h2 className="Garchig">Very Unfashonable Bag</h2>
            <p className="Tailbar">Very sloppy bag for it</p>
            <p className="Une">200,000₮</p>
           </div>
        </div>
        <div className="slider">
            <div className="Picture">
               <img className="Zurag1" src="https://cdnp.cody.mn/spree/images/892163/zoom/open-uri20210202-2290554-1i3aq92." alt="/" />
            </div>
            <div className="Info">
            <h2 className="Garchig">Cool pants for winter</h2>
            <p className="Tailbar">Very warm, much wow</p>
            <p className="Une">900,00₮</p>
           </div>
        </div>
        <div className="slider">
            <div className="Picture">
              <img className="Zurag1" src="https://cdnp.cody.mn/spree/images/1428126/zoom/open-uri20220818-37820-1vjw6df." alt="/" />
            </div>
            <div className="Info">
            <h2 className="Garchig">White Pants</h2>
            <p className="Tailbar">Looks cool, very much appreciated</p>
            <p className="Une">300,000₮</p>
           </div>
        </div>
      </Slider>
      </div>
      </div>
    )
}
export default Clothes;