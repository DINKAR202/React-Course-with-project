import React from "react";
import "./Know.css";
import Lowerpic from "../../../../src/components/assests/img/about-img-lower.jpg";
import Upperpic from "../../../../src/components/assests/img/about-img-upper.jpg";
import { FcBrokenLink } from "react-icons/fc";

const Know = () => {
  return (
    <>
<div>
<section className="z-[-2] w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="w-100 top-margin-here flex justify-center items-center">
          <div className="absolute lg:w-[80vw] know-heading">
            <div className="lg:w-[80vw] flex flex-col margin-top-to-bottom p-6">
              <h2 className="text-4xl font-bold text-start heading-data">
                Who we are
              </h2>
              <h3>update</h3>

              <div className="bg-white rounded-xl mt-20 p-6 shadow-md">
                <div className="flex flex-row gap-4">
                  <div className="relative  w-6/12">
                    <div>
                      <img
                        className="rounded top-16"
                        src={Lowerpic}
                        alt="lower about img"
                      />
                    </div>

                    <div className="absolute -left-20 -top-16">
                      <img
                        width={400}
                        height={400}
                        className="rounded"
                        src={Upperpic}
                        alt="lower about img"
                      />
                    </div>
                  </div>

                  <div className="w-7/12 p-10">
                    <div className="w-full">
                      <h2 className="text-2xl font-bold text-start heading-data-about mb-5">
                        About <b className="heading-color">LYOTEX</b>
                      </h2>
                      <p>
                        {" "}
                        {"\u00A0"} {"\u00A0"} {"\u00A0"} Lyotex stands as a
                        prominent Indian pharmaceutical and research enterprise,
                        boasting revenues surpassing USD 450mn. Our repertoire
                        comprises finalized formulations, active pharmaceutical
                        ingredients (APIs), biotherapeutics, and peptides, all
                        meticulously crafted and distributed worldwide under our
                        banner.
                      </p>
                      <p>
                        {" "}
                        {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}{" "}
                        {"\u00A0"} Our cutting-edge research and development
                        facility, along with our GMP manufacturing sites
                        approved by the US FDA, empower us to offer
                        comprehensive Peptide Manufacturing solutions spanning
                        from initial research stages to large-scale commercial
                        production. Leveraging our extensive expertise amassed
                        over more than ten years in peptide synthesis, we stand
                        as the top choice supplier for prominent pharmaceutical
                        firms engaged in drug discovery and the development of
                        generic peptide formulations across the globe.
                      </p>

                      <ul className="mt-6">
                        <li className="flex flex-row items-center gap-1">
                          <FcBrokenLink /> Boasts USD 450mn revenue, offers
                          global pharmaceutical products.
                        </li>
                        <li className="flex flex-row items-center gap-1">
                          <FcBrokenLink /> FDA-approved GMP sites, comprehensive
                          peptide manufacturing solutions.
                        </li>
                        <li className="flex flex-row items-center gap-1">
                          <FcBrokenLink /> Top supplier for drug discovery and
                          generic peptide formulations.
                        </li>
                        <li className="flex flex-row items-center gap-1">
                          <FcBrokenLink /> Trusted by leading firms, expanding
                          international reach, prestigious reputation.
                        </li>
                      </ul>

                      <div className="mt-5">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                            Get to know
                          </button>

                          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">read more</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
    </>
  );
};

export default Know;
