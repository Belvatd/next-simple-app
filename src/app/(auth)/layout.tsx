export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      {children}
    </div>
  );
}
