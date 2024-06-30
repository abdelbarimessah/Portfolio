"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    tags: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-color-2 dark:bg-slate-800/[0.8] block"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-start justify-start flex-col w-[331px] h-[232px]">
              <div className="w-full h-[37px] px-4 flex items-center border-b border-color-3">
                <NewCardTags>{item.tags}</NewCardTags>
              </div>
              <div className="w-full flex flex-col items-start gap-[16px] px-[16px] py-[10px] justify-start">
                <div className="w-full flex items-center justify-start">
                  <NewCardTitle>{item.title}</NewCardTitle>
                </div>
                <div className="w-full flex items-center justify-start">
                  <NewCardDiscription>{item.description}</NewCardDiscription>
                </div>
                <div className="w-full flex items-center  justify-start">
                  <Link href={item?.link}>
                    <div className="h-[37px] w-[109px] gap-3 flex items-center justify-center border border-color-2 cursor-pointer hover:border-color-3">
                      Github
                      <div className="w-[15px] h-[15px] mt-1 flex items-center justify-center relative object-cover">
                        <Image
                          src={"./assets/link.svg"}
                          alt="arrow"
                          fill={true}
                        ></Image>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " h-full w-full  overflow-hidden bg-color-1 border border-transparent dark:border-white/[0.2] group-hover:border-color-2 border-color-3  relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const NewCardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="font-fira-code text-color-0 text-[24px] font-medium">{children}</span>
  );
};


export const NewCardDiscription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="font-fira-code text-color-3 text-[16px]">{children}</span>
  );
};

export const NewCardTags = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="font-fira-code text-[16px] text-color-3">{children}</span>
  );
};


// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn(" font-fira-code font-medium text-[24px]", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
