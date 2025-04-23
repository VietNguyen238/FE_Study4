import React from "react";

export default function Introduce() {
  return (
    <div className="w-full flex justify-center pt-8 pb-12 px-3">
      <div className="w-[744px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] font-semibold">Về chúng tôi</h1>
            <p>
              Công ty TNHH Công Nghệ A PLUS, đơn vị chủ quản website
              https://study4.com, chuyên phát triển và cung cấp các phần mềm
              luyện thi IELTS, TOEIC, HSK ... online.
            </p>
            <p>
              Các phần mềm luyện thi IELTS, TOEIC, HSK online chất lượng cao của
              STUDY4 đều được thiết kế sát format thi thật, theo chương trình
              chuẩn CEFR (A1-C2) của đại học Cambridge và Oxford (Anh) với nhiến
              tính năng và hệ thống bài tập phong phú đa dạng.{" "}
            </p>
            <p>
              Phần mềm luyện thi bao gồm các tính năng chuyên sâu và lộ trình
              luyện thi cá nhân hóa để chinh phục các mốc điểm quan trọng.
              STUDY4 áp dụng những công nghệ tối ưu vào học tập như adaptive
              learning tối ưu lộ trình luyện thi, spaced-repetition để ôn tập
              flashcards, các bài tập mini-game, AI để chấm chữa phát âm và bài
              thi nói/viết. Toàn bộ quá trình luyện thi của bạn sẽ được thống kê
              chi tiết theo ngày và theo từng dạng câu hỏi để có thể dễ dàng
              theo dõi tiến độ và điều chỉnh lộ trình ôn tập một cách phù hợp.
            </p>
          </div>
          <div className="">
            <h2 className="text-[18px] font-semibold pb-2">
              Thông tin doanh nghiệp:
            </h2>
            <div>Công ty chủ quản: Công ty TNHH Công Nghệ A Plus</div>
            <div>Giấy đăng ký kinh doanh: 0109675459</div>
            <div>Địa chỉ: Số 15, Ngõ 208, Giải Phóng, Thanh Xuân, Hà Nội</div>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold pb-2">
              Thông tin trung tâm đào tạo:
            </h2>
            <div>Trung tâm ngoại ngữ STUDY4</div>
            <div>
              Giấy chứng nhận hoạt động đào tạo, bồi dưỡng số 2654/QĐ-SGDĐT do
              Sở Giáo dục và Đào tạo Hà Nội cấp
            </div>
            <div>
              Địa chỉ: Số 17, Ngõ 208 Giải Phóng, Phường Phương Liệt, Quận Thanh
              Xuân, Thành phố Hà Nội, Việt Nam
            </div>
          </div>
          <p>
            Xin vui lòng{" "}
            <a href="/contact" className="text-link">
              liên hệ
            </a>{" "}
            với chúng tôi nếu bạn có bất cứ thắc mắc hay góp ý nào.
          </p>
        </div>
      </div>
    </div>
  );
}
