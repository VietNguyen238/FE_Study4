import Tag from "./Tag";
import Button from "./Button";

interface Props {
  title: string;
  time: number;
  person: number;
  message: number;
  exam: number;
  question: number;
  key: number;
}

export default function TopicCard({
  title,
  time,
  person,
  message,
  exam,
  question,
  key,
}: Props) {
  return (
    <div
      key={key}
      className="w-[268px] p-4 border border-box bg-card rounded-lg shadow-card hover:shadow-hover duration-300 transition-all hover:-translate-y-0.5"
    >
      <div className="mb-1 text-[16px] text-black font-semibold">{title}</div>
      <div className="text-gray text-[14px] font-semibold">
        <div className="flex items-center gap-1">
          <img
            className="h-[14px]"
            src="./../src/assets/svgs/ic_clock.svg"
            alt="ic_clock"
          />
          {time} phút |
          <img
            className="h-[14px]"
            src="./../src/assets/svgs/ic_person.svg"
            alt="ic_clock"
          />
          {person} |
          <img
            className="h-[14px]"
            src="./../src/assets/svgs/ic_message.svg"
            alt="ic_clock"
          />
          {message}
        </div>
        <div>
          <span className="testitem-info">
            {exam} phần thi | {question} câu hỏi
          </span>
        </div>
        <div className="flex gap-4">
          <Tag title="IELTS Academic" />
          <Tag title="Listening" />
        </div>
        <div className="mt-4">
          <Button title="Chi tiết" border={true} />
        </div>
      </div>
    </div>
  );
}
