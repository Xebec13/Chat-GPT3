import React from 'react';
import './cta.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(
      ".gpt3__cta"
    );

    gsap.from(elements, {
      x: -100,          // przesunięcie z lewej
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,     // pojawiają się kolejno
      scrollTrigger: {
        trigger: ".gpt3__cta",
        start: "top 60%",
        scrub:true,
      },
    });
  }, []);

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;