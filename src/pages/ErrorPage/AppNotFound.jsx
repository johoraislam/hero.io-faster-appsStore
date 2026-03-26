import React from "react";
import errorAppPageImage from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4">
      <div>
        <img src={errorAppPageImage} alt="Error Page Image" />
      </div>
    </section>
  );
};

export default AppNotFound;
