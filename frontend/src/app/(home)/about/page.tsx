import Footer from "@/components/Bares/Footer";
import Image from "next/image";

function About() {
  return (
    <div className=" h-full w-full flex flex-col gap-[100px] items-center justify-center top-[123px] relative no-scrollbar ">
      <div className="flex flex-col">
        <div className=" w-[1025px] h-[77px] flex items-start justify-start ">
          <div className="h-full w-[183px] gap-[14px] flex flex-col items-center justify-center">
            <div className="w-full flex">
              <span className="font-fira-code font-semibold text-[32px] text-color-2">
                /{" "}
              </span>
              <span className="font-fira-code font-semibold text-[32px] text-color-0">
                about-me
              </span>
            </div>
            <div className="w-full flex">
              <span className="font-fira-code text-[16px] text-color-0">
                Who am i?
              </span>
            </div>
          </div>
        </div>
        <div className="h-[508px] w-[1025px] flex flex-col items-start justify-start gap-[23px]">
          <div className="w-full flex items-start justify-start">
            <div className="h-full w-[515px] pb-24 gap-[27px] flex flex-col items-center justify-center">
              <div className="w-full">
                <p className="font-fira-code text-[16px] text-color-3">
                  Hello, i’m Abdelbari MESSAH
                  <br /> <br />
                  I m Entry-Level Software Engineer with a passion for software
                  development, Front-End and Back-End development and a strong
                  foundation in computer science fundamentals.
                  <br /> <br />
                  Eager to leverage problem-solving skills and technical
                  expertise in a fast-paced professional environment to
                  contribute to the development of innovative software
                  solutions.
                </p>
              </div>
              <div className="w-full flex items-start gap-12">
                <a
                  href={"http://localhost:8000/assets/messah-fr.pdf"}
                  target="_blank"
                >
                  <div className="w-[170px] h-[37px] cursor-pointer hover:border-color-3 gap-5 border border-color-2 flex items-center justify-center">
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
            <div className="h-full w-1 flex-1 pb-10 relative">
              <div className="absolute h-[1px] w-[271px] bg-color-2 bottom-[37px] right-5"></div>
              <div className="w-full h-full flex items-center justify-end">
                <div className="w-[339px] h-[507px] mt-1 flex items-center justify-center relative object-cover">
                  <Image
                    src={"./assets/manimage1.svg"}
                    alt="arrow"
                    fill={true}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[251px] mb-10 w-[1025px] flex items-start justify-start flex-col gap-[48px] z-50">
        <div className="flex items-center justify-center gap-[16px]">
          <div className="flex  items-center justify-center">
            <span className="font-fira-code text-[32px] text-color-2 font-semibold">
              /{" "}
            </span>
            <span className="font-fira-code text-[32px] text-color-0 font-semibold">
              skills
            </span>
          </div>
        </div>
        <div className="w-full flex items-start justify-center gap-[16px] ">
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
      <div className="mb-10 w-[1025px] flex items-start justify-start flex-col gap-[48px] z-50">
        <div className="flex items-center justify-center gap-[16px]">
          <div className="flex  items-center justify-center">
            <span className="font-fira-code text-[32px] text-color-2 font-semibold">
              /{" "}
            </span>
            <span className="font-fira-code text-[32px] text-color-0 font-semibold">
              time-line
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[60px] ">
          <div className="flex flex-col gap-5 ">
            <div className="w-full flex gap-1">
              <span className="font-fira-code font-medium text-[24px] text-color-2">
                #{" "}
              </span>
              <span className="font-fira-code  font-medium text-[24px] text-color-0">
                Experience
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[1px] h-[120px] bg-color-2"></div>
              <div className="w-full flex flex-col pl-5 gap-2 justify-center items-start">
                <div className="w-full flex items-start justify-start gap-3">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    OCP group khouribga
                  </span>
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    |
                  </span>
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Full-stack intern
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    March 2023 - May 2023 • 2 months, Khouribga
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Develop a comprehensive web application for managing
                    internships and interns, aimed at streamlining the apply of
                    internship process within the company.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="w-full flex gap-1">
              <span className="font-fira-code font-medium text-[24px] text-color-2">
                #{" "}
              </span>
              <span className="font-fira-code  font-medium text-[24px] text-color-0">
                Education
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[1px] h-[100px] bg-color-2"></div>
              <div className="w-full flex flex-col pl-5 gap-2 justify-center items-start">
                <div className="w-full flex items-start justify-start gap-3">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Software Engineer
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    November 2021 - present • Khouribga
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    1337 FUTER IS LOADING (42 network)
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[1px] h-[100px] bg-color-2"></div>
              <div className="w-full flex flex-col pl-5 gap-2 justify-center items-start">
                <div className="w-full flex items-start justify-start gap-3">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Bachelor of Computer Science
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    September 2021 - June 2023 • Beni-Mellal
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Sciences and technologies Faculty
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[1px] h-[100px] bg-color-2"></div>
              <div className="w-full flex flex-col pl-5 gap-2 justify-center items-start">
                <div className="w-full flex items-start justify-start gap-3">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Deust in MIPC (Mathematical- Computer
                    Science-Chemistry-Physics)
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    September 2019 - June 2022 • Beni-Mellal
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Sciences and technologies Faculty
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[1px] h-[100px] bg-color-2"></div>
              <div className="w-full flex flex-col pl-5 gap-2 justify-center items-start">
                <div className="w-full flex items-start justify-start gap-3">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    Baccalaureate in Physical Science
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-3">
                    September 2018 - June 2019 • Oued-Zem
                  </span>
                </div>
                <div className="w-full">
                  <span className="font-fira-code font-medium text-[16px] text-color-0">
                    IBN TOFAIL high school
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
