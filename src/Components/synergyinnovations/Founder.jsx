import React, { useState } from "react";
import "./assets/Css/founder.css"; // Import custom styles

const Founder = () => {
  return (
    <><div className="flex justify-center pl-20 items-center founder ">
      <div className=" relative max-w-7xl bg-white pb-[110px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full  lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 text-4xl font-bold  text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Meet Our Founder's
                </h1>
                <p className="mb-8 max-w-[480px] text-justify text-body-color dark:text-dark-6">
                 At the heart of Synergy Innovations Group are two visionary minds, Zia Ullah and Salman Elahi. United by a passion for technology, entrepreneurship, and community development, 
                 they co-founded Synergy to build a platform where innovation meets impact. 
                 With a shared dream of empowering youth and bridging gaps in tech education, 
                 they have led the creation of flagship ventures including Synergy Solutions, Synergy Club, and Synergy Mall. 
                 Their leadership reflects a perfect blend of technical expertise, strategic thinking, and a deep commitment to creating opportunities for the next generation. Together, 
                 they are shaping the future—one idea at a time.


                </p>
            
                <div className="clients pt-8">
                  <h1 className="mb-3 flex items-center  font-bold text-body-color dark:text-dark-6">
                    Founders
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h1>
                  <div className="flex">
                  <h1 className="mb-6 flex items-center  font-semibold text-body-color dark:text-dark-6">
                    Salman Elahi & Zia Ullah
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h1>
    </div>
    
                </div>
              </div>
            </div>
            <div className="hidden px-10 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="/founder5.jpeg"
                    alt="hero"
                    className="h-130 w-xl rounded-2xl"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Founder;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};
