"use client";
import Image from "next/image";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "@/components/Bares/Footer";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

function Home() {
  const word = ["Front-End", "Back-End", "Full-Stack"];
  const words = ` I’m interested in internship or job opportunities as a full-stack,
  front-end, or back-end developer. However, if you have other
  requests or questions, don’t hesitate to contact me.`;

  return (
    <div className=" h-full w-full flex flex-col gap-[100px] items-center justify-center top-[123px] relative no-scrollbar bg-color-1">

      <div className=" lg:w-[1025px] w-full px-14  xl:px-0 lg:h-[423px] relative  flex lg:flex-row flex-col items-center justify-center ">

        <div className=" h-full w-full lg:w-[537px] flex flex-col gap-[32px] items-center justify-center">
          <div className="w-full h-full lg:h-[84px] ">
            <div className="w-full">
              <span className="font-fira-code text-[25px] font-semibold text-color-0">
                I m Abdelbari Messah
              </span>
              <FlipWords
                className="font-fira-code text-[25px] font-semibold text-color-2"
                words={word}
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
          <div className="w-full h-full lg:h-[50px] ">
            <span className="font-fira-code text-[16px] text-color-3">
              I bring together back-end power and front-end finesse to build
              comprehensive digital solutions
            </span>
          </div>
          <div className="w-full flex items-center justify-start">
            <a href="#contacts">
              <div className="h-[37px] w-[148px] flex items-center justify-center border border-color-2 hover:border-color-3 cursor-pointer">
                <span className="font-fira-code text-[14px] text-color-0 font-medium">
                  Contact me !!
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className=" w-full lg:w-[492px] flex items-center justify-center flex-col ">
          <div className="relative w-full lg:w-[457px]  h-[386px] flex items-center justify-center  ">
            <Image src="./assets/manImage.svg" fill={true} alt=""></Image>
          </div>
          <div className="sm:h-[37px] w-full sm:w-[402px] flex  items-center justify-start px-5  gap-[16px] border border-color-2">
            <div className="w-4 h-4 bg-color-2"></div>
            <div className="flex sm:flex-row flex-col  sm:gap-[10px]  items-start sm:items-center justify-center">
              <span className="font-fira-code font-medium text-[16px] text-color-3">
                Currently working on
              </span>
              <span className="font-fira-code font-semibold text-[16px] text-color-0">
                Matcha
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1025px] xl:px-0 px-14 relative   flex flex-col items-center mb-[63px] justify-center ">
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
        <div className="w-full lg:w-[712px] px-2 sm:h-[95px] border border-color-3 flex items-center justify-center">
          <span className="font-fira-code text-[24px] font-medium text-color-0">
            Talk is cheap. Show me the code.
          </span>
        </div>
        <div className="w-full lg:w-[712px] flex justify-end">
          <div className="w-[162px] h-[63px] border-l border-r border-b  border-color-3  -bottom-[63px] right-[157px] flex items-center justify-center">
            <span className="font-fira-code text-[14px] font-semibold">
              – Linus Torvalds
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full xl:px-0 px-14 lg:w-[1025px] flex items-center justify-center flex-col gap-[50px] ">
        <div className="w-full h-[42px] flex justify-between  items-center">
          <div className="w-[701px] h-full pr-1  flex items-center justify-center gap-[16px]">
            <div className="flex  items-center justify-center">
              <span className="font-fira-code text-[32px] text-color-2 font-medium">
                #
              </span>
              <span className="font-fira-code text-[32px] text-color-0 font-medium">
                Projects
              </span>
            </div>
            <div className="w-full lg:w-[511px] h-[1px]»"></div>
          </div>
          <div className="flex items-center gap-[11px] h-full w-[150px]  justify-center cursor-pointer">
            <div className="h-full w-[100px] flex items-center justify-center ">
              <Link href={"/projects"}>
                <span className="font-fira-code font-semibold text-[16px] ">
                  View all
                </span>
              </Link>
            </div>
            <div className="relative  w-[20px] h-[25px] hidden md:flex items-center justify-center">
              <Image
                src={"./assets/arrowRight.svg"}
                alt="arrow"
                fill={true}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full flex-wrap flex lg:flex-row items-start justify-center gap-[16px]">
          <div className="flex items-start justify-start flex-col w-[330px] h-[440px] border border-color-3">
            <div className="w-full h-[190px] border-b border-color-3 relative flex items-center justify-center object-cover">
              <Image
                src={"./assets/trans.svg"}
                alt="project"
                fill={true}
              ></Image>
            </div>
            <div className="w-full px-4 py-2 border-b border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                NestJs NextJS Typescript Tailwind PosgreSQL Socket.IO Shadcn/ui
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  PONG MASTER
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  Web Application
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://github.com/abdelbarimessah/ft_transcendence"
                  className="font-fira-code text-[16px] font-medium text-color-0"
                >
                  <div className="h-[37px] w-[109px] gap-3 flex items-center justify-center border border-color-2 cursor-pointer hover:border-color-3">
                    Link
                    <div className="w-[15px] h-[15px] mt-1 flex items-center justify-center relative object-cover">
                      <Image
                        src={"./assets/link.svg"}
                        alt="arrow"
                        fill={true}
                      ></Image>
                    </div>
                  </div>
                </LinkPreview>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start flex-col w-[330px] h-[391px] border border-color-3">
            <div className="w-full bg-slate-600 h-[190px] border-b border-color-3 relative flex items-center justify-center object-cover">
              <img src="./assets/irc.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                C/C++ Socket OOP
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  IRC SERVER
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  Internet Relay Chat
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://github.com/abdelhamidbouazi/ft_irc"
                  className="font-fira-code text-[16px] font-medium text-color-0"
                >
                  <div className="h-[37px] w-[109px] gap-3 flex items-center justify-center border border-color-2 cursor-pointer hover:border-color-3">
                    Link
                    <div className="w-[15px] h-[15px] mt-1 flex items-center justify-center relative object-cover">
                      <Image
                        src={"./assets/link.svg"}
                        alt="arrow"
                        fill={true}
                      ></Image>
                    </div>
                  </div>
                </LinkPreview>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start flex-col w-[330px] h-[422px] border border-color-3">
            <div className="w-full h-[185px] border-b border-color-3 relative  flex items-center justify-center object-cover">
              <img src="./assets/inception.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b  border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                Docker Docker-Compose Virtual Machines
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  INCEPTION
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  System Administartion
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://github.com/abdelbarimessah/inception"
                  className="font-fira-code text-[16px] font-medium text-color-0"
                >
                  <div className="h-[37px] w-[109px] gap-3 flex items-center justify-center border border-color-2 cursor-pointer hover:border-color-3">
                    Link
                    <div className="w-[15px] h-[15px] mt-1 flex items-center justify-center relative object-cover">
                      <Image
                        src={"./assets/link.svg"}
                        alt="arrow"
                        fill={true}
                      ></Image>
                    </div>
                  </div>
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" xl:px-0 px-14 w-full lg:w-[1025px] flex items-start justify-start flex-col gap-[48px] z-50">
        <div className="w-full flex items-center justify-start gap-[16px]">
          <div className="flex  items-center justify-center">
            <span className="font-fira-code text-[32px] text-color-2 font-medium">
              #
            </span>
            <span className="font-fira-code text-[32px] text-color-0 font-medium">
              Skills
            </span>
          </div>
          <div className="w-[511px] h-[1px] bg-color-2"></div>
        </div>
        <div className="w-full flex-wrap flex lg:flex-row  items-start justify-center gap-[16px] ">
          <div className="w-[192px] h-[125px] border border-color-3 ">
            <div className="w-full h-[37px] border-b border-color-3 flex items-center pl-3 justify-start">
              <span className="font-fira-code font-semibold text-[16px] ">
                Language
              </span>
            </div>
            <div className=" w-full px-2 pt-2 flex flex-col items-start justify-center ">
              <span className="font-fira-code text-[16px] text-color-3">
                javascript
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                typescript
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                C/C++
              </span>
            </div>
          </div>
          <div className="w-[192px] h-[100px] border border-color-3 ">
            <div className="w-full h-[37px] border-b border-color-3 flex items-center pl-3 justify-start">
              <span className="font-fira-code font-semibold text-[16px] ">
                Other
              </span>
            </div>
            <div className=" w-full px-2 pt-2 flex flex-col items-start justify-center ">
              <span className="font-fira-code text-[16px] text-color-3">
                Html / Css
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                Tailwind
              </span>
            </div>
          </div>
          <div className="w-[192px] h-[150px] border border-color-3 ">
            <div className="w-full h-[37px] border-b border-color-3 flex items-center pl-3 justify-start">
              <span className="font-fira-code font-semibold text-[16px] ">
                Tools
              </span>
            </div>
            <div className=" w-full px-2 pt-2 flex flex-col items-start justify-center ">
              <span className="font-fira-code text-[16px] text-color-3">
                Git/Github
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                CI/CD
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                Docker
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                Docker Compose
              </span>
            </div>
          </div>
          <div className="w-[192px] h-[125px] border border-color-3 ">
            <div className="w-full h-[37px] border-b border-color-3 flex items-center pl-3 justify-start">
              <span className="font-fira-code font-semibold text-[16px] ">
                Databases
              </span>
            </div>
            <div className=" w-full px-2 pt-2 flex flex-col items-start justify-center ">
              <span className="font-fira-code text-[16px] text-color-3">
                MySQL
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                PostgreSQL
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                MariaDB
              </span>
            </div>
          </div>
          <div className="w-[192px] h-[150px] border border-color-3 ">
            <div className="w-full h-[37px] border-b border-color-3 flex items-center pl-3 justify-start">
              <span className="font-fira-code font-semibold text-[16px] ">
                Frameworks
              </span>
            </div>
            <div className=" w-full px-2 pt-2 flex flex-col items-start justify-center ">
              <span className="font-fira-code text-[16px] text-color-3">
                NextJs
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                ReactJs
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                NodeJs
              </span>
              <span className="font-fira-code text-[16px] text-color-3">
                NestJs
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:px-0 px-14 w-full lg:w-[1025px] flex flex-col items-start justify-start gap-[23px] ">
        <div className="w-full flex items-center justify-start gap-[16px]">
          <div className=" flex  items-center justify-center">
            <span className="font-fira-code text-[32px] text-color-2 font-medium">
              #
            </span>
            <span className="font-fira-code text-[32px] text-color-0 font-medium">
              About
            </span>
            <span className="font-fira-code text-[32px] text-color-0 font-medium">
              &nbsp;me
            </span>
          </div>
          <div className="w-[320px] h-[1px] bg-color-2"></div>
        </div>
        <div className="w-full  flex lg:flex-row flex-col items-center justify-center lg:items-start lg:justify-between">
          <div className=" lg:h-[413px] w-full lg:w-[515px] pb-24 gap-[27px] flex flex-col items-center justify-center">
            <div className="w-full">
              <p className="font-fira-code text-[16px] text-color-3">
                Hello, i’m Abdelbari MESSAH
                <br /> <br />
                I m Entry-Level Software Engineer with a passion for software
                development, Front-End and Back-End development and a strong
                foundation in computer science fundamentals.
                <br /> <br />
                Eager to leverage problem-solving skills and technical expertise
                in a fast-paced professional environment to contribute to the
                development of innovative software solutions.
              </p>
            </div>
            <div className="w-full sm:flex-row flex-col flex items-start gap-4 sm:gap-12">
              <Link href="/about">
                <div className="w-[170px] h-[37px] cursor-pointer hover:border-color-3 gap-5 border border-color-2 flex items-center justify-between px-3">
                  <span className="">Read more</span>
                  <div className="w-[15px] h-[15px] mt-1 flex items-center justify-center relative object-cover">
                    <Image
                      src={"./assets/arrowRight.svg"}
                      alt="arrow"
                      fill={true}
                    ></Image>
                  </div>
                </div>
              </Link>
              <a
                href={"http://www.abdelbari.me/assets/messah-fr.pdf"}
                target="_blank"
              >
                <div className="w-[170px] h-[37px] cursor-pointer hover:border-color-3 gap-5 border border-color-2 flex items-center justify-between px-3">
                  <span className="">Download CV</span>
                  <div className="w-[15px] h-[15px] flex items-center justify-center relative object-cover">
                    <Image
                      src={"./assets/download.svg"}
                      alt="arrow"
                      fill={true}
                    ></Image>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="h-[413px] w-[343px] relative">
            <div className="w-full h-full flex items-center justify-end relative object-cover">
              <Image
                src={"./assets/manimage1.svg"}
                alt="arrow"
                fill={true}
              ></Image>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className=" h-[1px] w-[271px] bg-color-2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1025px] xl:px-0 px-14">
        <section id="contacts">
          <div className="w-full lg:w-[1025px] flex flex-col items-start justify-center gap-[45px]">
            <div className="w-full  flex items-center justify-start gap-[16px]">
              <div className="flex  items-center justify-center">
                <span className="font-fira-code text-[32px] text-color-2 font-medium">
                  #
                </span>
                <span className="font-fira-code text-[32px] text-color-0 font-medium">
                  contacts
                </span>
              </div>
              <div className="w-[150px] h-[1px] bg-color-2"></div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-6 lg:gap-0 items-start justify-between ">
              <div className="w-full lg:w-[505px] h-full flex items-center justify-center ">
                <TextGenerateEffect words={words} />
              </div>
              <div className=" w-full lg:w-[404px] pb-4 flex  gap-[16px] flex-col items-center pt-3 justify-start border border-color-3">
                <div className="w-full flex items-center justify-center">
                  <span className="font-fira-code font-semibold text-[16px] text-color-0 ">
                    Message me here
                  </span>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="w-full flex gap-4  flex-col items-center justify-center">
                    <div className="w-full flex lg:flex-row flex-col  items-center justify-start px-1 lg:px-7 cursor-pointer gap-2 lg:gap-7">
                      <div className="relative w-[25px] h-[25px] object-cover">
                        <Image
                          src={"./assets/mail1.svg"}
                          alt="arrow"
                          fill={true}
                        ></Image>
                      </div>
                      <div className="">
                        <span className="font-fira-code  text-[12px] sm:text-[16px] text-color-3">
                          amessah@student.1337.ma
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col  items-center justify-start px-1 lg:px-7 cursor-pointer gap-2 lg:gap-7">
                      <div className="relative w-[25px] h-[25px] object-cover">
                        <Image
                          src={"./assets/phone.svg"}
                          alt="arrow"
                          fill={true}
                        ></Image>
                      </div>
                      <div className="">
                        <span className="font-fira-code text-[12px] sm:text-[16px] text-color-3">
                          +212 651-094250
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col  items-center justify-start px-1 lg:px-7 cursor-pointer gap-2 lg:gap-7">
                      <div className="relative w-[25px] h-[25px] object-cover">
                        <Image
                          src={"./assets/discord.svg"}
                          alt="arrow"
                          fill={true}
                        ></Image>
                      </div>
                      <div className="">
                        <span className="font-fira-code text-[12px] sm:text-[16px] text-color-3">
                          Abdelbari#3138
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

// TODO add the shapes in the home page
// TODO change the main color
// TODO try to change the image of the projects
// TODO add the send mail section in the about page
