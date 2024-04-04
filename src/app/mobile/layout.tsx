import Header from "@components/Header";
export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col  items-center">
      <Header />
      {children}
    </main>
  );
}
