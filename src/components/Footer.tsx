import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center">
      <section className="w-11/12 grid grid-cols-5 bg-white p-8 justify-between">
        {" "}
        <div className="p-5">
          <h1 className="text-xl font-medium mb-7">ნავიგაცია</h1>
          <ul className="flex flex-col gap-5">
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black hover:text-black">
                განცხადების დამატება
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                იყიდე ონლაინ
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მეორადი ნივთები
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ფიშინგისგან თავდაცვა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მაღაზიები
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                გახსენი მაღაზია
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                Trade In
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-medium mb-7">დახმარება</h1>
          <ul className="flex flex-col gap-5">
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ხშირად დასმული კითხვები
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მესიჯის მიწერა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                (032) 280 00 35
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                info@mymarket.ge
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-medium mb-7">კატეგორიები</h1>
          <ul className="flex flex-col gap-5">
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მომსახურება
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                გაქირავება
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                სახლი და ბაღი
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                საოჯახო ტექნიკა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ტექნიკა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ნადირობა და თევზაობა
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1></h1>
          <ul className="flex flex-col gap-5 mt-12">
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მუსიკა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                საბავშვო
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                სილამაზე და მოდა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                მშენებლობა და რემონტი
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                სოფლის მეურნეობა
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ცხოველები
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1></h1>
          <ul className="flex flex-col gap-5 mt-12">
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                სპორტი და დასვენება
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                ბიზნესი და დანადგარები
              </li>
            </Link>
            <Link href="">
              <li className=" text-xs text-gray-400 hover:text-black">
                წიგნები და კანცელარია
              </li>
            </Link>
          </ul>
        </div>
      </section>{" "}
    </footer>
  );
}
