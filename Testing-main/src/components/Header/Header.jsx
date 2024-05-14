import React from "react";
import "./Header.css";
import Step1 from "../../../src/components/assests/img/step-1.png";
import Step2 from "../../../src/components/assests/img/step-2.png";
import Step3 from "../../../src/components/assests/img/step-3.gif";
import Step4 from "../../../src/components/assests/img/step-4.png";
import Step5 from "../../../src/components/assests/img/step-5.png";


const Header = () => {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full -mt-12"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg slider-img">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="absolute block h-5/6 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>

{/* our delivery process */}
        
        <div className="absolute w-full -bottom-10 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold text-4xl text-center mb-6 heading-color">
              Our Methodology: From Procurement to Delivery
            </h2>
            {/* <div > */}
            <p className="w-4/6 font-bold text-center">
              We commence with premium materials and guarantee superior
              medication distribution. Our procedure assures perfection at each
              stage, committed to your health and welfare.
            </p>
            {/* </div> */}
            <div className="flex items-center justify-center mt-4 gap-6">
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img src={Step1} alt="" />
                </div>
                <h2 className="font-bold mt-3 text-white">STEP-1</h2>
                <div>
                  <p className="text-2xl font-bold text-white">Base Ingredients</p>
                </div>
              </div>
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img  width={60} height={60} src={Step2} alt="" />
                </div>
                <h2 className="font-bold mt-3 text-white">STEP-2</h2>
                <div>
                  <p className="text-2xl font-bold text-white">Development of Formulation</p>
                </div>
              </div>
              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img width={70} height={70} src={Step3} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-3</h2>
                <div>
                  <p className="text-2xl font-bold text-white">Production processes</p>
                </div>
              </div>

              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img width={70} height={70} src={Step4} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-4</h2>
                <div>
                  <p className="text-2xl font-bold text-white">Ensure consistency.</p>
                </div>
              </div>

              <div className="bg-slate-400 background-bg-related-logo p-6 border rounded-lg flex items-center justify-center flex-col">
                {/* icons */}
                <div>
                  <img src={Step5} alt="" />
                </div>
                <h2 className="font-bold text-white">STEP-5</h2>
                <div>
                  <p className="text-2xl font-bold text-white">Distribution & Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
