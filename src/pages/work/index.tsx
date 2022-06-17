
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../container/header'
import '../../App.css'

const Work = () => {
  return (
    <section class="animate__animated animate__slideInDown bg-light-green  ">
      <Header />
      <div class="w-4/5 m-auto mt-10 mb-20 ">
        <h2 class="text-7xl font-light pb-5  ">Projects</h2>

        <div class="flex flex-col flex-between mt-10 items-center   lg:flex-row ">
          <div class="border-2 border-black rounded-xl p-10 mb-5 m-10 ">
            <h3 class="text-2xl ">Weather App</h3>
            <p class="mb-10 mt-5 text-purple-900 ">
              {' '}
              Weatherman is a weather app that forcast weather report for up to
              eight days
            </p>
            <a
              href="https://d-weatherman.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Button value="view site" />
            </a>
          </div>

          <div class="border-2 border-black rounded-xl p-10 mb-5  m-10 ">
            <h3 class="text-2xl ">Task Manager</h3>
            <p class="mb-10 mt-5 text-purple-900 ">
              {' '}
             A productivity app that helps you keep track of your daily goals
            </p>
            <a
              href="https://web-todoapp.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              <Button value="view site" />{' '}
            </a>
          </div>

          <div class="border-2 border-black rounded-xl p-10 mb-5 m-10 ">
            <h3 class="text-2xl  ">Keypsafe</h3>
            <p class="mb-10 mt-5 text-purple-900  ">
              {' '}
              Password manager that genrates secure password for users and store
              to database
            </p>
            <a
              href="https://keyp-safe.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Button value="view site" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Work
