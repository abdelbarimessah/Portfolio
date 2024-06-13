import LeftLine from "@/components/NavBare/LeftLine";
import NavBare from "@/components/NavBare/NavBare";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex bg-color-1 flex-col w-screen min-h-screen relative no-scrollbar">
      <div className="flex items-center justify-center w-full absolute top-0">
        <LeftLine />
        <NavBare />
      </div>
      {children}
    </div>
  );

}
