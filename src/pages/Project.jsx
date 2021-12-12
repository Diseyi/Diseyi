import React from "react";
import Button from "../components/Button";
import image from "../assets/image.png";
import Header from '../components/Header';
import Footer from "../components/Footer";

const Project = () => {
  return (
    <section className="bg-gray-300 ">
         <Header />
      <div className="w-4/5 bg-gray-300 m-auto mt-20 ">
        <details className="bg-gray-300 pt-10 pb-10 border-b-2">
          <summary className=" flex justify-between">
            <h2 className="text-4xl">Weather App </h2>
          </summary>
          <div className="flex flex-col items-center justify-between pt-10 pb-10 lg:flex-row  ">
            <p className="text-2xl">
              {" "}
              Weatherman is a weather app that forcast weather report for up to
              eight days{" "}
            </p>
            <img src={image} alt="a woman with a system" className="m-0 p-0" />
          </div>
          <Button value="view site" />
        </details>

        <details className="bg-gray-300 pt-10 pb-10 border-b-2">
          <summary className=" flex justify-between">
            <h2 className="text-4xl">Weather App </h2>
          </summary>
          <div className="flex flex-col items-center justify-between pt-10 pb-10 lg:flex-row  ">
            <p className="text-2xl ">
              {" "}
              Weatherman is a weather app that forcast weather report for up to
              eight days{" "}
            </p>
            <img src={image} alt="a woman with a system" className="m-0 p-0" />
          </div>
          <Button value="view site" />
        </details>

        <details className="bg-gray-300 pt-10 pb-10 border-b-2">
          <summary className=" flex justify-between">
            <h2 className="text-4xl">Weather App </h2>
          </summary>
          <div className="flex flex-col items-center justify-between pt-10 pb-10 lg:flex-row  ">
            <p className="text-2xl ">
              {" "}
              Weatherman is a weather app that forcast weather report for up to
              eight days{" "}
            </p>
            <img src={image} alt="a woman with a system" className="m-0 p-0" />
          </div>
          <Button value="view site" />
        </details>

        <details className="bg-gray-300 pt-10 pb-10 border-b-2">
          <summary className=" flex justify-between">
            <h2 className="text-4xl">Weather App </h2>
          </summary>
          <div className="flex flex-col items-center justify-between pt-10 pb-10 lg:flex-row  ">
            <p className="text-2xl ">
              {" "}
              Weatherman is a weather app that forcast weather report for up to
              eight days{" "}
            </p>
            <img src={image} alt="a woman with a system" className="m-0 p-0" />
          </div>
          <Button value="view site" />
        </details>
      </div>
      <Footer />
    </section>
  );
};

export default Project;
