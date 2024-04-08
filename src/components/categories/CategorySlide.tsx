import Image from "next/image";
import Link from "next/link";
export default function CategorySlide() {
  return (
    <section className="w-11/12 flex flex-col mt-6 gap-3 p-5">
      <div className="flex justify-between">
        <p className="font-bold">ძებნა კატეგორიის მიხედვით</p>
        <p className="font-bold">ყველა კატეგორია</p>
      </div>
      <div className="flex justify-between">
        <div className="bg-black w-[170px] h-[120px] rounded-[14px] relative p-1">
          <Image
            src="/categories/menu.svg"
            width={52}
            height={50}
            alt="ყველა კატეგორია"
            className=" max-w-16 max-h-16 h-auto"
          />
          <p className="absolute text-white p-2">
            ყველა <br></br> კატეგორია
          </p>
        </div>
        <div className="relative">
          <Image
            src="/categories/1.jpg"
            width={170}
            height={120}
            alt="შეიძინე განვადებით"
          />
          <p className="absolute top-1 p-2 font-bold tracking-wide">
            შეიძინე <br></br> განვადებით
          </p>
        </div>
        <Link href="/shop/mobile">
          {" "}
          <div className="relative">
            <Image
              src="/categories/2.jpg"
              width={170}
              height={120}
              alt="მობილური ტელეფონი"
            />
            <p className="absolute top-1 p-2 font-bold tracking-wide">
              მობილური <br></br> ტელეფონი
            </p>
          </div>
        </Link>

        <div className="relative">
          <Image
            src="/categories/3.jpg"
            width={170}
            height={120}
            alt="სათამაშო კონსოლი"
          />
          <p className="absolute top-1 p-2 font-bold tracking-wide">
            სათამაშო <br></br> კონსოლი
          </p>
        </div>
        <div className="relative">
          <Image
            src="/categories/4.jpg"
            width={170}
            height={120}
            alt="ნოუთბუქი"
          />
          <p className="absolute top-1 p-2 font-bold tracking-wide">ნოუთბუქი</p>
        </div>
        <div className="relative">
          <Image src="/categories/5.jpg" width={170} height={120} alt="ძაღლი" />
          <p className="absolute top-1 p-2 font-bold tracking-wide">ძაღლი</p>
        </div>
        <Link href="/shop/bicycle">
          <div className="relative">
            <Image
              src="/categories/6.jpg"
              width={170}
              height={120}
              alt="ველოსიპედი"
            />
            <p className="absolute top-1 p-2 font-bold tracking-wide">
              ველოსიპედი
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
