import Slideshow from "../components/ui/Slideshow";
import { images, image } from "../config/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Slideshow images={images} width="w-full" />
      <Slideshow images={image} width="w-page" />
    </div>
  );
}
