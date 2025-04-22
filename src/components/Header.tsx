import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between px-3 h-[60px] items-center sticky drop-shadow bg-white">
      <img
        src="./../../src/assets/images/img_study4.png"
        alt="logo_study4"
        className="h-9"
      />
      <ul className="flex text-[14px] text-gray-h font-[600] items-center">
        <li>
          <a href="" className="px-2 py-2">
            Giới thiệu
          </a>
        </li>
        <li>
          <a href="" className="px-2 py-2">
            Chương trình học
          </a>
        </li>
        <li>
          <a href="" className="px-2 py-2">
            Đề thi online
          </a>
        </li>
        <li>
          <a href="" className="px-2 py-2">
            Flashcards
          </a>
        </li>
        <li>
          <a href="" className="px-2 py-2">
            Blog
          </a>
        </li>
        <li>
          <a href="" className="px-2 py-2">
            Kích hoạt tài khoản
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-3 py-[6px] bg-dark-blue rounded-[50px] text-white text-[15px]"
          >
            Đăng nhập
          </a>
        </li>
      </ul>
    </div>
  );
}
