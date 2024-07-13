import React from "react";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

function Policy() {
  return (
    <section className="pt-32 pb-0">
      <div className="container px-4 w-full max-w-[1320px] mx-auto">
        <div className="-m-4 flex flex-wrap items-center justify-center">
          <div className="p-4 w-full lg:w-1/3">
            <div className="mb-0">
              <h2 className="text-4xl font-bold mb-0">
                Why we are better <span className="block">from others!</span>
              </h2>
            </div>
          </div>
          <div className="p-4 w-full lg:w-1/3 md:w-1/2 sm:w-1/2">
            <div
              data-cursor-size="64px"
              data-cursor-magnetic
              data-cursor-exclusion
              style={{ backgroundColor: "#fff" }}
              className="z-10 flex leading-none items-center py-7 px-8 relative rounded-lg transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-[#f0f3ff] hover:shadow-[0_30px_40px_0_rgba(16,18,19,0.1)]"
            >
              <div className="item_icon w-[70px] h-[70px] flex-none mr-8 inline-flex items-center justify-center">
                <img
                  src="/icons/icon_online_education_2.png"
                  alt="Icon Online Education"
                />
              </div>
              <div className="item_content">
                <h3 className="font-semibold leading-none text-[22px] mb-[10px]">
                  Career Counselling
                </h3>
                <p className="text-[16px] text-[#101213] mb-0">
                  Everything you need to land a job
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2">
            <div
              className="leading-none flex items-center p-7 px-8 relative rounded-lg transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-[#f0f3ff] hover:shadow-[0_30px_40px_0_rgba(16,18,19,0.1)] z-10"
              data-cursor-size="64px"
              data-cursor-magnetic
              data-cursor-exclusion
              style={{ backgroundColor: "#fff" }}
            >
              <div className="item_icon w-[70px] h-[70px] flex-none mr-8 inline-flex items-center justify-center">
                <img src="/icons/icon_globe.png" alt="Icon Globe" />
              </div>
              <div className="item_content">
                <h3 className="font-semibold leading-none text-[22px] mb-[10px]">
                  Application Process
                </h3>
                <p className="text-[16px] text-[#101213] mb-0">
                  See how varied skills you have
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2">
            <div
              className="leading-none flex items-center p-7 px-8 relative rounded-lg transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-[#f0f3ff] hover:shadow-[0_30px_40px_0_rgba(16,18,19,0.1)] z-10"
              data-cursor-size="64px"
              data-cursor-magnetic
              data-cursor-exclusion
              style={{ backgroundColor: "#fff" }}
            >
              <div className="item_icon w-[70px] h-[70px] flex-none mr-8 inline-flex items-center justify-center">
                <img
                  src="/icons/icon_online_education_1.png"
                  alt="Icon Online Education"
                />
              </div>
              <div className="item_content">
                <h3 className="font-semibold leading-none text-[22px] mb-[10px]">
                  Visa Application
                </h3>
                <p className="text-[16px] text-[#101213] mb-0">
                  Focus on what you need
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2">
            <div
              className="leading-none flex items-center p-7 px-8 relative rounded-lg transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-[#f0f3ff] hover:shadow-[0_30px_40px_0_rgba(16,18,19,0.1)] z-10"
              data-cursor-size="64px"
              data-cursor-magnetic
              data-cursor-exclusion
              style={{ backgroundColor: "#fff" }}
            >
              <div className="item_icon w-[70px] h-[70px] flex-none mr-8 inline-flex items-center justify-center">
                <img
                  src="/icons/icon_online_education_1.png"
                  alt="Icon Online Education"
                />
              </div>
              <div className="item_content">
                <h3 className="font-semibold leading-none text-[22px] mb-[10px]">
                  Student Accommodation
                </h3>
                <p className="text-[16px] text-[#101213] mb-0">
                  Discuss and get clear knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Policy;
