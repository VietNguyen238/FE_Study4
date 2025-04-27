import React from "react";

interface Props {
  lable: string;
  href: string;
  key: number;
}

export default function Lable({ lable, href, key }: Props) {
  return (
    <div key={key}>
      <a
        className="py-2 px-4 bg-blue-100 text-dark-blue rounded-lg border border-gray border-opacity-10"
        href={href}
      >
        <span>{lable}</span>
      </a>
    </div>
  );
}
