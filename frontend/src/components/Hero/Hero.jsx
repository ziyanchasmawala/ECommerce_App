import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description: "Experience unparalleled sound quality.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Virtual Reality",
    title: "Wireless",
    title2: "VR Headset",
    description: "Immerse yourself in the virtual world.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Apple MacBook",
    title: "Branded",
    title2: "Laptop",
    description: "Power and elegance combined.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id} className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                  {/* Text Content */}
                  <div
                    className="flex flex-col justify-center
                  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                  sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl font-bold sm:text-6xl
                    lg:text-2xl"
                    >
                      {data.subtitle}
                    </h2>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl font-bold text-white dark:text-white/5
                    uppercase sm:text-[80px] md:text-[100px] xl:text-[150px]"
                    >
                      {data.title2}
                    </h1>
                    {/* <p className="mt-4   text-gray-600">{data.description}</p> */}
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="0"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      ></Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="flex justify-center relative z-10"
                    >
                      <img
                        src={data.img}
                        alt={data.title2}
                        className="w-[300px] h-[300px] 
                    sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 
                    object-contain mx-auto 
                    drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
