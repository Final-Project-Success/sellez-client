// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import img from "../../assets/product2.png";
import img2 from "../../assets/product8.png";
import { useGetProductByIdQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";
export default function MiddleSide() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  // console.log(data, "di midle");
  const images = [
    {
      id: 1,
      img: img,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img,
    },
  ];
  return (
    <div className="w-[45%] flex justify-center items-center">
      {!data ? (
        ""
      ) : (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          grabCursor
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {data?.Images.map((item) => (
            <SwiperSlide className="flex justify-center mb-8">
              <img src={item.imgUrl} alt="" width="450" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
