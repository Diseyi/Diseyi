import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import image from '../assets/diseyi.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className=" ">
      <Header />
      <main className=" w-4/5 m-auto mt-20 flex flex-col-reverse items-center justify-between lg:flex-row ">
        <div className="">
          <h3 className="text-5xl font-light ">I'm a Frontend Developer & Technical Writer</h3>

          <p className=" mt-10  ">
            I'm good at interpreting ideas and designs into fast, responsive,
            scalable, secure and user-friendly solutions for brands and
            organizations. I bring creative thinking and efficient
            problem-solving skills to any team I'm working with. My Superpower
            is learning how to find and filter the right information.
            <br />
            When I'm not coding, I'm writing articles to help people understand
            technical concepts on Programming, Blockchain Development, Crypto.
            Interestingly, I'm a Poet and Spoken Word Artist, my poems are centered around helping people build a healthy self identity.
            <br />

            <br />

            I am very passionate about building products that solve problems. If
            passion and the willingness to learn aligns with your brand's value,
            then I'd love to connect with you.
            <br />
            <br />
            Languages I work with are JavaScript and Python. I also use MERN
            stack (MongoDB, Express, Reactjs and Nodejs)
          </p>
          <div className="flex mt-20 pt-2 ">
          <a href="mailto:filominaa@gmail.com" className="  ">
            <Button value="Reach out to me" />
            </a>
             <Link to="/work" style={{ textDecoration: 'none' }}>
            <Button value="Check out my project" />
            </Link>
          </div>
        </div>
        <img src={image} alt="a woman with a system" className="m-0 p-0 ml-10 " />
      </main>
      <Footer />
    </section>
  )
}

export default About
