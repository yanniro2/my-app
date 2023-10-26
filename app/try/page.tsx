import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import "../globals.css"; // Make sure to import your CSS file

const FlipBookComponent = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="book w-1/2 h-1/2 bg-white flex">
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
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
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
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
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
                aspernatur, dolore praesentium nesciunt laboriosam iste officiis
                voluptas unde maiores numquam voluptatem provident.laboriosam
                iste officiis voluptas unde maiores numquam voluptatem
                provident.laboriosam iste officiis voluptas
              </p>
              <label className="next-btn" htmlFor="c3">
                Next
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBookComponent;
