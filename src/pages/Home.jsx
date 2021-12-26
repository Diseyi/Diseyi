import React from "react";
import Header from "../components/Header";
import woman from "../assets/woman.png";
import Footer from "../components/Footer";

const Home = () => {
  return (

    <section className="bg-white ">
      <Header />
      <main className=" flex flex-col items-center w-4/5 m-auto mt-20 justify-evenly lg:flex-row  ">
        <div className="flex flex-col justify-between text-3xl font-bold ">
          <h2 className="text-5xl font-light pb-5  ">Hi, I'm</h2>
          <h2 className="text-5xl font-light pb-5 ">Diseyi Philomena</h2>
          <h3 className="text-5xl font-light pb-5 "> Frontend Developer & </h3>
          <h3 className="text-5xl font-light pb-5 "> Technical Writer</h3>
         
          <a href="mailto:filominaa@gmail.com" className=" font-bold text-purple-900 font-sans "> filomiinaa@gmail.com</a>
       

         
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
