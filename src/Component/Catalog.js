import React from "react";
import "./Catalog.css";
import Slider from "react-slick";
import Picture1 from "../Assets/1.jfif"
import Picture2 from "../Assets/2.jpg"
import Picture3 from "../Assets/3.jpg"
import Picture4 from "../Assets/4.jfif"
import Picture5 from "../Assets/5.png"
import Picture6 from "../Assets/6.jfif"
import Picture7 from "../Assets/7.jfif"



const Catalog2 = () =>{
    const setting3 = {
        dots: true,
      infinite: true,
      speed: 500,
      autoPlay:true,
      autoplaySpeed: 4000,
      slidesToShow: 5,
      slidesToScroll: 1
    }
    const data1 = [
        {
            key:1,
            img: Picture1,
            title:"Өвлийн куртка",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
            
        }
        ,
        {
            key:2,
            img: Picture2,
            title:"Өвлийн гутал",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
            
      
        },
        {
            key:3,
            img: Picture3,
            title:"Өвлийн гутал 2",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
            
        }
        ,
        {
            key:4,
            img: Picture4,
            title:"Өвлийн Юбка",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
            
        },
        {
            key:5,
            img: Picture5,
            title:"Цамц",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
           
        }
        ,
        {
            key:6,
            img: Picture6,
            title:"Хичээлийн цүнх",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
            
        },
        {
            key:7,
            img: Picture7,
            title:"Гоёлын цүнх",
            detail: "Өмсөхөд дулаахан",
            Price: "100,000$"
        }
        
    ];
    return (
        <div className="prebody1">
            <h2>Эмэгтэйчүүдийн өвлийн сонголт</h2>
        <div className="Catalog-body">
            
            <Slider {...setting3}>
                {data1.map((row)=>(
                    <div className="pictureBox">
                        <div className="picture-frame">
                        <img className="Picdetail" src={row.img} alt="/"/>
                        </div>
                        <div className="pictureinfo">
                        <p className="nameinfo">{row.title}</p>
                        <p className="Information">{row.detail}</p>
                        <p className="une1">{row.Price}</p>
                        </div>

                    </div>
                ))}
            </Slider>
            
        </div>
        </div>
     
        
    )
}
export default Catalog2;