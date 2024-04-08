import Header from "@components/Header";
import HeaderBottom from "@components/header-bottom";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <HeaderBottom />
      <main className="bg-[#f7f8fa] my-12"> {children}</main>
    </section>
  );
}
