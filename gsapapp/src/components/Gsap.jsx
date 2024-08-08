import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import orange2 from "../Assets/orange2.png";
import fanta from "../Assets/fanta.png";
import orange from "../Assets/orange.webp";
import leaf from "../Assets/leaf.webp";
import leaf2 from "../Assets/leaf2.png";
import coconoutleaf from "../Assets/coconoutleaf.png";
import lemon from "../Assets/lemon.webp";
import cocacola from "../Assets/cocacola.png";
import pepsi from "../Assets/pepsi.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(
      "#fanta",
      {
        top: "120%",
        left: "0%",
      },
      "orange"
    );
    tl.to(
      "#orange-cut",
      {
        top: "160%",
        left: "23%",
      },
      "orange"
    );
    tl.to(
      "#orange",
      {
        width: "15%",
        top: "160%",
        right: "10%",
      },
      "orange"
    );
    tl.to(
      "#leaf",
      {
        top: "110%",
        rotate: "130deg",
        left: "70%",
      },
      "orange"
    );
    tl.to(
      "#leaf2",
      {
        top: "110%",
        rotate: "130deg",
        left: "0%",
      },
      "orange"
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
      },
    });

    tl2.from(
      ".lemon1",
      {
        rotate: "-90deg",
        left: "-100%",
        top: "110%",
      },
      "ca"
    );
    tl2.from(
      "#cocacola",
      {
        // rotate: "-90deg",
        top: "110%",
        left: "-100%",
      },
      "ca"
    );

    tl2.from(
      ".lemon2",
      {
        rotate: "90deg",
        left: "100%",
        top: "110%",
      },
      "ca"
    );
    tl2.from(
      "#pepsi",
      {
        // rotate: "90deg",
        top: "110%",
        left: "100%",
      },
      "ca"
    );

    tl2.to(
      "#orange-cut",
      {
        width: "18%",
        left: "42%",
        top: "204%",
      },
      "ca"
    );
    tl2.to(
      "#fanta",
      {
        width: "35%",
        top: "210%",
        left: "33%",
      },
      "ca"
    );
  });

  return (
    <>
      <div id="main">
        <nav>
          <a href="#">Logo</a>
          <div className="cntr-nav">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>
          <i className="ri-menu-fill" />
        </nav>
        <div className="one">
          <h1>FANTA</h1>
          <img id="orange-cut" src={orange2} alt />
          <img id="fanta" src={fanta} alt />
          <img id="orange" src={orange} alt />
          <img id="leaf" src={leaf} alt />
          <img id="leaf2" src={leaf2} alt />
          <img id="leaf3" src={coconoutleaf} alt />
        </div>
        <div className="two">
          <div className="lft-two">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#e04428"
                d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="rght-two">
            <h1>Flavour Updated</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              excepturi sed, itaque placeat id natus soluta veniam obcaecati qui
              a laborum laboriosam dolorem illum labore sit, voluptates commodi
              neque dolores tempore temporibus deleniti? Nobis, ratione hic
              error quis cum neque nulla laudantium nostrum sit nihil dolorum
              quisquam enim quaerat, eaque ex sequi, harum totam quia non!
              Labore, neque! Amet voluptatem illo similique recusandae! Ex
              quaerat quibusdam asperiores, ducimus tempore magni labore.
              Tenetur voluptas, quos ex repellendus provident mollitia
              laboriosam adipisci alias a impedit, cum accusamus rerum delectus
              eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni
              aspernatur quod distinctio.
            </p>
          </div>
        </div>
        <div className="three">
          <div className="card">
            <img className="lemon lemon1" src={lemon} alt />
            <img id="cocacola" src={cocacola} alt />
            <h1>CocaCola</h1>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <h1>Fanta</h1>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img className="lemon lemon2" src={lemon} alt />
            <img id="pepsi" src={pepsi} alt />
            <h1>Pepsi</h1>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
