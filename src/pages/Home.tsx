import { Virtual, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CourseCard from "../components/ui/CourseCard";
import Slideshow from "../components/ui/Slideshow";
import { images, image, itemsCard, topic } from "../config/data";
import AdviseForm from "../components/ui/AdviseForm";
import TopicCard from "../components/ui/TopicCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-black">
      <Slideshow images={images} width="w-full" />
      <h1 className="text-[28px] font-semibold py-3">
        Khóa học online nổi bật
      </h1>

      <div className="relative w-page h-full py-4">
        <Swiper
          modules={[Virtual, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true }}
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
      <div className="flex justify-center pt-4 pb-10 my-10 w-full bg-blue-50">
        <div className="flex w-page justify-between py-10">
          <div className="flex flex-col w-[756px] text-black gap-2">
            <p>
              Các{" "}
              <a href="/courses/online/" className="text-link">
                phần mềm luyện thi IELTS, TOEIC, HSK online
              </a>{" "}
              chất lượng cao của STUDY4 đều được thiết kế sát format thi thật,
              theo chương trình chuẩn CEFR (A1-C2) của đại học Cambridge và
              Oxford (Anh) với nhiều tính năng và hệ thống bài tập phong phú đa
              dạng.{" "}
            </p>
            <p>
              Phần mềm luyện thi bao gồm các tính năng chuyên sâu và lộ trình
              luyện thi cá nhân hóa để chinh phục các mốc điểm quan trọng.
              STUDY4 áp dụng những công nghệ tối ưu vào học tập như
              spaced-repetition để ôn tập flashcards, AI để chấm chữa phát âm và
              bài thi nói/viết. Toàn bộ quá trình luyện thi của bạn sẽ được
              thống kê chi tiết theo ngày và theo từng dạng câu hỏi để có thể dễ
              dàng theo dõi tiến độ và điều chỉnh lộ trình ôn tập một cách phù
              hợp.
            </p>
            <p>Bạn có thể học thử miễn phí trước khi đăng ký.</p>
          </div>
          <AdviseForm title="Tư vấn lộ trình học" width={"w-[365px]"} />
        </div>
      </div>
      <Slideshow images={image} width="w-page" />
      <div className="flex flex-col justify-center items-center">
        <div className="text-[28px] font-semibold text-black pb-5 pt-8">
          Đề thi mới nhất
        </div>
        <div className="grid grid-cols-4 gap-5">
          {topic.map((item, index) => (
            <TopicCard
              title={item.title}
              exam={item.exam}
              key={index}
              message={item.message}
              person={item.person}
              question={item.question}
              time={item.time}
            />
          ))}
        </div>
      </div>

      <div
        className="flex justify-center py-14 bg-slate-400 w-full mt-12"
        style={{
          backgroundImage: "url(./../../src/assets/images/img_student.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="mb-4 text-white text-[28px] font-semibold">
            Đăng ký thông tin khoá học
          </div>
          <AdviseForm width={"w-[516px]"} />
        </div>
      </div>
    </div>
  );
}
