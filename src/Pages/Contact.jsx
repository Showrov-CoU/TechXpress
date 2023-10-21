import { FaLocationArrow, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="px-[1%] md:px-[5%] pb-10 relative bg-white dark:bg-color-primary-light text-neutralDGrey dark:text-white">
      <div className="h-[87vh] md:h-[85vh] flex justify-center items-end ">
        <div className="h-[60vh] w-[80%] md:w-2/3 lg:w-1/2 border-2 border-solid border-gray-400 dark:border-color-gray space-y-[6px] md:space-y-2 bg-neutralSilver dark:bg-color-primary-dark rounded-lg">
          <h1 className="mt-7 md:mt-12 lg:mt-16 card-title justify-center mb-0 md:mb-3">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered input-success block w-[90%] md:w-full max-w-xs mx-auto text-brandPrimary"
          />
          <input
            type="text"
            placeholder="Enter a valid Email"
            className="input input-bordered input-success block w-[90%] md:w-full max-w-xs mx-auto text-brandPrimary"
          />
          <textarea
            className="block mx-auto textarea textarea-success w-[90%] md:w-[70%] lg:w-[58%] xl:w-[48%] text-brandPrimary text-lg"
            placeholder="Description"
          ></textarea>

          <button className="signbtn block mx-auto">Send</button>
        </div>
      </div>
      <div className="absolute flex gap-2 lg:gap-4 top-8 md:top-6 lg:top-10 left-[3%] md:left-[11%] lg:left-[22%] xl:left-[25%]">
        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 border-2 border-solid border-gray-400 dark:border-color-gray bg-neutralSilver dark:bg-color-primary-light flex flex-col justify-center items-center gap-1 rounded-lg">
          <p className="text-brandPrimary font-bold text-3xl md:text-4xl">
            <FaLocationArrow></FaLocationArrow>
          </p>
          <p className="text-sm md:text-base font-semibold">Our Main Office</p>
          <p className="text-xs md:text-sm">Tangail,Madhupur</p>
          <p className="text-xs md:text-sm">AS Plaza, 2nd floor</p>
        </div>
        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 border-2 border-solid border-gray-400 dark:border-color-gray bg-neutralSilver dark:bg-color-primary-light flex flex-col justify-center items-center gap-1 rounded-lg">
          <p className="text-brandPrimary font-bold text-3xl md:text-4xl">
            <FaPhoneAlt></FaPhoneAlt>
          </p>
          <p className="text-sm md:text-base font-semibold">Phone Number</p>
          <p className="text-xs md:text-sm">+8801830096308</p>
          <p className="text-xs md:text-sm">Bangladesh</p>
        </div>
        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 border-2 border-solid border-gray-400 dark:border-color-gray bg-neutralSilver dark:bg-color-primary-light flex flex-col justify-center items-center gap-1 rounded-lg">
          <p className="text-brandPrimary font-bold text-3xl md:text-4xl">
            <AiOutlineMail></AiOutlineMail>
          </p>
          <p className="text-sm md:text-base font-semibold">Email</p>
          <p className="text-xs md:text-sm leading-tight">as.cou@gmail.com</p>
          <p className="text-xs md:text-sm">Bangladesh</p>
        </div>
        <div className="hidden w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 border-2 border-solid border-gray-400 dark:border-color-gray bg-neutralSilver dark:bg-color-primary-light md:flex flex-col justify-center items-center gap-1 rounded-lg">
          <p className="text-brandPrimary font-bold text-3xl md:text-4xl">
            <FaFacebook></FaFacebook>
          </p>
          <p className="text-sm md:text-base font-semibold">Facebook</p>
          <p className="text-xs md:text-sm">Ashikur Rahman</p>
          <p className="text-xs md:text-sm">Showrov</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
