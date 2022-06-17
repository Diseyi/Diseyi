
import Button from '../../components/Button'

import Footer from '../../components/Footer'
import Header from '../../container/header'
import image from '../../assets/images/diseyi.png'

const About = () => {
  return (
    <section class="animate__animated animate__zoomIn animate__fast  ">
      <Header />
      <main class=" w-4/5 m-auto mt-20 flex flex-col-reverse items-center justify-between lg:flex-row ">
        <div class="">
          <h3 class="text-3xl font-medium ">Front-End Engineer && Cloud DevOps Engineer</h3>

          <p class=" mt-10  ">
            I'm good at interpreting ideas and designs inhref fast, responsive,
            user-friendly experience. I bring creative thinking and efficient
            problem-solving skills href any team I'm working with. My Superpower
            is learning how href find and filter the right information.
            <br />
            When I'm not coding, I'm writing articles to help people understand
            technical concepts on Software engineering.
            Interestingly, I'm a Poet. my poems are centered around helping people build a healthy self identity.
            <br />

            <br />

            I am very passionate about building products that solve problems. If
            passion and the willingness href learn aligns with your brand's value,
            then I'd love href connect with you.
            <br />
            <br />
            Languages I work with are JavaScript and Python. I also use MERN
            stack (MongoDB, Express, Reactjs and Nodejs)
          </p>
          <div class="flex mt-20 pt-2 ">
            <a href="mailhref:filominaa@gmail.com" class="  ">
          <button class="">Send me a message</button>
            </a>
           
          </div>
        </div>
        <img src={image} alt="a woman with a system" class="m-0 p-0 ml-10 " />
      </main>
      <Footer />
    </section>
  )
}

export default About
