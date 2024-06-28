import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function LeftLine() {
  return (
    <div className=" z-50 fixed left-0 top-0 ml-[17px] w-[32px] h-[311px] flex justify-start items-center flex-col gap-2">
      <div className="w-[1px] h-[191px] bg-color-3"></div>
      <div className="flex flex-col items-center justify-center z-50">
        <Link target="_blank" href="https://github.com/abdelbarimessah">
          <div className="relative w-[32px] h-[32px] flex items-center hover:scale-90  cursor-pointer justify-center ">
            <Image src="./assets/Github.svg" fill={true} alt=""></Image>
          </div>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/abdelbari-messah-60841a232/">
          <div className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-90 ">
            <Image src="./assets/linkedin.svg" fill={true} alt=""></Image>
          </div>
        </Link>
        <Link  href={"mailto:abdelbari.messah.dev@gmail.com"}>
        <div className="relative w-[32px] h-[32px] flex items-center justify-center hover:scale-90 cursor-pointer">
          <Image src="./assets/mail.svg" fill={true} alt=""></Image>
        </div>
        </Link>
      </div>
    </div>
  );
}

