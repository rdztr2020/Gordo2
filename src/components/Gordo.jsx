import video from "../assets/shortflames.mp4";
import logo from "../assets/newlogo.jpg";
import hero from "../assets/flamespost.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-[100vh] w-[100%] relative flex shrink-0 items-center justify-center ">
      <div className="  h-screen  items-center justify-center">
      <video
          src={video}
          className="absolute  h-full w-full object-cover "
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      
      <div className="absolute flex" />
      <div className="relative z-20 h-screen w-screen flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 6 }}
          src={logo}
          alt="Gordo Mikes"
          className="w-60 md:w-70 lg:w-80 p-4 rounded-full "
        />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;

