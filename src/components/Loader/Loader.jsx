import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-4xl font-bold">
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent animate-pulse">
            LOADING...
          </span>
        </h2>
      </div>
    </>
  );
};

export default Loader;
