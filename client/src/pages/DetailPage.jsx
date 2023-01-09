import Slider from "react-slick";

export default function DetailPage() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="nike-container">
        <Slider {...settings}>
          <div>
            <img
              alt="ecommerce"
              style={{ width: 300 }}
              className="object-center rounded border border-gray-200"
              src="https://cdn.shopify.com/s/files/1/0516/0760/1336/products/Voila_1_f179f0c5-9c5e-43a6-9fe6-b5a252f55f5b_1000x.jpg?v=1642647113"
            />
          </div>
          <div>
            <img
              alt="ecommerce"
              style={{ width: 300 }}
              className="object-center rounded border border-gray-200"
              src="https://cdn.shopify.com/s/files/1/0516/0760/1336/products/Voila_1_f179f0c5-9c5e-43a6-9fe6-b5a252f55f5b_1000x.jpg?v=1642647113"
            />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
