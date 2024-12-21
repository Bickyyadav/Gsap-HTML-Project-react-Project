import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)
const Cards = () => {

  const images=[
    '../public/1.png',
    '../public/2.png',
    '../public/3.png',
    '../public/4.png',
    '../public/5.png',
    '../public/6.png',

  ]


  useEffect(()=>{
    gsap.utils.toArray('.card').forEach(card=>{
      gsap.to(card,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger: card,
            start:"top 15%",
            end: "bottom 15%",
            markers:true,
            scrub:true,
        }
    })
      })
    })


  return (
    <main className="w-full text-white text-center flex flex-col gap-4 items-center pt-[15vh]">
      {
        images.map((images,index)=>{
          return (
            
            <div key={index} className="card card1 flex sticky top-[15vh] flex-col w-[27vw] py-[15vh] rounded-[25px] px-[20px] gap-4 items-center bg-[#2e251e]">
        <img src={images} alt="first photo" className="w-[180px] aspect-square" />
        <h1 className="text-4xl font-thin">
          THE <br /> <span className="font-bold">Algorithms</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nisi!</p>
      </div>
          )
        })
      }
    </main>
  );
};

export default Cards;
