import designIcon from "../public/Assets/Images/design.png";
import backEndIcon from "../public/Assets/Images/backend.png";
import frontEndIcon from "../public/Assets/Images/frontend.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import pp1 from "../public/Assets/Images/pp1.png";
import pp2 from "../public/Assets/Images/pp2.png";
import pp3 from "../public/Assets/Images/pp3.png";
import pp4 from "../public/Assets/Images/pp4.png";
import pp5 from "../public/Assets/Images/pp5.png";
import pp6 from "../public/Assets/Images/pp6.png";
import pp7 from "../public/Assets/Images/pp7.png";

export default function AboutComponent() {
  const images = [pp1, pp2, pp3, pp4, pp5, pp6, pp7];
  const [imageIdx, setImage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let ref = imageIdx + 1;
      if (imageIdx >= images.length - 1) {
        ref = 0;
      }
      setImage(ref);
    }, 1000);
  }, [images]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="">
            <img
              className="w-2/5 inline"
              src={images[imageIdx]}
              alt="An Image"
            />
          </div>
          <div className="bg-gray-100 shadow">
            <h1 className="sm:text-3xl text-2xl py-2 font-medium title-font text-center text-gray-900 mb-20 transition-opacity">
              Hi there!
              <br className="sm:block" />
              The name's Jay,
              <br className="sm:block" />
              I'm a React Full-Stack Developer
            </h1>
          </div>
          {/* design column */}
          <div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <img className="w-1/6 inline" src={designIcon} />
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Appealing Design
                  </h2>
                  <p className="leading-relaxed text-base">
                    As a user, I know how frustrating navigating around a
                    confusing and unappealing application is. As a developer, I
                    know how to turn it into something your customers will enjoy
                    using.
                  </p>
                  <Link
                    href="/work"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <img className="w-1/6 py-3 inline" src={frontEndIcon} />
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Seamless Front-end
                  </h2>
                  <p className="leading-relaxed text-base">
                    Specialized in customized development, React, JavaScript,
                    NodeJS, HTML and CSS to help you and your business push your
                    web presence and brand further into the market.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Contact Me
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="flex-grow pl-6">
                  <img className="w-1/6 py-3 inline" src={backEndIcon} />
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Back-end Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    Need to set up a database for your web application? Trained
                    in SQL, MongoDB, Express and database design, we'll get your
                    server-side securely set up and processing data functioning
                    in a jiffy.
                  </p>
                  <Link
                    href="/work"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
