import ParticleBackground from "@/components/Particles/Tspraticles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-color-1 flex-col w-screen min-h-screen relative no-scrollbar">
      <ParticleBackground />
      {children}
    </div>
  );
}
