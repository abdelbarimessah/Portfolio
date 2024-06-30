import { HoverEffect } from "../../../components/ui/card-hover-effect";
import Footer from "@/components/Bares/Footer";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export default function Projects() {
  return (
    <div className=" h-full w-full flex flex-col gap-[120px] items-center justify-center top-[123px] relative no-scrollbar">
      <div className=" w-[1025px] h-[77px] flex items-start justify-start">
        <div className="h-full w-[183px] gap-[14px] flex flex-col items-center justify-center">
          <div className="w-full flex">
            <span className="font-fira-code font-semibold text-[32px] text-color-2">
              /{" "}
            </span>
            <span className="font-fira-code font-semibold text-[32px] text-color-0">
              Projects
            </span>
          </div>
          <div className="w-full flex ">
            <span className="font-fira-code text-[16px] text-color-0">
              List of my projects
            </span>
          </div>
        </div>
      </div>
      <div className="w-[1025px] h-[919px] flex flex-col items-start justify-start gap-[48px]">
        <div className="w-full flex  items-start justify-start">
          <span className="font-fira-code font-semibold text-[32px] text-color-2">
            #
          </span>
          <span className="font-fira-code font-medium text-[32px] text-color-0">
            Major-projects
          </span>
        </div>
        <div className="w-full flex flex-wrap items-start justify-start gap-4 ">
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
                NestJs, NextJS, Typescript, Tailwind, PosgreSQL, Socket.IO,
                Shadcn/ui
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
                  url="https://www.youtube.com/"
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
            <div className="w-full h-[190px] bg-slate-600  border-b border-color-3 relative flex items-center justify-center object-cover">
              <img src="./assets/irc.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                C/C++, Socket OOP
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
                  url="https://www.youtube.com/"
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
                Docker, Docker-Compose, Virtual Machines
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
                  url="https://www.youtube.com/"
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
            <div className="w-full h-[190px] border-b border-color-3 relative  flex items-center justify-center object-cover">
              <img src="./assets/messah.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b  border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                Nextjs, TypeScript, Taillwind, Aceternity-UI, Shadcn-UI, Figma
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  Abdelbari.me
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  Portfolio
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://www.youtube.com/"
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
            <div className="w-full h-[185px] border-b border-color-3 relative  flex items-center justify-center object-cover">
              <img src="./assets/cub3d.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b  border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                C Language, ray-casting
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  CUB3D
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  3D Game
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://www.youtube.com/"
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
          <div className="flex items-start justify-start flex-col w-[330px] h-[400px] border border-color-3">
            <div className="w-full h-[167px] border-b border-color-3 relative  flex items-center justify-center object-cover">
              <img src="./assets/minishell.png" alt="" />
            </div>
            <div className="w-full px-4 py-2 border-b  border-color-3">
              <span className="font-fira-code text-[16px] text-color-3">
                C Language
              </span>
            </div>
            <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-0 text-[24px] font-medium">
                  MINISHELL
                </span>
              </div>
              <div className="w-full flex items-center justify-start">
                <span className="font-fira-code text-color-3 text-[16px]">
                  Build A Command-Line Interpreter Inspired By Bash
                </span>
              </div>
              <div className="w-full flex items-center  justify-start">
                <LinkPreview
                  url="https://www.youtube.com/"
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
      <div className=" w-[1025px] h-[600px] flex flex-col items-start justify-start gap-12 mb-20">
        <div className="w-full flex  items-start justify-start">
          <span className="font-fira-code font-semibold text-[32px] text-color-2">
            #
          </span>
          <span className="font-fira-code font-medium text-[32px] text-color-0">
            Minor-projects
          </span>
        </div>
        <div className="w-full">
          <HoverEffect items={projects} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Philosophers",
    description: "Solve The Dining Philosophers Problem ",
    link: "https://stripe.com",
    tags: "C Language, Mutex, Semaphore",
  },
  {
    title: "NET PRACTICE",
    description: "Project To Dicover The Networking And The Subnetting",
    link: "https://netflix.com",
    tags: "Subnetting, TCP/UDP, IPV4/IPV6",
  },
  {
    title: "PUSH SWAP",
    description: "Approaches For Data Manipulation And Organization",
    link: "https://google.com",
    tags: "C Language, Linked List",
  },
  {
    title: "SO LONG",
    description: "2D Game Inspired By The Packman Game",
    link: "https://meta.com",
    tags: "C Language, Minilibx",
  },
  {
    title: "BORN2BEROOT",
    description:
      "This Project Is A Introduction To The Wonderfull Word of Virtualization",
    link: "https://amazon.com",
    tags: "VirtualBOX",
  },
  {
    title: "LIBFT",
    description: "This Project Is About Coding a C Library",
    link: "https://microsoft.com",
    tags: "C Language",
  },
];
