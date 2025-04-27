import React from "react";
import AdviseForm from "../components/ui/AdviseForm";
import Lable from "../components/ui/Lable";
import { itemsCard, lable } from "../config/data";
import CourseCard from "../components/ui/CourseCard";

export default function StudyProgram() {
  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <img
        src="./../src/assets/images/img_testonline_banner.jpg"
        alt="img_testonline_banner"
        className="w-page"
      />
      <div className="w-page mt-14">
        <div className="text-black text-[32px] font-semibold pb-4">
          Phần mềm luyện thi online
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 flex flex-col gap-4">
            <p>
              Các phần mềm luyện thi IELTS, TOEIC, HSK online chất lượng cao của
              STUDY4 đều được thiết kế sát format thi thật, theo chương trình
              chuẩn CEFR (A1-C2) của đại học Cambridge và Oxford (Anh) với nhiều
              tính năng và hệ thống bài tập phong phú đa dạng.{" "}
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
          <div className="col-span-4">
            <AdviseForm title="Tư vấn lộ trình học" width="w-[365px]" />
          </div>
        </div>
      </div>
      <div className="w-page mt-10">
        <div className="font-semibold text-[24px] text-black">
          Danh sách các môn học
        </div>
        <div className="flex gap-8 mt-4">
          {lable.map((item, index) => (
            <Lable key={index} href={item.href} lable={item.lable} />
          ))}
        </div>
      </div>
      <div className="w-page mt-10">
        <h2 className="font-semibold text-[24px] text-black mb-4">
          Combo đặc biệt
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="toeic">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/toeic/"
        >
          TOEIC
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="ieltsacademic">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/ieltsacademic/"
        >
          IELTS Academic
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="ieltsgeneral">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/ieltsgeneral/"
        >
          IELTS General
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="ieltswritingandspeaking">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/ieltswritingandspeaking/"
        >
          IELTS Writing and Speaking
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="tiếnganhcơbản">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/tiếnganhcơbản/"
        >
          Tiếng Anh cơ bản
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
      <div className="w-page mt-10" id="hsk">
        <a
          className="font-semibold text-[24px] text-black mb-4"
          href="/study-program/hsk/"
        >
          HSK
        </a>
        <div className="grid grid-cols-3 gap-5">
          {itemsCard.map((item, index) => (
            <CourseCard
              index={index}
              image={item.image}
              title={item.title}
              student={item.student}
              quantity={item.quantity}
              newPrice={item.newPrice}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
