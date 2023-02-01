import React from "react";  
import Slider from "react-slick";
import "./About.css"

// const About = () =>{
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//     return (
//         <div>
//             <Slider {...settings}>
//                 <div className="Banner">
//                     <img src="https://cdn.cody.mn/img/154702/1400x0xwebp/asia_cup_header_banner_web.jpg?h=0e574793aba26a3842b435fa338eebe87d9f73c8" alt="/"/>
//                 </div>
//                 <div className="Banner">
//                     <img src="https://cdn.cody.mn/img/154788/1400x0xwebp/Choijoo_header_banner_web.jpg?h=0e574793aba26a3842b435fa338eebe87d9f73c8" alt="/"/>
//                 </div>
//                 <div className="Banner">
//                     <img src="https://cdn.cody.mn/img/150571/1400x0xwebp/deed_lig_header_banner_web.jpg?h=0e574793aba26a3842b435fa338eebe87d9f73c8" alt="/"/>
//                 </div>
//                 <div className="Banner">
//                     <img src="https://cdn.cody.mn/img/154797/1400x0xwebp/Lalaland_header_banner_web.jpg?h=0e574793aba26a3842b435fa338eebe87d9f73c8" alt="/"/>
//                 </div>
//             </Slider>
//         </div>
//     );
// };
// export default About; 

const More =()=>{
    const settings1 ={
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div className="Banner1">
        <h2 className="Header">Улирлын онцлох</h2>
        <Slider {...settings1}>
          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150349/300x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Өвлийн спорт</p>
          </div>
         
          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Гадуур хувцас</p>
          </div>
          
          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Өвлийн гутал</p>
          </div>

          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150352/300x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            
            </div>
            <p className="Text">Агааржуулагч & Агаар чийгшүүлэгч</p>
          </div>
        
          <div className="Sales">
          <div className="Sales1">
           
            <img className="Zurag" src="https://cdn.cody.mn/img/150866/300x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Хүүхдийн дулаан цамц</p>
          </div>
        
          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150354/300x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Малгай ороолт бээлий</p>
        
          </div>
          <div className="Sales">
          <div className="Sales1">
            <img className="Zurag" src="https://cdn.cody.mn/img/150355/300x0xwebp/ulirliin_ontslokh_angilal-vitamin.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/" />
            </div>
            <p className="Text">Витамин & Эрдэс бодис</p>
          </div>
         
        </Slider>
           
        </div>
    )
}
export default More;

