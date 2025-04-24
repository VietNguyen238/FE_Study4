import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  images: string[];
  width: string;
}

export default function Slideshow({ images, width }: Props) {
  return (
    <div className={width}>
      <Slide
        duration={3000}
        indicators={true}
        autoplay={true}
        arrows={true}
        infinite={true}
        nextArrow={
          <button className="bg-transparent border-none">
            <img
              src="./../../../src/assets/svgs/ic_next_arrow.svg"
              alt="Next"
              className="h-8"
            />
          </button>
        }
        prevArrow={
          <button className="bg-transparent border-none">
            <img
              src="./../../../src/assets/svgs/ic_prev_arrow.svg"
              alt="prev"
              className="h-8"
            />
          </button>
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-full" src={image} />
          </div>
        ))}
      </Slide>
    </div>
  );
}
