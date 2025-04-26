import React from "react";

interface Props {
  title?: string;
}

export default function AdviseForm({ title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 w-[365px] rounded-lg border border-box shadow-card p-4">
      {title ? (
        <div className="font-semibold text-[22px] text-black">{title}</div>
      ) : (
        ""
      )}
      <input
        name="name"
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Họ tên*"
      />
      <input
        name="phone"
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Số điện thoại*"
      />
      <input
        name="address"
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Khu vực học (thành phố/tỉnh)*"
      />
      <select
        name="subject"
        className="w-full rounded-md px-3 py-[6px] border border-box"
      >
        <option value="Môn học bạn quan tâm">Môn học bạn quan tâm</option>

        <option value="TOEIC">TOEIC</option>

        <option value="IELTS Academic">IELTS Academic</option>

        <option value="IELTS General">IELTS General</option>

        <option value="IELTS Writing and Speaking">
          IELTS Writing and Speaking
        </option>

        <option value="Tiếng Anh cơ bản">Tiếng Anh cơ bản</option>

        <option value="HSK">HSK</option>
      </select>
      <div className="bg-dark-blue font-semibold w-full rounded-md px-3 py-[6px] mb-4 text-white text-center">
        Đăng ký tư vấn miễn phí
      </div>
    </div>
  );
}
