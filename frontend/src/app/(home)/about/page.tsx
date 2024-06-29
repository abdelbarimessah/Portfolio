import Image from "next/image";

function About() {
  return (
    <div className=" h-full w-full flex flex-col gap-[1px] items-center justify-center top-[123px] relative no-scrollbar">
      <div className=" w-[1025px] h-[77px] flex items-start justify-start">
        <div className="h-full w-[183px] gap-[14px] flex flex-col items-center justify-center">
          <div className="w-full flex">
            <span className="font-fira-code font-semibold text-[32px] text-color-2">
              /{" "}
            </span>
            <span className="font-fira-code font-semibold text-[32px] text-color-0">
              About-me
            </span>
          </div>
          <div className="w-full flex">
            <span className="font-fira-code text-[16px] text-color-0">
              Who am i?
            </span>
          </div>
        </div>
      </div>
      <div className="h-[508px] w-[1025px]  flex flex-col items-start justify-start gap-[23px]">
        <div className="w-full flex items-start justify-start">
          <div className="h-full w-[515px] pb-24 gap-[27px] flex flex-col items-center justify-center">
            <div className="w-full">
              <p className="font-fira-code text-[16px] text-color-3">
                Hello, i’m Elias!
                <br /> <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
                <br /> <br />
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
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
  );
}

export default About;
