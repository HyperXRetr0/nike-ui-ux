import { shoe8 } from "../assets/images";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section className="w-full flex justify-between items-center max-lg:flex-col max-container gap-10">
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-bold font-palanqin lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <br />
        <p className="lg:max-w-lg info-text mt-2">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
