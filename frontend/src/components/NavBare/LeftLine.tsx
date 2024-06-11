
import Image from "next/image"


export default function LeftLine() {
    return (
        <div className=" ml-[17px] w-[32px] h-[311px] flex justify-start items-center flex-col gap-2">
            <div className="w-[1px] h-[191px] bg-color-3"></div>
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-[32px] h-[32px] flex items-center justify-center">
                    <Image
                        src="./assets/Github.svg"
                        fill={true}
                        alt=""
                    >
                    </Image>
                </div>
                <div className="relative w-[32px] h-[32px] flex items-center justify-center">
                    <Image
                        src="./assets/linkedin.svg"
                        fill={true}
                        alt=""
                    >
                    </Image>
                </div>
                <div className="relative w-[32px] h-[32px] flex items-center justify-center">
                    <Image
                        src="./assets/mail.svg"
                        fill={true}
                        alt=""
                    >
                    </Image>
                </div>
            </div>
        </div>
    )
}
