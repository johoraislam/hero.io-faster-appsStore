import React from "react";
// import appImage from "../../assets/demo-app (1).webp";
import iconDownload from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import RatingChart from "../../components/RatingChart/RatingChart";
import { useLoaderData, useOutletContext, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const appId = parseInt(id);

  const appData = useLoaderData();
  //   console.log(appData);

  // FindApp
  const findApp = appData.find((app) => app.id === appId);
  //   console.log(findApp);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = findApp;

  //   console.log(id, appData);

  // ReactRouterOutletContext
  const { handleInstall, installedApps } = useOutletContext();

  const isInstalled = installedApps.some((app) => app.id === findApp.id);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-0">
      <div className="text-[#001931] py-10 lg:py-20">
        {/* AppDetails */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 border-b border-[#00193125] pb-10">
          {/* AppImage */}
          <div className="w-full max-w-87.5 mx-auto lg:mx-0">
            <img
              src={image}
              alt="App Image"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </div>

          {/* AppInfoContent */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h3>
            <p className="border-b border-[#00193125] pb-7 text-[#627382]">
              Developed by:{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium">
                {companyName}
              </span>
            </p>

            {/* CounterSection */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:flex lg:gap-12 pt-7">
              {/* ItemDownloads */}
              <div className="text-[#001931] text-center lg:text-left">
                <img
                  src={iconDownload}
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10 mx-auto lg:mx-0"
                />
                <p className="py-2 text-sm lg:text-base whitespace-nowrap">
                  Downloads
                </p>
                <span className="text-3xl lg:text-[40px] font-black leading-none">
                  {Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(downloads)}
                </span>
              </div>

              {/* ItemRatings */}
              <div className="text-[#001931] text-center lg:text-left">
                <img
                  src={iconRating}
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10 mx-auto lg:mx-0"
                />
                <p className="py-2 text-sm lg:text-base whitespace-nowrap">
                  Avg Ratings
                </p>
                <span className="text-3xl lg:text-[40px] font-black leading-none">
                  {ratingAvg}
                </span>
              </div>

              {/* ItemReviews */}
              <div className="text-[#001931] text-center lg:text-left col-span-2 md:col-span-1">
                <img
                  src={iconReview}
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10 mx-auto lg:mx-0"
                />
                <p className="py-2 text-sm lg:text-base whitespace-nowrap">
                  Total Reviews
                </p>
                <span className="text-3xl lg:text-[40px] font-black leading-none">
                  {Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(reviews)}
                </span>
              </div>
            </div>

            {/* InstallButton */}
            <div className="mt-8 lg:mt-10">
              <button
                onClick={() => handleInstall(findApp)}
                disabled={isInstalled}
                className="w-full lg:w-auto bg-[#00D39099] hover:bg-[#00D390] text-base-100 text-lg lg:text-xl font-semibold px-8 py-4 rounded-sm cursor-pointer hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Chart Section */}
        <div className="w-full overflow-hidden">
          <h3 className="text-2xl font-bold pt-8 lg:pt-12 pb-4 lg:pb-6">
            Ratings
          </h3>
          <div className="w-full h-75 md:h-100 block">
            <RatingChart />
          </div>
        </div>

        {/* Description Section */}
        <div>
          <h3 className="text-2xl font-bold pt-8 lg:pt-12 pb-4 lg:pb-6">
            Description
          </h3>
          <p className="text-[#627382] text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
