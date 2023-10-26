/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<boolean | null>(null);
  const onhandle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <motion.div
        className="w-1/2 h-2/3 bg-white absolute   z-10 rounded-3xl overflow-hidden drop-shadow shadow"
        initial={{ x: 0, y: -500, scale: 1, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 3,
          delay: 1,
        }}>
        <motion.div
          className="w-full h-full bg-gray-100 absolute z-10"
          initial={{
            rotate: "0deg",
            opacity: 1,
            // y: 0,
          }}
          animate={{
            rotateY: "180deg",
            opacity: 0,
            // y: [0, 150, -150, 150, 0],
          }}
          exit={{
            rotateY: "180deg",
            opacity: 0,
            // y: 0,
          }}
          transition={{
            duration: 1,
            delay: 4,
            ease: "easeInOut",
            // times: [0, 0.25, 0.5, 0.85, 1],
          }}>
          <div className="w-2/3  h-[2rem] bg-gray-800 absolute z-10 rounded-full rotate-45 top-[33%] -left-[2.5rem] -translate-x-1/5 translate-y-1/2"></div>

          <div className="w-2/3 h-[2rem] bg-gray-800 absolute z-10 rounded-full -rotate-45 top-[35%] -right-[2.5rem] -translate-x-1/5 translate-y-1/4"></div>
        </motion.div>
      </motion.div>
      <div className="w-full h-full flex items-center justify-center z-[1000]">
        <motion.div
          className="book w-1/2 h-2/3 bg-white flex rounded-3xl overflow-hidden drop-shadow shadow "
          initial={{
            rotateY: "-180deg",
            opacity: 0,
            // y: 0,
          }}
          animate={{
            rotateY: "0deg",
            opacity: 1,
            // y: [0, 150, -150, 150, 0],
          }}
          exit={{
            rotateY: "0deg",
            opacity: 1,
            // y: 0,
          }}
          transition={{
            duration: 1,
            delay: 4,
            ease: "easeInOut",
            // times: [0, 0.25, 0.5, 0.85, 1],
          }}>
          <input type="checkbox" id="c1" />
          <input type="checkbox" id="c2" />
          <input type="checkbox" id="c3" />
          <div id="cover " className="w-1/2 h-full">
            <Image
              src="/1.jpg"
              alt="Cover"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flip-book w-1/2 h-full ">
            <div className="flip" id="p1">
              <div className="back">
                <Image src="/2.jpg" alt="Image 2" width={200} height={200} />
                <label className="back-btn" htmlFor="c1">
                  Back
                </label>
              </div>
              <div className="front">
                <h2>Apple</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  architecto nam aliquam illum voluptatibus, eius, nobis ab
                  aspernatur, dolore praesentium nesciunt laboriosam iste
                  officiis voluptas unde maiores numquam voluptatem
                  provident.laboriosam iste officiis voluptas unde maiores
                  numquam voluptatem provident.laboriosam iste officiis voluptas
                </p>
                <label className="next-btn" htmlFor="c1">
                  Next
                </label>
              </div>
            </div>
            <div className="flip" id="p2">
              <div className="back">
                <Image src="/3.jpg" alt="Image 3" width={200} height={200} />
                <label className="back-btn" htmlFor="c2">
                  Back
                </label>
              </div>
              <div className="front">
                <h2>Pineapple</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  architecto nam aliquam illum voluptatibus, eius, nobis ab
                  aspernatur, dolore praesentium nesciunt laboriosam iste
                  officiis voluptas unde maiores numquam voluptatem
                  provident.laboriosam iste officiis voluptas unde maiores
                  numquam voluptatem provident.laboriosam iste officiis voluptas
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
              <div className="front">
                <h2>Strawberry</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  architecto nam aliquam illum voluptatibus, eius, nobis ab
                  aspernatur, dolore praesentium nesciunt laboriosam iste
                  officiis voluptas unde maiores numquam voluptatem
                  provident.laboriosam iste officiis voluptas unde maiores
                  numquam voluptatem provident.laboriosam iste officiis voluptas
                </p>
                <label className="next-btn" htmlFor="c3">
                  Next
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
