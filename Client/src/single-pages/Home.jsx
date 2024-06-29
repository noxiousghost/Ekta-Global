import React from "react";
import heroImg from "../../public/Images/hero.jpeg";
import { Link } from "react-router-dom";
import { Button } from "antd";
const keyframes = `
  @keyframes radiusAnimation {
    0% { border-radius: 0%; }
    50% { border-radius: 50%; }
    100% { border-radius: 0%; }
  }
`;
const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)]">
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(0deg, transparent 5%, rgba(141, 239, 255, 0.5), rgba(255, 175, 251, 0.7))",
        }}
      >
        <div className="container p-20 mx-auto flex flex-row flex-wrap my-auto lg:justify-between align-middle h-full">
          <div className="my-auto p-15 mx-auto lg:mx-0 lg:order-6 lg:w-1/2 w-10/12">
            <img
              className=" animate-radius-animation h-auto max-w-full align-middle select-none"
              src={heroImg}
              style={{
                boxShadow: "0 30px 50px 0 rgba(16, 18, 19, 0.2)",
              }}
            />
          </div>
          <div className="my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/5">
            <h1 className="font-dmSans font-bold text-7xl mb-4 text-black leading-tight">
              <span className="text-violet-600">Study in</span> South Korea
            </h1>
            <p className="text-2xl text-gray-900 leading-relaxed mb-8">
              Changing lives, businesses, and nations through talent
              transformation in digital technologies.
            </p>
            <div className="flex items-center">
              <button className="rounded px-10 py-3 text-white bg-violet-500 hover:bg-violet-600">
                Go for Educational Learning!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return <Hero />;
};

export default Home;
