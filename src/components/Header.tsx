import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="w-11/12 flex justify-between mb-7">
      <header className="w-full flex p-5 pb-0 ">
        <div className="flex w-1/2 gap-5">
          <Link href="/">
            <Image
              src="/partners/mymarket.svg"
              height={40}
              width={150}
              alt="mymarket logo"
              className=" max-w-40 max-h-10 w-auto h-auto"
            />
          </Link>

          <div className="flex justify-between  h-[40px] border-[1px] border-[#6699CC]  p-1 rounded-[15px] w-[340px]">
            <input placeholder="ძებნა" className="p-2 outline-none" />
            <span className="flex gap-3">
              <Image src="/camera.png" width={20} height={15} alt="camera" />
              <Image src="/search.svg" width={20} height={20} alt="search" />
            </span>
          </div>
        </div>

        <div className="flex w-1/2 justify-end gap-6">
          <span className="flex gap-2 items-center bg-[#fff4cc] p-2 rounded-[15px]">
            <Image src="/plus.svg" width={20} height={20} alt="plus" />
            <button>დამატება</button>
          </span>
          <span className="flex items-center gap-5">
            <Image src="/message.png" width={20} height={20} alt="message" />
            <Image src="/heart.png" width={20} height={20} alt="message" />
            <Image src="/cart.png" width={20} height={20} alt="cart" />
          </span>

          <span className="flex items-center border-[1px] border-[#6699CC]  p-2 gap-2 rounded-[15px]  ">
            <Image src="/auth.png" width={20} height={20} alt="auth" />
            <p className=" tracking-wide font-bold">შესვლა</p>
          </span>
          <Image
            src="/authorization.svg"
            width={40}
            height={40}
            alt="authorization"
          />
        </div>
      </header>
    </section>
  );
}
