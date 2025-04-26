import React from "react";
interface Props {
  title: "Phần mềm online" | "Listening" | "IELTS Academic";
}

export default function Tag({ title }: Props) {
  return (
    <div className="text-dark-blue rounded-full py-1 px-3 bg-blue-100 w-max text-[12px] my-2">
      #{title}
    </div>
  );
}
