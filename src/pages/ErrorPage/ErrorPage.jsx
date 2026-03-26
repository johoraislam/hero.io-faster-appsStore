import React from "react";
import { Link } from "react-router";
import errorPageImage from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <div>
        <img src={errorPageImage} alt="Error Page Image" />
      </div>
      <p className="text-2xl lg:text-3xl font-bold text-[#001931] mt-4 mb-2">
        Oops, page not found!
      </p>
      <p className="text-[#627382] md:text-xl mb-8">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-sm text-white font-semibold hover:opacity-90 transition-all duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
