import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Project = () => {
  return (
    <section className=" ">
      <Header />
      <div className="w-4/5 m-auto mt-10 mb-20 ">
        <h2 className="text-7xl font-light pb-5  ">Projects</h2>

        <div className="flex flex-col flex-between mt-10 items-center   lg:flex-row ">
          <div className="border-2 border-black rounded-xl p-10 mb-5 m-10 ">
            <h3 className="text-2xl ">Weather App</h3>
            <p className="mb-10 mt-5 text-purple-900 ">
              {' '}
              Weatherman is a weather app that forcast weather report for up to
              eight days
            </p>
            <Button value="view site" />
          </div>

          <div className="border-2 border-black rounded-xl p-10 mb-5  m-10 ">
            <h3 className="text-2xl ">Weather App</h3>
            <p className="mb-10 mt-5 text-purple-900 ">
              {' '}
              Weatherman is a weather app that forcast weather report for up to
              eight days
            </p>
            <Button value="view site" />
          </div>

          <div className="border-2 border-black rounded-xl p-10 mb-5 m-10 ">
            <h3 className="text-2xl  ">Keypsafe</h3>
            <p className="mb-10 mt-5 text-purple-900  ">
              {' '}
              Password manager that genrates secure password for users and store to database
            </p>
            <Button value="view site" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Project
