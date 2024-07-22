import React from "react";
import HeadingSection from "../Components/HeadingSection";
import Sponsor from "../Components/Sponsor";

function AboutUs() {
  return (
    <section className="pt-10 pb-32">
      <div className="container mx-auto px-4 max-w-full">
        <div className="-m-4 flex flex-wrap items-center justify-between">
          <div className="p-4 max-w-full lg:w-[44%]">
            <div
              className="z-10 relative h-full bg-auto pr-14 pb-11 bg-no-repeat bg-right-bottom"
              style={{ backgroundImage: "url(/Images/shapes/dot_shape_8.png)" }}
            >
              <img
                className="h-auto max-w-full border-2 overflow-hidden"
                src="/Images/hero2.jpg"
              />
            </div>
          </div>
          <div className="p-4 w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
            <div className="pr-28 ">
              <h2 className="leading-normal text-5xl font-bold mb-4">
                We want to create a world where anyone can build something
                meaningful
              </h2>
              <p className="mb-8 mt-0 text-[#707070]">
                Give your team the knowledge, experience, and confidence they
                need to tackle any problem.We want to create a world where
                anyone can build something meaningful{" "}
              </p>
              <button className="rounded px-7 py-4 text-white bg-violet-500 hover:bg-violet-600 hover:shadow-xl hover:shadow-black transition-colors">
                Go for Educational Learning!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <main>
      <HeadingSection
        heading="About Us"
        image1="/Images/shapes/line_shape_1.png"
        image2="/Images/shapes/dot_shape_2.png"
      />
      <AboutUs />
      <div className="py-28 bg-gray-200">
        <Sponsor />
        <Sponsor />
      </div>
    </main>
  );
}

export default About;
