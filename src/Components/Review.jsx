// import { useEffect } from "react";
import reviewer1 from "../assets/r1.jpg";
import reviewer2 from "../assets/r2.jpg";
import reviewer3 from "../assets/r3.jpg";
import reviewer4 from "../assets/r4.jpg";
// import reviewer3 from "../assets/Reviewer/r3.jpg";
// import reviewer4 from "../assets/Reviewer/r4.jpg";
// import reviewer5 from "../assets/Reviewer/r5.jpg";
// import reviewer6 from "../assets/Reviewer/r6.jpg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const Review = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 ">
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400 dark:border-color-gray p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer1} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;TechXpress has been my go-to for all things tech-related. I
          recently purchased a new Apple product, and their service was
          impeccable. The product arrived on time, and I couldn&apos;t be
          happier with my purchase!&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400 dark:border-color-gray p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer2} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">AR Showrov</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;I trust TechXpress for their selection of top-tier tech brands.
          Their Microsoft products have greatly enhanced my productivity. Plus,
          their customer support is fantastic. Highly recommended!&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400 dark:border-color-gray p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer3} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">Ashikur Rahman</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base text-justify">
          &quot;I&apos;ve been a TechXpress customer for over five years, and
          I&apos;ve always been impressed with their selection and prices.
          I&apos;ve bought everything from smartphones and laptops to TVs and
          appliances from them, and I&apos;ve always been happy with my
          purchase. The customer service is also excellent. Once, I had a
          problem with a product I bought, and they went above and beyond to
          help me resolve it. I highly recommend TechXpress to anyone looking
          for great deals on tech products.&quot;
        </p>
      </div>
      <div className="flex flex-col gap-3 border-2 border-solid border-gray-400 dark:border-color-gray p-5 rounded-xl">
        <div className="flex justify-start gap-3">
          <div className="w-12 h-12 rounded-full">
            <img src={reviewer4} className="w-full h-full rounded-full " />
          </div>
          <div>
            <p className="font-bold">Atlee Kumar</p>
            <p className="text-sm">Happy Client</p>
          </div>
        </div>
        <p className="text-sm md:text-base">
          &quot;I&apos;m a big fan of TechXpress. I&apos;ve bought several
          laptops and smartphones from them, and I&apos;ve always been happy
          with the quality and price. The website is easy to use, and the
          shipping is fast. I also appreciate that TechXpress offers a wide
          variety of products from different brands. I would definitely
          recommend TechXpress to anyone looking for a reliable place to buy
          tech products.
        </p>
      </div>
    </div>
  );
};

export default Review;
