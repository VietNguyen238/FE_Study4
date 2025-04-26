import React from "react";

interface Props {
  title: string;
  border?: boolean;
}
export default function Button({ title, border = false }: Props) {
  return border ? (
    <button
      type="submit"
      className="bg-transparent font-semibold w-full rounded-md px-3 py-[6px] mb-4 text-dark-blue text-center border border-dark-blue hover:bg-dark-blue hover:text-white"
    >
      {title}
    </button>
  ) : (
    <button
      type="submit"
      className="bg-dark-blue font-semibold w-full rounded-md px-3 py-[6px] mb-4 text-white text-center hover:bg-dark-blue-h"
    >
      {title}
    </button>
  );
}
