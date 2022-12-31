import Slider from "react-slick";
import CardTwo from "./CardTwo";

export default function CarouselTwo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // how to see the arrow?
    arrows: true,
  };
  return (
    <div className="h-100">
      <Slider {...settings} className="h-50">
        {/* multiply CardOne 6x */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <CardTwo key={item} />
        ))}
      </Slider>
    </div>
  );
}
