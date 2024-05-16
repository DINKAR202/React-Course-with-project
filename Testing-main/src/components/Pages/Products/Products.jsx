import React from "react";
import "./Products.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Mediflexin",
      imageUrl:
        "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5.0,
      price: 15.99,
    },
    {
      id: 1,
      name: "Mediflexin",
      imageUrl:
        "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5.0,
      price: 15.99,
    },

    {
        id: 2,
        name: "Healquick",
        imageUrl:
          "https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },

      {
        id: 3,
        name: "PainAway Gel",
        imageUrl:
          "https://images.pexels.com/photos/4040576/pexels-photo-4040576.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },

      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
      {
        id: 4,
        name: "DigestEase Tablets",
        imageUrl:
          "https://images.pexels.com/photos/3882517/pexels-photo-3882517.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 5.0,
        price: 15.99,
      },
    // Add more product objects here as needed
  ];

  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="lg:w-[80vw] text-red-500 products-section-heading">
          <h1 className="font-bold text-2xl heading-color heading-data">
            Our products{" "}
          </h1>

          <div className="mt-12 flex flex-wrap justify-center">
            {/* <div className="flex"> */}
            {products.map((product) => (
              <div
                key={product.id}
                className="w-1/5 me-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="p-8 cart-img-radius"
                    src={product.imageUrl}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    {/* Rating stars here */}
                    {/* <div> */}
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    {/* </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
