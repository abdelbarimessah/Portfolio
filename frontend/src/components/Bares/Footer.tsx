import Image from "next/image";

function Footer() {
  return (
    <div className="w-full h-[208px] bottom-0 flex items-center justify-center left-0 border-t-2 border-color-3">
      <div className="h-[144px] w-[1025px] bg-color-31 flex flex-col items-center justify-between">
        <div className="w-full h-[75px] flex items-start justify-between ">
          <div className="w-[346px] h-[58px] gap-[16px] flex flex-col items-start justify-start">
            <div className="flex justify-start items-center gap-[34px]">
              <div className="h-full flex items-center justify-center gap-[8px] cursor-pointer">
                <div className="relative w-[28px] h-[28px] flex items-center justify-center">
                  <Image src="./assets/LogoPer.svg" fill={true} alt=""></Image>
                </div>
                <span className="font-fira-code font-semibold tracking-wider text-[16px] capitalize text-color-2">
                  Abdelbari
                </span>
              </div>
              <span className="font-fira-code text-[16px] text-color-3">
                messahabdelbari1337@gmail.com
              </span>
            </div>
            <div className="w-full flex items-start">
              <span className="font-fira-code text-color-0  text-[16px] ">
                Full-Stack and Software developer
              </span>
            </div>
          </div>
          <div className="h-full w-[112px] flex flex-col items-start justify-start gap-3 ">
            <div className="w-full flex items-center justify-center">
              <span className="font-medium font-fira-code text-[24px] text-color-0">
                Media
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-2">
              <div className="relative w-[32px] h-[32px] flex items-center hover:scale-90  cursor-pointer justify-center ">
                <Image src="./assets/Github.svg" fill={true} alt=""></Image>
              </div>
              <div className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-90 ">
                <Image src="./assets/linkedin.svg" fill={true} alt=""></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[21px flex items-center justify-center ">
          <span className="font-fira-code text-[16px] text-color-3">
            © Copyright 2024. Made by Abdelari
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
