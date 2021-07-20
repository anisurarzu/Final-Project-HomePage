import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import namaz from "../../../../images/namaz.gif";
import prayertime from "../../../../images/prayertime.gif";
import prize from "../../../../images/prize.gif";
import { useEffect } from "react";

// import "./History.css";

function History() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <section class="sm:bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="sm:w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Title
        </h1>
        <div class="sm:w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div data-aos="fade-up" class="mt-12 sm:w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            {/* <p className='border-b-2 mt-8 text-center font-semibold text-green-500'>সালাতের সহীহ্ পদ্ধতি</p> */}

            <div class="w-full font-bold text-xl text-gray-800 px-6">
              <img className="mx-8 sm  mb-8" src={namaz} alt="" />
            </div>
            <p class="font-mono text-gray-800 text-base px-6  px-8  ">
              রাসূল(সঃ) থেকে সহীহ্ হাদিস দ্বারা সাব্যস্থ পদ্ধতিতে সালাত আদায়
              সম্পর্কে জানতে নিচের বাটনটিতে ক্লিক করুন
            </p>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-start">
              <button class="bg-gradient-to-r from-green-400 to-blue-500 ... mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" class="mb-14 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              <img className="h-48 pl-16" src={prayertime} alt="" />
            </div>
            <p class="font-mono text-gray-800 text-base px-6 mb-5 mt-2">
              সহীহ্ হাদিস অনুসারে সালাতের সময় সূচি কিভাবে নির্ণায়ন করবেন সেই
              বিষয়ে জানতে নিচের বাটনটিতে ক্লিক করুন
            </p>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-center">
              <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 ...">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"  class="mt-12 sm:w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              <img className="h-48 pl-16 " src={prize} alt="" />
            </div>
            <p class="text-mono text-gray-800 text-base mt-2 px-6 mb-5">
              ইসলাম সম্পর্কে আপনার প্রাথমিক জ্ঞানের পরিধি যাচাই করুন এবং জিতে
              নিন আকর্ষণীয় পুরষ্কার। অংশগ্রহণ করতে নিচের বাটনটিতে ক্লিক করুন
            </p>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-end">
              <button class=" bg-gradient-to-r from-green-400 to-blue-500 ... mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
