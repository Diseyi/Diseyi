import React from "react";
import Header from "../components/Header";
import woman from "../assets/woman.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="bg-gray-300  ">
      <Header />
      <main className=" flex flex-col items-center w-4/5 m-auto mt-20 justify-evenly lg:flex-row bg-gray-300 ">
        <div className="flex flex-col text-3xl font-bold ">
          <p className=""> Const Repeat = () =&#10093; &#123; </p>
          <p className="pl-5">While(alive) &#123; </p>
          <p className="pl-10 ">Eat </p>
          <p className="pl-10 ">Code </p>
          <p className="pl-10 ">Sleep </p>
          <p className="pl-10 ">Write Poem </p>
          <p className="pl-5">&#125; </p>
          <p className="">&#125; </p>
          <button className="border-2 border-purple-500 rounded-xl p-2 pl-3 pr-3 mt-5 bg-purple-500 text-white">
            {" "}
            Repeat( ){" "}
          </button>
        </div>
        <img
          src={woman}
          alt="a woman with a laptop"
          className="m-0 mt-20 md:w-2/4 lg:mt-0  "
        />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
