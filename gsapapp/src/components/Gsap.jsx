import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Gsap = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      duration: 2,
      delay: 1,
    });
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
          <img id="orange-cut" src="Assets/orange2.png" alt />
          <img id="fanta" src="Assets/fanta.png" alt />
          <img id="orange" src="Assets/orange.webp" alt />
          <img id="leaf" src="Assets/leaf.webp" alt />
          <img id="leaf2" src="Assets/leaf2.png" alt />
          <img id="leaf3" src="Assets/coconoutleaf.png" alt />
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
            <img className="lemon lemon1" src="Assets/lemon.webp" alt />
            <img id="cocacola" src="Assets/cocacola.png" alt />
            <h1>CocaCola</h1>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <h1>Fanta</h1>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img className="lemon lemon2" src="Assets/lemon.webp" alt />
            <img id="pepsi" src="Assets/pepsi.png" alt />
            <h1>Pepsi</h1>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
