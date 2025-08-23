import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // 1️⃣ Najpierw obrazek pojawia się
    tl.from(".gpt3__header-image img", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 2️⃣ Potem dzieci wchodzą po kolei
    tl.from(".gpt3__header-content > *", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3
    }, "-=0.3");

    // 3️⃣ Zoom efekt na scrollu dla obrazka
    gsap.to(".gpt3__header-image img", {
      scale: 1.1,   // delikatny zoom
      ease: "none",
      scrollTrigger: {
        trigger: ".gpt3__header",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
          Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Adress' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.6k + 1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header