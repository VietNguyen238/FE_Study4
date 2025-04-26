import React, { useState } from "react";

interface Props {
  title?: string;
  width: string;
}

interface FormState {
  name: string;
  phone: string;
  address: string;
  subject: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  address: "",
  subject: "Môn học bạn quan tâm",
};

export default function AdviseForm({ title, width }: Props) {
  const [state, setState] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", state);
    setState(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col items-center gap-4 ${width} rounded-lg border border-box bg-white shadow-card p-4`}
    >
      {title ? (
        <div className="font-semibold text-[22px] text-black">{title}</div>
      ) : (
        ""
      )}
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Họ tên*"
        required
      />
      <input
        name="phone"
        value={state.phone}
        onChange={handleChange}
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Số điện thoại*"
        required
      />
      <input
        name="address"
        value={state.address}
        onChange={handleChange}
        className="w-full rounded-md px-3 py-[6px] border border-box"
        placeholder="Khu vực học (thành phố/tỉnh)*"
        required
      />
      <select
        name="subject"
        value={state.subject}
        onChange={handleChange}
        className="w-full rounded-md px-3 py-[6px] border border-box"
      >
        <option value="">Môn học bạn quan tâm</option>
        <option value="TOEIC">TOEIC</option>
        <option value="IELTS Academic">IELTS Academic</option>
        <option value="IELTS General">IELTS General</option>
        <option value="IELTS Writing and Speaking">
          IELTS Writing and Speaking
        </option>
        <option value="Tiếng Anh cơ bản">Tiếng Anh cơ bản</option>
        <option value="HSK">HSK</option>
      </select>
      <button
        type="submit"
        className="bg-dark-blue font-semibold w-full rounded-md px-3 py-[6px] mb-4 text-white text-center"
      >
        Đăng ký tư vấn miễn phí
      </button>
    </form>
  );
}
