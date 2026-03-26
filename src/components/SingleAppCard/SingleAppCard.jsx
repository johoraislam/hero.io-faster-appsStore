import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleAppCard = ({ app }) => {
  const { id, image, title, ratingAvg, downloads } = app;
  return (
    <>
      <Link to={`/app-details/${id}`}>
        {/* AppCard */}
        <div className="bg-base-100 p-4 rounded-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 hover:cursor-pointer">
          {/* Image */}
          <div>
            <img
              src={image}
              alt="App Image"
              className="w-full h-48 rounded-lg"
            />
          </div>

          {/* AppTitle */}
          <h3 className="text-xl text-[#001931] font-medium py-4">{title}</h3>

          {/* Details */}
          <div className="flex justify-between items-center">
            <span className="badge badge-soft badge-success rounded-sm">
              <FaDownload />{" "}
              {Intl.NumberFormat("en", {
                notation: "compact",
              }).format(downloads)}
            </span>
            <span className="badge badge-soft badge-warning rounded-sm">
              <FaStar /> {ratingAvg}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleAppCard;
