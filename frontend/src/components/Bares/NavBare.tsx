"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBare = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-color-2 w-full h-full flex items-center justify-center z-[2000]  ">
      <div className=" h-[61px] lg:w-[1024px] w-full lg:px-0 px-10 flex items-center justify-between  fixed top-0  bg-color-1">
        <Link href={"/"}>
          <div className="h-full flex items-center justify-center gap-[8px] cursor-pointer">
            <div className="relative w-[28px] h-[28px] flex items-center justify-center">
              <Image src="./assets/Logo.svg" fill={true} alt=""></Image>
            </div>
            <span className="font-fira-code font-semibold tracking-wider text-[16px] capitalize text-color-0">
              Abdelbari
            </span>
          </div>
        </Link>
        <div className="links h-full sm:flex items-center justify-center gap-[32px] hidden ">
          <Link href={"/"}>
            <div className="h-full flex items-center justify-center cursor-pointer ">
              <span className="font-fira-code font-medium text-[16px] text-color-2">
                #
              </span>
              <span
                className={`${
                  path === "/" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                Home
              </span>
            </div>
          </Link>
          <Link href={"/projects"}>
            <div className="h-full flex items-center justify-center cursor-pointer">
              <span className="font-fira-code font-medium text-[16px] text-color-2">
                #
              </span>
              <span
                className={`${
                  path === "/projects" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                Projects
              </span>
            </div>
          </Link>
          <Link href={"/about"}>
            <div className="h-full flex items-center justify-center cursor-pointer">
              <span className="font-fira-code font-medium text-[16px] text-color-2">
                #
              </span>
              <span
                className={`${
                  path === "/about" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                About-me
              </span>
            </div>
          </Link>
        </div>
        {!isOpen && (
          <div
            className="burger w-[24px] h-[24px] flex sm:hidden flex-col items-end cursor-pointer justify-center gap-[5px]"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-full h-[2px] bg-color-3"></div>
            <div className="w-[15px] h-[2px] bg-color-3"></div>
          </div>
        )}
        {isOpen && (
          <div
            className="close w-[24px] h-[24px] flex items-center sm:hidden justify-center relative object-cover"
            onClick={() => setIsOpen(false)}
          >
            <Image src="./assets/close.svg" fill={true} alt=""></Image>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="w-full h-screen flex flex-col  pb-[70px]  fixed top-[60px] bg-color-1  justify-between sm:hidden">
          <div className="h-[338px] gap-[32px] w-[174px] flex flex-col ml-10 items-center justify-center ">
            <div className="w-full cursor-pointer hover:text-color-0">
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                <span className="font-fira-code font-medium text-[32px] text-color-2">
                  #
                </span>
                <span
                  className={`${
                    path === "/" ? "text-color-0" : "text-color-3"
                  } font-fira-code font-medium text-[32px] `}
                >
                  Home
                </span>
              </Link>
            </div>
            <div className="w-full cursor-pointer hover:text-color-0">
              <Link href={"/projects"} onClick={() => setIsOpen(false)}>
                <span className="font-fira-code font-medium text-[32px] text-color-2">
                  #
                </span>
                <span
                  className={`${
                    path === "/projects" ? "text-color-0" : "text-color-3"
                  } font-fira-code font-medium text-[32px] `}
                >
                  Projects
                </span>
              </Link>
            </div>
            <div className="w-ful cursor-pointer hover:text-color-0">
              <Link href={"/about"} onClick={() => setIsOpen(false)}>
                <span className="font-fira-code font-medium text-[32px] text-color-2">
                  #
                </span>
                <span
                  className={`${
                    path === "/about" ? "text-color-0" : "text-color-3"
                  } font-fira-code font-medium text-[32px]  `}
                >
                  About-me
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[208px] h-[64px] flex items-center justify-center gap-2">
              <Link target="_blank" href="https://github.com/abdelbarimessah">
                <div className="h-[64px] w-[64px] relative object-cover hover:scale-90 flex items-center justify-center">
                  <Image src="./assets/Github.svg" fill={true} alt=""></Image>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/abdelbari-messah-60841a232/"
              >
                <div className="h-[64px] w-[64px] relative object-cover hover:scale-90 flex items-center justify-center">
                  <Image src="./assets/linkedin.svg" fill={true} alt=""></Image>
                </div>
              </Link>
              <Link href={"mailto:amessah@student.1337.ma"}>
                <div className="h-[64px] w-[64px] relative object-cover hover:scale-90 flex items-center justify-center">
                  <Image src="./assets/mail.svg" fill={true} alt=""></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBare;
