"use client";
import Image from "next/image";
import React from "react";
import { FlipWords } from "../../../components/ui/flip-words";
import ParticleBackground from "@/components/Particles/Tspraticles";

function Home() {
  const words = ["Front-End", "Back-End"];

  return (
    <div className=" h-full w-full flex flex-col gap-[100px] items-center justify-center top-[123px] relative no-scrollbar">
      <ParticleBackground />
      <div className="absolute w-[155px] h-[155px] border-t border-b border-l border-color-3 top-[75%] left-[97%]"></div>
      <div className=" absolute top-[50%] -left-8">
        <div className="w-[84px] h-[84px] flex items-center justify-center relative object-cover">
          <Image src={"./assets/dotedLeft.svg"} alt="arrow" fill={true}></Image>
        </div>
      </div>
      <div className="w-[1025px] h-[423px] relative  flex items-center justify-center">
        <div className="absolute top-[90px] left-[515px] z-0">
          <div className="relative w-[155px] h-[155px] flex items-center justify-center">
            <Image src="./assets/rectangleLeft.svg" fill={true} alt=""></Image>
          </div>
        </div>
        <div className="absolute top-[300px] left-[870px] z-50">
          <div className="relative w-[70px] h-[70px] flex items-center justify-center">
            <Image src="./assets/rectangleRight.svg" fill={true} alt=""></Image>
          </div>
        </div>
        <div className=" h-full w-[537px] flex flex-col gap-[32px] items-center justify-center">
          <div className="w-full h-[84px] ">
            <div className="w-full">
              <span className="font-fira-code text-[25px] font-semibold text-color-0">
                I m abdelbari Messah
              </span>
              <FlipWords
                className="font-fira-code text-[25px] font-semibold text-color-2"
                words={words}
              />
              <br />
            </div>
            <div className="w-full">
              <span className="font-fira-code text-[25px] font-semibold text-color-0">
                and{" "}
              </span>
              <span className="font-fira-code text-[25px] font-semibold text-color-2">
                software developer{" "}
              </span>
            </div>
          </div>
          <div className="w-full h-[50px] ">
            <span className="font-fira-code text-[16px] text-color-3">
              I bring together back-end power and front-end finesse to build
              comprehensive digital solutions
            </span>
          </div>
          <div className="w-full flex items-center justify-start">
            <div className="h-[37px] w-[148px] flex items-center justify-center border border-color-2 hover:border-color-3 cursor-pointer">
              <span className="font-fira-code text-[14px] text-color-0 font-medium">
                Contact me !!
              </span>
            </div>
          </div>
        </div>
        <div className=" h-full w-[492px]">
          <div className="relative w-[457px] h-[386px] flex items-center justify-center z-10">
            <Image src="./assets/manImage.svg" fill={true} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="w-[1025px] relative flex flex-col items-center mb-[63px] justify-center">
        <div className="absolute w-[91px] h-[91px] border-l border-t border-b border-color-3 -right-[435px] top-[30px]"></div>
        <div className="absolute w-[42px] h-[30px] bg-color-1 -top-4 left-[170px] flex items-center justify-center">
          <div className="relative w-[25px] h-[20px] flex items-center justify-center">
            <Image src={"./assets/quote.svg"} alt="quote" fill={true}></Image>
          </div>
        </div>
        <div className="absolute w-[42px] h-[30px] bg-color-1 -bottom-3 right-[170px] flex items-center justify-center">
          <div className="relative w-[25px] h-[20px] flex items-center justify-center">
            <Image src={"./assets/quote.svg"} alt="quote" fill={true}></Image>
          </div>
        </div>
        <div className="w-[712px] h-[95px] border border-color-3 flex items-center justify-center">
          <span className="font-fira-code text-[24px] font-medium text-color-0">
            Talk is cheap. Show me the code.
          </span>
        </div>
        <div className="w-[162px] h-[63px] border-l border-r border-b border-color-3 absolute -bottom-[63px] right-[157px] flex items-center justify-center">
          <span className="font-fira-code text-[14px] font-semibold">
            – Linus Torvalds
          </span>
        </div>
      </div>
      <div className="h-[518px] w-[1025px] flex items-center justify-center flex-col z-50 gap-[50px] pb-10">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-center gap-[16px]">
            <div className="flex  items-center justify-center">
              <span className="font-fira-code text-[32px] text-color-2 font-medium">
                #
              </span>
              <span className="font-fira-code text-[32px] text-color-0 font-medium">
                Projects
              </span>
            </div>
            <div className="w-[511px] h-[1px] bg-color-2"></div>
          </div>
          <div className="flex items-center gap-[11px] justify-center cursor-pointer">
            <span className="font-fira-code font-semibold text-[16px] ">
              View all
            </span>
            <div className="relative  w-[20px] h-[25px] flex items-center justify-center">
              <Image
                src={"./assets/arrowRight.svg"}
                alt="arrow"
                fill={true}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-center gap-[16px]">
          <div className="flex items-start justify-start flex-col w-[330px] h-[391px] border border-color-3">
            <div className="w-full h-[201px] relative flex items-center justify-center object-cover">
              <Image
                src={"./assets/project1.svg"}
                alt="project"
                fill={true}
              ></Image>
            </div>
            <div className="w-full px-4 py-2 border-b border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                HTML CSS JS NEXTJS
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  ChertNodes
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  Minecraft servers hosting
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <div className="h-[37px] w-[109px] flex items-center justify-center border border-color-2">
                  <span className="font-fira-code text-[16px] font-medium text-color-3">
                    {"Live <~>"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[330px] h-[428px] border border-color-3"></div>
          <div className="w-[330px] h-[422px] border border-color-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
