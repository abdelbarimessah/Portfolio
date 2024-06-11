
import Image from "next/image";


const NavBare = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="h-[61px] w-[1024px]  flex items-center justify-between fixed top-0">
                <div className="h-full flex items-center justify-center gap-[8px] cursor-pointer">
                    <div className="relative w-[17px] h-[17px] flex items-center justify-center">
                        <Image
                            src="./assets/Logo.svg"
                            fill={true}
                            alt=""
                        >
                        </Image>
                    </div>
                    <span className="font-fira-code font-semibold tracking-wider text-[16px] capitalize text-color-0">
                        Abdelbari
                    </span>
                </div>
                <div className="h-full flex items-center justify-center gap-[32px] ">
                    <div className="h-full flex items-center justify-center cursor-pointer">
                        <span className="font-fira-code font-medium text-[16px] text-color-2">#</span>
                        <span className="font-fira-code font-medium text-[16px] text-color-3">home</span>
                    </div>
                    <div className="h-full flex items-center justify-center cursor-pointer">
                        <span className="font-fira-code font-medium text-[16px] text-color-2">#</span>
                        <span className="font-fira-code font-medium text-[16px] text-color-3">works</span>
                    </div>
                    <div className="h-full flex items-center justify-center cursor-pointer">
                        <span className="font-fira-code font-medium text-[16px] text-color-2">#</span>
                        <span className="font-fira-code font-medium text-[16px] text-color-3">about-me</span>
                    </div>
                    <div className="h-full flex items-center justify-center cursor-pointer">
                        <span className="font-fira-code font-medium text-[16px] text-color-2">#</span>
                        <span className="font-fira-code font-medium text-[16px] text-color-3">contacts</span>
                    </div>
                    <div className="h-full flex items-center justify-center gap-1 cursor-pointer">
                        <span className="font-fira-code font-medium text-[16px] text-color-3">EN</span>
                        <div className="relative w-[12px] h-[12px] flex items-center justify-center">
                            <Image
                                src="./assets/arrowDown.svg"
                                fill={true}
                                alt=""
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBare;