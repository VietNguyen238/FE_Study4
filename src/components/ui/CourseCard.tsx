import React from "react";

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
  const percent = (originalPrice / newPrice) * 100;
  console.log(percent);
  return (
    <div key={index} className="shadow-card rounded-lg my-3">
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
        <div className="text-dark-blue rounded-full py-1 px-3 bg-blue-100 w-max text-[12px] my-2">
          #Phần mềm online
        </div>
        <div className="flex gap-2">
          <div className="text-green-500 font-semibold">{newPrice}đ</div>
          <div className="font-medium line-through">{originalPrice}đ</div>
        </div>
      </div>
    </div>
  );
}
