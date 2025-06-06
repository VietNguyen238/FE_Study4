import React from "react";
import Tag from "./Tag";

interface Props {
  index: number;
  image: string;
  title: string;
  student: number;
  quantity: number;
  newPrice: number;
  originalPrice: number;
}

export default function CourseCard({
  index,
  image,
  title,
  student,
  quantity,
  newPrice,
  originalPrice,
}: Props) {
  const percent = Math.floor(100 - (newPrice / originalPrice) * 100);

  return (
    <div
      key={index}
      className="shadow-card border border-box rounded-lg my-3 hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
    >
      <img
        className="rounded-t-lg"
        src={`./../../../src/assets/images/${image}`}
        alt={`${image}`}
      />
      <div className="px-4 pb-1 pt-2 text-[16px] text-black font-semibold">
        {title}
        <div className="flex gap-1 py-1 text-[14px] text-black font-medium">
          <div className="flex justify-center items-center">
            <img
              className="h-[15px]"
              src="./../../../../src/assets/svgs/ic_star.svg"
              alt="ic_star"
            />
            <img
              className="h-[15px]"
              src="./../../../../src/assets/svgs/ic_star.svg"
              alt="ic_star"
            />
            <img
              className="h-[15px]"
              src="./../../../../src/assets/svgs/ic_star.svg"
              alt="ic_star"
            />
            <img
              className="h-[15px]"
              src="./../../../../src/assets/svgs/ic_star.svg"
              alt="ic_star"
            />
            <img
              className="h-[15px]"
              src="./../../../../src/assets/svgs/ic_star_half.svg"
              alt="ic_star"
            />
          </div>
          <div>({student})</div>
          <div className="pl-2">{quantity} Học viên</div>
        </div>
        <Tag title="Phần mềm online" />
        <div className="flex gap-2">
          <div className="text-green-500 font-semibold">{newPrice}đ</div>
          <div className="font-medium line-through">{originalPrice}đ</div>
          <div className="flex font-bold bg-red-600 text-white text-[12px] items-center justify-center px-2 rounded-lg">
            - {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
