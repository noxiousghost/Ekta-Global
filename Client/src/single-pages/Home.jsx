import React from "react";
import heroImg from "../../public/Images/hero2.jpg";
import { Link } from "react-router-dom";
import Sponsor from "../Components/Sponsor";

const Hero = () => {
  return (
    <section
      className="pb-24 pt-12 md:pb-60 md:pt-28 lg:pb-80"
      style={{
        background:
          "linear-gradient(0deg, transparent 5%, rgba(141, 239, 255, 0.5), rgba(255, 175, 251, 0.7))",
      }}
    >
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
          <div className="md:flex-1 p-4 order-1 md:order-2">
            <div className="banner_image flex justify-center md:justify-end">
              <img
                className="shrink-0 animate-radius-animation h-auto w-full max-w-lg md:max-w-xl align-middle select-none"
                src={heroImg}
                style={{ boxShadow: "0 30px 50px 0 rgba(16, 18, 19, 0.2)" }}
              />
            </div>
          </div>
          <div className="md:flex-1 p-4 order-2 md:order-1">
            <div className="banner_content">
              <h1
                className="font-dmSans font-bold text-4xl md:text-5xl lg:text-6xl text-black"
                style={{ lineHeight: "1.25" }}
              >
                <span className="text-violet-600">Study in</span> South Korea
                From Nepal in a Professional way!
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-700 leading-relaxed my-4 md:my-8">
                Changing lives, businesses, and nations through talent
                transformation in digital technologies.
              </p>
              <div className="flex items-center">
                <button className="rounded px-7 py-4 text-white bg-violet-500 hover:bg-violet-600 hover:shadow-xl hover:shadow-black transition-colors">
                  Go for Educational Learning!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="page_content">
      <Hero />
      <Sponsor />
      <section className="pt-32"></section>
    </main>
  );
};

export default Home;
