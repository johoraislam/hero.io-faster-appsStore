import React from "react";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
// import appImage from "../../assets/demo-app (1).webp";

const InstalledAppCard = ({ installedApp, handleUninstall }) => {
  //   console.log(installedApp);

  const { image, title, size, ratingAvg, downloads } = installedApp;
  return (
    <section className="bg-base-100 p-4 rounded-sm py-8 md:py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0">
        {/* AppInfo */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          {/* Image */}
          <div>
            <img src={image} alt="App Image" className="w-20 h-20 rounded-" />
          </div>

          {/* Details */}
          <div className="lg:space-y-4">
            <h4 className="text-[#001931] text-xl font-medium">{title}</h4>
            <div className="flex items-center gap-4 mt-2 lg:m-0">
              <span className="flex items-center gap-1 text-[#00D390]">
                <LuDownload />{" "}
                {Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(downloads)}
              </span>
              <span className="flex items-center gap-1 text-[#FF8811]">
                <FaStar /> {ratingAvg}
              </span>
              <span className="text-[#627382]">{size} MB</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="">
          <button
            onClick={() => handleUninstall(installedApp.id)}
            className="bg-[#00D39099] hover:bg-[#00D390] text-base-100 text-lg lg:text-xl font-semibold px-8 py-4 rounded-sm cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            Uninstall
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstalledAppCard;
