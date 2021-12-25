import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import image from "../assets/image.png";

const About = () => {
  return (
    <section className=" ">
      <Header />
      <main className=" w-4/5 m-auto mt-20 mb-20 flex flex-col-reverse items-center justify-between lg:flex-row ">
        <div className="">
          
        
          <h3 className="text-5xl font-light ">I'm a Frontend Developer</h3>

          <p className=" mt-10 text-2xl ">
            I'm good at interpreting ideas and designs into reliable, scalable,
            secure and user-friendly solutions for brands and organizations. I
            bring creative thinking and efficient problem-solving skills to any
            team I'm working with. My Superpower is learning how to find and
            filter the right information.
            <br />
            Languages I work with are JavaScript and Python. I also use MERN
            stack (MongoDB, Express, Reactjs and Nodejs)
          </p>
          <div className="flex mt-20 pt-2 ">
            <Button value="Reach out to me" />
            <Button value="Check out my project" />
          </div>
        </div>
        <img src={image} alt="a woman with a system" className="m-0 p-0" />
      </main>
      <Footer />
    </section>
  );
};

export default About;
