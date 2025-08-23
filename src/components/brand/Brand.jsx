import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from './import';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
  useGSAP(() => {
    gsap.to(".gpt3__brand-logos", {
      x: 150,               // przesunięcie w prawo
      duration: 1,          // czas animacji (sekundy)
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".gpt3__brand",
        start: "top bottom",  // zaczyna gdy brand wejdzie od dołu
        end: "bottom top",    // kończy gdy brand wychodzi u góry
        scrub: true,          // animacja zależna od scrolla
      }
    });
  }, []);

  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__brand-logos">
        <div>
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopify" />
        </div>
      </div>
    </div>
  );
};

export default Brand;