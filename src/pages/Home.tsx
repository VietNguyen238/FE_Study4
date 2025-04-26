import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CourseCard from "../components/ui/CourseCard";
import Slideshow from "../components/ui/Slideshow";
import { images, image, itemsCard } from "../config/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-black">
      <Slideshow images={images} width="w-full" />
      <h1 className="text-[28px] font-semibold py-3">
        Khóa học online nổi bật
      </h1>

      <div className="relative w-page h-full py-4">
        <Swiper
          modules={[Virtual]}
          spaceBetween={24}
          slidesPerView={3}
          // centerInsufficientSlides={true}

          virtual
        >
          {itemsCard.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <CourseCard
                index={index}
                image={item.image}
                title={item.title}
                student={item.student}
                quantity={item.quantity}
                newPrice={item.newPrice}
                originalPrice={item.originalPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Slideshow images={image} width="w-page" />
    </div>
  );
}
