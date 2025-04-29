import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bottom-0 flex items-center bg-color-1 justify-center left-0 border-t-2 pt-10 pb-2 border-color-3 ">
      <div className=" lg:px-0 px-5 w-full lg:w-[1025px] lg:gap-0 gap-3 flex flex-col items-center justify-between ">
        <div className="w-full flex flex-col md:flex-row  gap-5   items-start justify-between ">
          <div className="w-[346px] px-2  gap-[16px] flex flex-col items-start justify-start">
            <div className="flex flex-col md:flex-row  justify-start items-start lg:items-center md:gap-[34px] gap-2">
              <div className="h-full flex items-center justify-center gap-[8px] cursor-pointer">
                <div className="relative w-[28px] h-[28px] flex items-center justify-center">
                  <Image
                    src="./assets/LogoPerNew.svg"
                    fill={true}
                    alt=""
                  ></Image>
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
          <div className="h-full w-[112px] flex flex-col items-start  justify-start gap-3 ">
            <div className="w-full flex px-2 items-start justify-start md:items-center md:justify-center">
              <span className="font-medium font-fira-code text-[24px] text-color-0">
                Media
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-2">
              <Link target="_blank" href="https://github.com/abdelbarimessah">
                <div className="relative w-[32px] h-[32px] flex items-center hover:scale-90  cursor-pointer justify-center ">
                  <Image src="./assets/Github.svg" fill={true} alt=""></Image>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/abdelbari-messah-60841a232/"
              >
                <div className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-90 ">
                  <Image src="./assets/linkedin.svg" fill={true} alt=""></Image>
                </div>
              </Link>
              <Link href={"mailto:messahabdelbari1337@gmail.com"}>
                <div className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer hover:scale-90 ">
                  <Image src="./assets/mail.svg" fill={true} alt=""></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center ">
          <span className="font-fira-code text-[16px] text-color-3">
            © Copyright {new Date().getFullYear()} - Made by Abdelari . All
            Right Reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
