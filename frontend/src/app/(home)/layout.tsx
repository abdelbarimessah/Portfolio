import LeftLine from "@/components/NavBare/LeftLine";
import NavBare from "@/components/NavBare/NavBare";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex bg-color-1 flex-col w-screen min-h-screen">

      <NavBare />
      <LeftLine/>
      {children}

    </div>
  )

}
