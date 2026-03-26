import React from "react";
import googlePlayStoreIcon from "../../assets/google-play-store-icon.png";
import appleStoreIcon from "../../assets/apple-store-icon.png";
import { Link } from "react-router";
import bannerImage from "../../assets/hero.png";

const Banner = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-7 lg:pt-20">
        {/* Content */}
        <div className="text-center mx-4 lg:mx-0">
          {/* Title */}
          <h2 className="text-4xl lg:text-7xl font-bold">
            We Build
            <br />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h2>
          {/* Description */}
          <p className="text-sm lg:text-xl text-[#627382] md:w-9/12 mx-auto mt-4 mb-5 md:mb-10">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Button */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* GooglePlayStore */}
            <Link
              to="https://play.google.com/store/apps"
              target="_blank"
              className="text-[#001931] text-xl font-semibold px-4 py-3 border border-[#D2D2D2] rounded-sm inline-flex gap-2.5 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <img src={googlePlayStoreIcon} alt="Google Play Store Icon" />{" "}
              Google Play
            </Link>
            {/* AppleStore */}
            <Link
              to="https://apps.apple.com/us/mac/develop"
              target="_blank"
              className="text-[#001931] text-xl font-semibold px-4 py-3 border border-[#D2D2D2] rounded-sm inline-flex gap-2.5 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <img src={appleStoreIcon} alt="Google Play Store Icon" /> App
              Store
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-5 md:mt-10">
          <img
            src={bannerImage}
            alt="Banner Image"
            className="w-[90%] md:w-[70%] mx-auto"
          />
        </div>
      </div>

      {/* Features */}
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] p-10 md:p-20 space-y-5 md:space-y-10">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-center text-base-100 sm:w-10/12 md:w-9/12 mx-auto">
          Trusted by Millions, Built for You
        </h2>

        {/* FeatureCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FeatureCard */}
          <div className="text-base-100 text-center">
            <span className="text-xs md:text-base">Total Downloads</span>
            <p className="text-2xl lg:text-[64px] font-black py-2 md:py-4">
              29.6M
            </p>
            <span className="text-xs md:text-base">
              21% more than last month
            </span>
          </div>

          {/* FeatureCard */}
          <div className="text-base-100 text-center">
            <span className="text-xs md:text-base">Total Reviews</span>
            <p className="text-3xl lg:text-[64px] font-black py-4">906K</p>
            <span className="text-xs md:text-base">
              46% more than last month
            </span>
          </div>

          {/* FeatureCard */}
          <div className="text-base-100 text-center">
            <span className="text-xs md:text-base">Active Apps</span>
            <p className="text-3xl lg:text-[64px] font-black py-4">132+</p>
            <span className="text-xs md:text-base">31 more will Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
