
import woman from '../../assets/images/woman.png'
import Footer from "../../components/Footer";
import Header from "../../container/header";
import 'animate.css';
import '../../App.css'

const Home = () => {
  return (

    <section class="animate__animated animate__fadeInLeft animate__fast	800ms   ">
      <Header />
      <main class=" flex flex-col items-center w-4/5 m-auto mt-20 justify-between lg:flex-row  ">
        <div class="flex flex-col justify-between text-3xl font-bold animate_animated animate__fadeInDown  ">
          <h2 class="text-4xl font-medium pb-5 ">Hi, I'm</h2>
          <h2 class="text-4xl font-medium pb-5  ">Diseyi Philomena</h2>
          <h3 class="text-4xl font-medium pb-5 "> Software Engineer</h3>
          <h3 class="text-5xl pl-2 pb-5 animate__animated text-dark-green font-bold  animate__pulse animate__infinite animate__slow infinite"> Frontend | Cloud DevOps </h3>
          
         <p class="font-medium text-sm">I bring creative thinking and efficient problem-solving skills to any team I'm working with. My Superpower is learning how to find and filter the right information.</p>
       

         
        </div>
        <img
          src={woman}
          alt="a woman with a laptop"
          class="m-0 mt-20 md:w-2/4 lg:mt-0  "
        />
      </main>
     <Footer />  
    </section>
  );
};

export default Home;
