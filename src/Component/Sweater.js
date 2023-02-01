import React from "react";
import Slider from "react-slick";
import "./Sweater.css"


const Sweater = () =>{
    const settings1 ={
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }
    return(
        <div className="Sweater1">
        <Slider {...settings1}>
          <div className="Zurag2">
           <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265125/zoom/open-uri20220315-3173181-lvlo3r." alt="/" />
          </div>
          <div className="Zurag2">
           <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265126/zoom/open-uri20220315-3173181-1q3xyjx." alt="/" />
          </div>
          <div className="Zurag2">
           <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265127/zoom/open-uri20220315-3173181-k1o8ee." alt="/" />
          </div>
          <div className="Zurag2">
           <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265128/zoom/open-uri20220315-3173181-18ib3ua." alt="/" />
          </div>
          <div className="Zurag2">
           <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265129/zoom/open-uri20220315-3173181-ehnwtl." alt="/" />
          </div>
          <div className="Zurag2">
          <img className="Zurag3" src="https://cdnp.cody.mn/spree/images/1265130/zoom/open-uri20220315-3173181-1dxlt1o." alt="/" />
          </div>
        </Slider>
        </div>
    )
}
export default Sweater;