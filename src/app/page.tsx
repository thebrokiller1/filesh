import { FindLibrary } from "./components/FindLibrary";
import Image from "next/image";
import bgImage from "@/bg-image.jpg"

export default function Home() {
  return (
    <main className=" flex justify-center">
      <Image
      src={bgImage}      
      fill={true}
      objectFit="cover"
      alt="Background-Image"
      />
      <FindLibrary></FindLibrary>
    </main>
  );
}
