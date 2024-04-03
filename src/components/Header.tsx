import Image from "next/image";

export default function Header() {
  return (
    <section className="flex justify-center">
      <header className="flex p-5 w-4/5">
        <div className="flex w-1/2 gap-5">
          <Image
            src="/partners/mymarket.svg"
            height={40}
            width={150}
            alt="mymarket logo"
          />
          <div className="flex justify-between  h-[40px] border-[1px] border-[#6699CC]  p-1 rounded-[15px] w-[340px]">
            <input placeholder="ძებნა" className="p-2 outline-none" />
            <span className="flex gap-3">
              <Image src="/camera.png" width={20} height={20} alt="camera" />
              <Image src="/search.svg" width={20} height={20} alt="search" />
            </span>
          </div>
        </div>

        <div className="flex w-1/2">
          <span className="flex gap-2 items-center bg-[#fff4cc] p-2 rounded-[15px]">
            <Image src="/plus.svg" width={20} height={20} alt="plus" />
            <button>დამატება</button>
          </span>
          <span className="flex items-center gap-2">
            <Image src="/message.png" width={20} height={20} alt="message" />
            <Image src="/heart.png" width={20} height={20} alt="message" />
            <Image src="/cart.png" width={20} height={20} alt="cart" />
          </span>

          <span className="flex items-center">
            <Image src="/auth.png" width={15} height={15} alt="auth" />
            <p>შესვლა</p>
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
