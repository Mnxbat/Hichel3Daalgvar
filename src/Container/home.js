import React from "react";
import "./home.css"
import Zurag1 from "../Assets/angilal-aris-archilgaa.webp"
import Zurag2 from "../Assets/angilal-eruul-mend.webp"
import Zurag3 from "../Assets/angilal-geriin-tawilga.webp"
import Zurag4 from "../Assets/angilal-sport.webp"
import Zurag5 from "../Assets/angilal-technology.webp"
import Zurag6 from "../Assets/angilal-tejeewer-amitnii-hangamj.webp"
import Zurag7 from "../Assets/angilal-togloom.webp"
import Zurag8 from "../Assets/angilal-tsahilgaan-heregsel.webp"
import Zurag9 from "../Assets/angilal-unet-edlel.webp"
import Zurag10 from "../Assets/sale.webp"


const Home = () =>{
    const data = [
        {
            key:1,
            img: Zurag1,
            title:"Ариё арчилгаа",
            
        }
        ,
        {
            key:2,
            img: Zurag2,
            title:"Эрүүл мэнд",
            
      
        },
        {
            key:3,
            img: Zurag3,
            title:"Гэрийн тавилга",
            
            
        }
        ,
        {
            key:4,
            img: Zurag4,
            title:"Спорт",
            
            
        },
        {
            key:5,
            img: Zurag5,
            title:"Технологи",
            
           
        }
        ,
        {
            key:6,
            img: Zurag6,
            title:"Тэжээвэр амьтан",
            
            
        },
        {
            key:7,
            img: Zurag7,
            title:"Тоглоом",

        }
        ,
        {
            key:8,
            img: Zurag8,
            title:"Цахилгаан хэрэгсэл",
            
           
        },
        {
            key:9,
            img: Zurag9,
            title:"Үнэт эдлэл",
            
            
        }
        ,
        {
            key:10,
            img: Zurag10,
            title:"Sale",
            
           
        }
    ];
    return (
        <div className="Body">
            {
                data.map((row)=>(
                    <div className="newsBox">
                        <img src={row.img} alt="/"/>
                        <h2>{row.title}</h2>

                    </div>
                ))
            }
        </div>
    )
}
export default Home;