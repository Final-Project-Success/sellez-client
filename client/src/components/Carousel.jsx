import Slider from "react-slick";
import CardOne from "./CardOne";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // how to see the arrow?
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="h-100">
      <Slider {...settings} className="h-50">
        {/* multiply CardOne 6x */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CardOne key={item} />
        ))}
      </Slider>
    </div>
  );
}
