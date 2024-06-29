import { HoverEffect } from "../../../components/ui/card-hover-effect";
import Footer from "@/components/Bares/Footer";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export default function Projects() {
  return (
    <div className=" h-full w-full flex flex-col gap-[100px] items-center justify-center top-[123px] relative no-scrollbar">
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
          </div>{" "}
          <div className="flex items-start justify-start flex-col w-[330px] h-[422px] border border-color-3">
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
          </div>{" "}
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
          </div>{" "}
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
          </div>{" "}
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
    title: "Stripe",
    description: "A technology company that builds economic ",
    link: "https://stripe.com",
    tags: "html , css , javsc",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variet nected devices.",
    link: "https://netflix.com",
    tags: "html , css , javsc",
  },
  {
    title: "Google",
    description: "A multinational technology company that.",
    link: "https://google.com",
    tags: "html , css , javsc",
  },
  {
    title: "Meta",
    description: "A multinational technology company that.",
    link: "https://meta.com",
    tags: "html , css , javsc",
  },
  {
    title: "Amazon",
    description: "A multinational technology company .",
    link: "https://amazon.com",
    tags: "html , css , javsc",
  },
  {
    title: "Microsoft",
    description: "A multinational technology company  and related services.",
    link: "https://microsoft.com",
    tags: "html , css , javsc",
  },
];
