/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState<boolean | null>(null);
  const [width, setWidth] = useState<boolean | null>(null);
  const onhandle = () => {
    setOpen(true);
  
  }
  
  return (
    <div className="w-screen h-screen animate__animated animate__zoomInUp animate__delay-1s ">
      {/* <div className="w-screen h-screen"> */}
      <div className="envelop w-full h-full flex items-center justify-center overflow-hidden">
        <div
          className=" cursor-pointer  drop-shadow-xl w-1/2 h-2/3 bg-white rounded-3xl relative"
          onClick={onhandle}>
          {!open && (
            <div className="w-full h-full bg-white rounded-3xl">
              <div className="w-2/3  h-[2rem] bg-gray-800 absolute z-[10] rounded-full rotate-45 top-[33%] -left-[2.5rem] -translate-x-1/5 translate-y-1/2"></div>
              <div className="w-2/3 h-[2rem] bg-gray-800 absolute z-[10] rounded-full -rotate-45 top-[35%] -right-[2.5rem] -translate-x-1/5 translate-y-1/4"></div>
            </div>
          )}

          {open &&
             <div className="w-full h-full absolute flex items-center justify-center rounded-3xl overflow-hidden">
            <div className="flex w-full h-full items-center justify-center">
              <input type="checkbox" id="c1" />
              <input type="checkbox" id="c2" />
              <input type="checkbox" id="c3" />
              <div id="" className="w-1/2 h-full">
                <Image alt="img" width={1000} height={1000} src="/1.jpg" />
              </div>
              <div className="flip-book w-1/2 h-full">
                <div className="flip" id="p1">
                  <div className="back">
                    <Image alt="img" width={1000} height={1000} src="/2.jpg" />
                    <label className="back-btn" htmlFor="c1">
                      Back
                    </label>
                  </div>
                  <div className="front flex flex-col justify-evenly">
                    <h2>Apple</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet architecto nam aliquam illum voluptatibus, eius,
                      nobis ab aspernatur, dolore praesentium nesciunt
                      laboriosam iste officiis voluptas unde maiores numquam
                      voluptatem provident.laboriosam iste officiis voluptas
                      unde maiores numquam voluptatem provident.laboriosam iste
                      officiis voluptas
                    </p>
                    <label className="next-btn" htmlFor="c1">
                      Next
                    </label>
                  </div>
                </div>
                <div className="flip" id="p2">
                  <div className="back">
                    <Image alt="img" width={1000} height={1000} src="/3.jpg" />
                    <label className="back-btn" htmlFor="c2">
                      Back
                    </label>
                  </div>
                 <div className="front flex flex-col justify-evenly">
                    <h2>Pineapple</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet architecto nam aliquam illum voluptatibus, eius,
                      nobis ab aspernatur, dolore praesentium nesciunt
                      laboriosam iste officiis voluptas unde maiores numquam
                      voluptatem provident.laboriosam iste officiis voluptas
                      unde maiores numquam voluptatem provident.laboriosam iste
                      officiis voluptas
                    </p>
                    <label className="next-btn" htmlFor="c2">
                      Next
                    </label>
                  </div>
                </div>
                <div className="flip" id="p3">
                  <div className="back">
                    <label className="back-btn" htmlFor="c3">
                      Back
                    </label>
                  </div>
                 <div className="front flex flex-col justify-evenly">
                    <h2>Strawberry</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Amet architecto nam aliquam illum voluptatibus, eius,
                      nobis ab aspernatur, dolore praesentium nesciunt
                      laboriosam iste officiis voluptas unde maiores numquam
                      voluptatem provident.laboriosam iste officiis voluptas
                      unde maiores numquam voluptatem provident.laboriosam iste
                      officiis voluptas
                    </p>
                    <label className="next-btn" htmlFor="c3">
                      Next
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default page;
