import Header from "@components/Header";
import HeaderBottom from "@components/header-bottom";
import Footer from "@components/Footer";
import Partners from "@components/Partners";
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
      <Footer />
      <Partners />
    </section>
  );
}
