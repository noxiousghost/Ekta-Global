import React from "react";

const HeadingSection = ({ heading, image1, image2 }) => {
  return (
    <section
      className="z-10 min-h-[240px] relative flex text-center items-end py-[140px]"
      style={{
        background: "linear-gradient(0deg, transparent, #fff0e5, #fff0e5)",
        boxShadow: "0 -2px 2px 0 rgba(16, 18, 19, 0.1)",
      }}
    >
      <div className="container px-15 mx-auto">
        <h1 className="font-bold text-[42px] leading-snug">{heading}</h1>
      </div>
      <div className="-z-10 bottom-0 -left-[70px] absolute">
        <img src={image1} alt="Parallax Shape 1" />
      </div>
      <div className="-z-10 top-36 right-0 absolute">
        <img src={image2} alt="Parallax Shape 2" />
      </div>
    </section>
  );
};

export default HeadingSection;
