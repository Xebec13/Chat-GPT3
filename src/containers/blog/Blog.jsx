import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useGSAP(() => {
  // Nagłówek
  gsap.fromTo(
    ".gpt3__blog-heading h1",
    { y: -30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gpt3__blog-heading",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true, // zsynchronizowane z scrollowaniem
      },
    }
  );

  // Grupa A
  gsap.fromTo(
    ".gpt3__blog-container_groupA",
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".gpt3__blog-container_groupA",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Grupa B
  gsap.fromTo(
    ".gpt3__blog-container_groupB > *",
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gpt3__blog-container_groupB",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
}, []);

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;