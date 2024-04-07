"use client";
import React, { useState, useRef, useEffect } from "react";
import  { LayoutGrid } from "../components/ui/layout-grid";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
      <Footer></Footer>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Info about you</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit debitis quis totam. Maxime culpa at a architecto obcaecati consectetur nobis nesciunt excepturi odio hic ad necessitatibus, id accusamus recusandae dolorem.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      
      <Link href="/art"><p className="font-bold text-4xl text-white">Art / Oil / something here?</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Something about your art? You'll have to tell me what to write here - if anything
      </p></Link>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Ceramics</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Same as before - currently unsure on the content here? 
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Another section</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Unsure about this section - could be another subsection of your work? Alternatively, we use two boxes, one for paintings and one for ceramics, then use the fourth as a 'contact'? 
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
    "/DavidStyles.png"  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "/bluedavid.png"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "/ceramic.png"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/bluedavid.png",
  },
];
