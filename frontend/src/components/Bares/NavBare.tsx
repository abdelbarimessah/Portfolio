"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBare = () => {
  const path = usePathname();

  return (
    <div className="w-full h-full flex items-center justify-center z-[1000] ">
      <div className="bg-color-1 h-[61px] w-[1024px]  flex items-center justify-between fixed top-0">
        <div className="h-full flex items-center justify-center gap-[8px] cursor-pointer">
          <div className="relative w-[28px] h-[28px] flex items-center justify-center">
            <Image src="./assets/Logo.svg" fill={true} alt=""></Image>
          </div>
          <span className="font-fira-code font-semibold tracking-wider text-[16px] capitalize text-color-0">
            Abdelbari
          </span>
        </div>
        <div className="h-full flex items-center justify-center gap-[32px] ">
          <Link href={"/home"}>
            <div className="h-full flex items-center justify-center cursor-pointer ">
              <span className="font-fira-code font-medium text-[16px] text-color-2">
                #
              </span>
              <span
                className={`${
                  path === "/home" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                home
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
                projects
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
                  path === "/about-me" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                about-me
              </span>
            </div>
          </Link>
          <Link href={"/contacts"}>
            <div className="h-full flex items-center justify-center cursor-pointer">
              <span className="font-fira-code font-medium text-[16px] text-color-2">
                #
              </span>
              <span
                className={`${
                  path === "/contacts" ? "text-color-0" : "text-color-3"
                } hover:text-color-0 font-fira-code font-medium text-[16px]`}
              >
                contacts
              </span>
            </div>
          </Link>
          <div className="h-full flex items-center justify-center gap-1 cursor-pointer">
            <span className="font-fira-code font-medium text-[16px] text-color-3 hover:text-color-0">
              EN
            </span>
            <div className="relative w-[12px] h-[12px] flex items-center justify-center">
              <Image src="./assets/arrowDown.svg" fill={true} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBare;
