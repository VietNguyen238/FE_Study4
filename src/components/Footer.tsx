import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center w-full text-gray">
      <div className="w-page">
        <div className="flex mb-4 gap-3 text-white font-semibold text-[10px]">
          <div className="bg-[#1a77f2] px-2 py-[2px] rounded flex gap-[2px] h-[19px]">
            <img
              className="p-[2px]"
              src="./../../src/assets/svgs/ic_like.svg"
              alt="ic_like"
            />
            Like 347
          </div>
          <div className="bg-[#1a77f2] px-2 py-[2px] rounded">Share</div>
        </div>
        <div className="grid grid-cols-4 text-[14px] text-gray">
          <ul className="col-span-1 px-3">
            <div className="flex items-end gap-1 text-black">
              <img
                src="./../../src/assets/images/img_study4.png"
                alt="study4_new_logo_sm"
                className="h-[30px]"
              />
              ©
            </div>
            <div className="flex gap-1 h-[19px] mt-2">
              <img
                src="./../../src/assets/svgs/ic_facebook.svg"
                alt="ic_facebook"
              />
              <img
                src="./../../src/assets/svgs/ic_instagram.svg"
                alt="ic_instagram"
              />
              <img
                src="./../../src/assets/svgs/ic_twitter_bird.svg"
                alt="ic_twitter-bird"
              />
              <img
                src="./../../src/assets/svgs/ic_youtube.svg"
                alt="ic_youtube"
              />
              <img
                src="./../../src/assets/svgs/ic_tiktok.svg"
                alt="ic_tiktok"
              />
            </div>
          </ul>
          <ul className="col-span-1 px-3">
            <div className="text-black text-base font-semibold">Về STUDY4</div>
            <li>
              <a href="">Giới thiệu</a>
            </li>
            <li>
              <a href="">Liên hệ</a>
            </li>
            <li>
              <a href="">Điều khoản bảo mật</a>
            </li>
            <li>
              <a href="">Điều khoản sử dụng</a>
            </li>
          </ul>
          <ul className="col-span-1 px-3">
            <div className="text-black text-base font-semibold">Tài nguyên</div>
            <li>
              <a href="">Thư viện đề thi</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Tổng hợp tài liệu</a>
            </li>
          </ul>
          <ul className="col-span-1 px-3">
            <div className="text-black text-base font-semibold">
              Chính sách chung
            </div>
            <li>
              <a href="">Hướng dẫn sử dụng</a>
            </li>
            <li>
              <a href="">Hướng dẫn thanh toán</a>
            </li>
            <li>
              <a href="">Điều khoản và Điều Kiện Giao Dịch</a>
            </li>
            <li>
              <a href="">Chính sách kiểm hàng</a>
            </li>
            <li>
              <a href="">Chính sách giao, nhận hàng</a>
            </li>
            <li>
              <a href="">Phản hồi, khiếu nại</a>
            </li>
            <li>
              <a href="">Chính sách chuyển đổi, hoàn hủy</a>
            </li>
          </ul>
        </div>
        <div className="px-3">
          <h5 className="font-semibold text-black mb-2">
            Thông tin doanh nghiệp
          </h5>
          <ul className="text-[14px]">
            <li>CÔNG TY TNHH CÔNG NGHỆ A PLUS</li>
            <li>Điện thoại liên hệ/Hotline: 096 369 5525</li>
            <li>Email: study4.team@gmail.com</li>
            <li>
              Địa chỉ trụ sở: Số 15, Ngõ 208 Giải Phóng, Phường Phương Liệt,
              Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
            </li>
            <li>
              Giấy chứng nhận Đăng ký doanh nghiệp số: 0109675459 do Sở Kế hoạch
              và Đầu tư thành phố Hà Nội cấp
            </li>
            <li>Ngày cấp phép: 17/06/2021</li>
            <li>
              CS1: TRUNG TÂM NGOẠI NGỮ STUDY4 - Số 17, Ngõ 208 Giải Phóng,
              Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam -
              Quyết định cho phép Trung tâm ngoại ngữ hoạt động số 2654/QĐ-SGDĐT
              Hà Nội
            </li>
          </ul>
          <div className="text-center">
            STUDY4.COM © Bản quyền của Công ty TNHH Công Nghệ A Plus.
          </div>
          <div className="text-center text-gray">
            <div>
              IELTS is a registered trademark of University of Cambridge, the
              British Council, and IDP Education Australia. This site and its
              owners are not affiliated, approved or endorsed by the University
              of Cambridge ESOL, the British Council, and IDP Education
              Australia.
            </div>
            <div>
              ETS®, TOEIC® and TOEFL® are registered trademarks of Educational
              Testing Service (ETS). This web site is not endorsed or approved
              by ETS.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
