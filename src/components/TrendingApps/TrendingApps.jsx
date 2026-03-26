import React from "react";
import SingleAppCard from "../SingleAppCard/SingleAppCard";
import { Link } from "react-router";

const TrendingApps = ({ appsData }) => {
  return (
    <section className="py-10 lg:py-20 mx-4 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h2 className="text-[#001931] text-3xl md:text-5xl font-bold pb-4">
            Trending Apps
          </h2>

          {/* Description */}
          <p className="text-[#627382] md:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* AppsContainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 lg:py-10">
          {appsData.map((app) => (
            <SingleAppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            to="/apps"
            className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm text-base-100 font-semibold cursor-pointer hover:opacity-90 transition-all duration-300"
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
