import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleAppCard from "../../components/SingleAppCard/SingleAppCard";
import AppNotFound from "../ErrorPage/AppNotFound";

const Apps = () => {
  const appsData = useLoaderData();
  //   console.log(appsData);

  //   SearchState
  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <section className="py-10 lg:py-20 mx-4 lg:mx-0">
        <div className="max-w-7xl mx-auto">
          {/* SectionTitle */}
          <div className="text-center">
            <h2 className="text-[#001931] text-3xl md:text-5xl font-bold pb-4">
              Our All Applications
            </h2>

            {/* Description */}
            <p className="text-[#627382] md:text-xl">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          {/* TotalAppsAndSearchField */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 mt-10 mb-5">
            {/* TotalApps */}
            <h5 className="text-2xl text-[#001931] font-semibold">
              ({filteredApps.length}) Apps Found
            </h5>

            {/* SearchField */}
            <div>
              <label className="input bg-transparent">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* AppsContainer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-5 lg:pb-10">
            {filteredApps.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center gap-3">
                <AppNotFound />
                <p className="text-[#627382]">
                  No results for{" "}
                  <span className="font-semibold text-[#632EE3]">
                    "{search}"
                  </span>
                  . Try a different name.
                </p>
              </div>
            ) : (
              filteredApps.map((app) => (
                <SingleAppCard key={app.id} app={app} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Apps;
