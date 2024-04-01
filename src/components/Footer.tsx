import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-4/5 grid grid-cols-5 bg-white p-8 justify-between">
      <div>
        <h1 className="text-xl font-medium mb-7">ნავიგაცია</h1>
        <ul className="flex flex-col gap-5">
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              განცხადების დამატება
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              იყიდე ონლაინ
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მეორადი ნივთები
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ფიშინგისგან თავდაცვა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მაღაზიები
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              გახსენი მაღაზია
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              Trade In
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-medium mb-7">დახმარება</h1>
        <ul className="flex flex-col gap-5">
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ხშირად დასმული კითხვები
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მესიჯის მიწერა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              (032) 280 00 35
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              info@mymarket.ge
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-medium mb-7">კატეგორიები</h1>
        <ul className="flex flex-col gap-5">
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მომსახურება
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              გაქირავება
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              სახლი და ბაღი
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              საოჯახო ტექნიკა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ტექნიკა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ნადირობა და თევზაობა
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1></h1>
        <ul className="flex flex-col gap-5 mt-12">
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მუსიკა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              საბავშვო
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              სილამაზე და მოდა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              მშენებლობა და რემონტი
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              სოფლის მეურნეობა
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ცხოველები
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1></h1>
        <ul className="flex flex-col gap-5 mt-12">
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              სპორტი და დასვენება
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              ბიზნესი და დანადგარები
            </li>
          </Link>
          <Link href="">
            <li className=" text-xs text-gray-400 hover:text-black-300">
              წიგნები და კანცელარია
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
