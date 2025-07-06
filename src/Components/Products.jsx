import React, { useState } from "react";

const Products = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="relative z-20 max-w-5xl overflow-hidden bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <h2 className="mb-2 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Our Future Plannings
                </h2>
                <p className="text-body-color dark:text-dark-6">
                  At Synergy Innovations Group, our future is focused on growth and impact. With Synergy Club, Solutions, and Mall as our foundation, we’re now building Synergy Tech Academy to empower youth with digital skills for tomorrow.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="What is Synergy Tech Academy?"
                text="Synergy Tech Academy is our upcoming initiative focused on skill-based learning, aimed at equipping youth with modern digital and technical expertise through expert-led programs and real-world projects."
              />
              <AccordionItem
                header="What’s next for Synergy Club?"
                text="We aim to expand Synergy Club into more universities, offering students hands-on opportunities in tech events, leadership, and collaborative innovation hubs."
              />
              <AccordionItem
                header="Will Synergy Mall add new categories?"
                text="Yes, we’re planning to expand Synergy Mall with new product categories, including local tech gadgets, fashion accessories, and eco-friendly lifestyle items."
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="How will Synergy Solutions grow?"
                text="We’re planning to scale our software services globally by enhancing our development teams, expanding client support, and launching new SaaS-based tools."
              />
              <AccordionItem
                header="Are internships part of the plan?"
                text="Absolutely! Synergy Tech Academy will offer internship programs and real-world project experience to help students transition into the professional world."
              />
              <AccordionItem
                header="What’s the long-term vision?"
                text="Our long-term goal is to build a sustainable ecosystem of innovation that connects community, commerce, and technology under the Synergy brand."
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.36" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Products;

// Reusable Accordion Item
const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);
  const handleToggle = () => setActive(!active);

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button className="faq-btn flex w-full text-left" onClick={handleToggle}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.3 8.4C7.6 8.7 8 8.9 8.4 8.9C8.8 8.9 9.2 8.7 9.5 8.4L15.8 2.7C16.1 2.4 16.2 1.8 15.8 1.4C15.5 1.1 14.9 1 14.5 1.4L8.4 7L2.3 1.4C1.9 1.1 1.4 1.1 1 1.4C0.7 1.8 0.7 2.3 1.1 2.7L7.3 8.4Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
