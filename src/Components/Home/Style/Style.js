import React from "react";
import daynight from "../../../images/daynight.gif";
import praying from "../../../images/praying.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Style() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <div className="my-24 ">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-6 pl-14">
          <h3 className="pl-6 pb-4 text-left text-3xl font-semibold text-gray-700 font-sans">
            Learn More About Islam
          </h3>
          <p className=" pl-6 font-sans text-lg pr-12 mr-12 subpixel-antialiased text-justify text-gray-500">
            «اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا
            ذَا الْجَلاَلِ وَالْإِكْرَامِ».
            <br /> <br />
            (আল্লা-হুম্মা আনতাস্ সালা-মু ওয়া মিনকাস্ সালা-মু তাবা-রক্তা ইয়া
            যালজালা-লি ওয়াল-ইকরা-ম)।
            <br />
            “হে আল্লাহ! আপনি শান্তিময়। আপনার নিকট থেকেই শান্তি বর্ষিত হয়। আপনি
            বরকতময়, হে মহিমাময় ও সম্মানের অধিকারী!”
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="col-md-6 pl-14 pt-16 "
        >
          <img className="max-w-sm " src={praying} alt="" />
        </div>
      </div>

      <div className="row">
        <div data-aos="fade-right" className="col-md-6 pl-12">
          <img className="max-w-md " src={daynight} alt="" />
        </div>
        <div className="col-md-6 mt-24">
        <h3 className="pl-6 pb-4 text-left text-3xl font-semibold text-gray-700 font-sans">
            Learn More About Islam
          </h3>
          <p className=" pl-6 font-sans text-lg pr-12 mr-12 subpixel-antialiased text-justify text-gray-500">
            وَ ہُوَ الَّذِیۡ مَدَّ الۡاَرۡضَ وَ جَعَلَ فِیۡہَا رَوَاسِیَ وَ
            اَنۡہٰرًا ؕ وَ مِنۡ کُلِّ الثَّمَرٰتِ جَعَلَ فِیۡہَا زَوۡجَیۡنِ
            اثۡنَیۡنِ یُغۡشِی الَّیۡلَ النَّہَارَ ؕ اِنَّ فِیۡ ذٰلِکَ لَاٰیٰتٍ
            لِّقَوۡمٍ یَّتَفَکَّرُوۡنَ ﴿۳﴾ <br /> <br /> 
            "আর তিনিই
            যমীনকে বিস্তৃত করেছেন এবং তাতে সুদৃঢ় পর্বতমালা ও নদ-নদী স্থাপন
            করেছেন। আর প্রত্যেক প্রকারের ফল তিনি জোড়া জোড়া করে সৃষ্টি করেছেন।
            তিনি রাত দ্বারা দিনকে ঢেকে দেন। নিশ্চয় যে কওম চিন্তাভাবনা করে তাদের
            জন্য এতে নিদর্শনাবলী রয়েছে"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Style;
