import React from "react";
import heroImg from "../../public/Images/hero2.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  return (
    <main className="page_content">
      <div className="bg-gradient-to-b from-transparent via-[rgba(141,239,255,0.5)] to-[rgba(255,175,251,0.7)] py-16 md:py-20 lg:py-24">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
            {/* Image on top for mobile, right for desktop */}
            <div className="md:flex-1 p-4 order-1 md:order-2">
              <div className="banner_image flex justify-center md:justify-end">
                <img
                  className="shrink-0 animate-radius-animation h-auto w-full max-w-lg md:max-w-xl align-middle select-none"
                  src={heroImg}
                  style={{ boxShadow: "0 30px 50px 0 rgba(16, 18, 19, 0.2)" }}
                />
              </div>
            </div>

            {/* Text Content below image for mobile, left for desktop */}
            <div className="md:flex-1 p-4 order-2 md:order-1">
              <div className="banner_content">
                <h1 className="font-dmSans font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
                  <span className="text-violet-600">Study in</span> South Korea
                  From Nepal in a Professional way!
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-700 leading-relaxed my-4 md:my-8">
                  Changing lives, businesses, and nations through talent
                  transformation in digital technologies.
                </p>
                <div className="flex items-center">
                  <button className="rounded px-6 py-2 text-white bg-violet-500 hover:bg-violet-600 transition-colors">
                    Go for Educational Learning!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
