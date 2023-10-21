// import { useEffect } from "react";
import aboutus from "../assets/aboutnew.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const AboutUs = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5">
      <div className="md:w-[40%] h-full" data-aos="slide-right">
        <img
          className="w-full h-full rounded-lg border-2 border-solid border-gray-400 dark:border-color-gray"
          src={aboutus}
          alt=""
        />
      </div>
      <div className="space-y-6 md:w-[60%]" data-aos="slide-left">
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Who are we?
          </h1>
          <p className="text-sm text-justify md:text-base">
            At TechXpress, we are a passionate team of tech enthusiasts
            dedicated to bringing you the latest innovations from industry
            giants like Apple, Google, Microsoft, and Intel.
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Vision
          </h1>
          <p className="text-sm text-justify md:text-base">
            To be the leading bridge between technology and people, fostering a
            world where everyone can effortlessly embrace the power of Apple,
            Google, Microsoft, Intel, and more, enriching their lives through
            innovation and connectivity.
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Mission
          </h1>
          <p className="text-sm text-justify md:text-base">
            Our mission is to simplify your tech journey, offering cutting-edge
            products and expert guidance that align with our vision of making
            technology accessible and empowering for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
