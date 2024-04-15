"use client";
import React, { useState, useRef, useEffect } from "react";
import  { LayoutGrid } from "../components/ui/layout-grid";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LayoutGridDemo() {
  return (
    <div className="h-dvh py-10 w-full">
      <LayoutGrid cards={cards} />
      <Footer></Footer>
    </div>
  );
}

const SkeletonOne = () => {
  return (
   <Link href="/about">
   <div>
      <p className="font-bold text-4xl text-white">Info about you</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 md:text-2xl">
      short description - CLICK TO READ MORE
      </p>
    </div>
    </Link>
  );
};

const SkeletonTwo = () => {
  return (
    <Link href="/art">
    <div>  
      <p className="font-bold text-4xl text-white">Paintings</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 md:text-2xl">
        Short description - CLICK TO VIEW
      </p>
    </div></Link>
  );
};
const SkeletonThree = () => {
  return (
    <Link href="/art"><div>
      <p className="font-bold text-4xl text-white">Ceramics</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 md:text-2xl">
        Short description - CLICK TO VIEW
      </p>
    </div>
    </Link>
  );
};
const SkeletonFour = () => {
  return  (
    <Link href="/art"><div>
      <p className="font-bold text-4xl text-white">Prints</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 md:text-2xl">
        Short description - CLICK TO VIEW 
      </p>
    </div>
    </Link>
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
