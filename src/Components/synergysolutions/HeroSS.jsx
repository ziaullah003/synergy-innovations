import React, { useState, useEffect } from "react";



export default function HeroSS() {
    return (
    <div class="relative p-14 flex w-full flex-col items-center bg-blue-100 ">
  <h1
    className=" w-full  text-blue-900 bg-clip-text text-center text-3xl font-bold sm:max-w-7xl sm:text-5xl">
    We provide cutting-edge Software Solutions tailored to your business needs.
  </h1>
  <span class="mt-8 max-w-4xl text-center text-xl leading-relaxed text-blue-950 font-semibold">
   we are dedicated to elevating your operations to new heights. Experience the power of synergy with us, and unlock the possibilities for your business like never before.
  </span>
  <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
    <a href="https://example.com/new-feature"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-blue-900">

      Start Discussion
    </a>
    <a href="#demo"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-blue-900 px-10 py-3 text-black">View
      Projects →
    </a>
  </div>
</div>
  );
}
