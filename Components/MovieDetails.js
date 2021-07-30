import Image from "next/image";
import ReactPlayer from "react-player";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function MovieDetails({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="m-3 md:p-10">
      <h1 className="px-5 my-10">{results.original_title}</h1>
      <div>
        <Image
          layout="responsive"
          src={
            `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
            `${BASE_URL}${results.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>
      <p className="px-5 my-10">{results.overview}</p>

      <div>
        <ReactPlayer
          url={[
            "https://www.youtube.com/watch?v=oUFJJNQGwhk",
            "https://www.youtube.com/watch?v=jNgP6d9HraI",
          ]}
          height="1080"
          width="1920"
        />
      </div>

      {/* Swiper */}
      <div className="truncate max-w-md">
        <Swiper
          // spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <Image
              layout="responsive"
              src={
                `${BASE_URL}${results.backdrop_path || results.poster_path}` ||
                `${BASE_URL}${results.poster_path}`
              }
              height={1080}
              width={1920}
            />
          </SwiperSlide> */}
          <SwiperSlide>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
            /> */}
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      {/* Swiper */}
    </div>
  );
}

export default MovieDetails;
