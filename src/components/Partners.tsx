import Image from "next/image";

export default function Partners() {
  return (
    <section className="w-full flex justify-center mt-6">
      {" "}
      <div className="flex w-11/12 mb-[100px] justify-between border border-[#cfcaca]  rounded-[64px] items-center">
        <div className="bg-[#3c74ff] p-3 rounded-[64px] h-full">
          <Image
            src="/partners/tnet.svg"
            width={80}
            height={60}
            alt="tne"
            className=" max-w-20 max-h-10  h-auto"
          />
        </div>

        <Image
          src="/partners/myauto.svg"
          width={80}
          height={30}
          alt="myaouto"
          className=" max-w-20 max-h-8 h-auto"
        />
        <Image
          src="/partners/myparts.svg"
          width={80}
          height={30}
          alt="mymarts"
          className=" max-w-20 max-h-8"
        />
        <Image
          src="/partners/myhome.svg"
          width={80}
          height={30}
          alt="myhome"
          className=" max-w-20 max-h-8"
        />
        <Image
          src="/partners/mymarket.svg"
          width={80}
          height={30}
          alt="mymarket"
          className="max-w-20 max-h-8 w-auto h-auto"
        />
        <Image
          src="/partners/superapp.svg"
          width={70}
          height={20}
          alt="superapp"
          className=" max-w-20 max-h-5 h-auto"
        />
        <Image
          src="/partners/myshop.svg"
          width={70}
          height={20}
          alt="myshop"
          className=" max-w-20 max-h-5 h-auto"
        />
        <Image
          src="/partners/vendoo.svg"
          width={82}
          height={18}
          alt="vendoo"
          className=" max-w-16 max-h-4 h-auto"
        />
        <Image
          src="/partners/tkt.svg"
          width={71}
          height={17}
          alt="tkt.ge"
          className=" max-w-16 max-h-4 h-auto"
        />
        <Image
          src="/partners/swoop.svg"
          width={85}
          height={18}
          alt="swoop"
          className=" max-w-16 max-h-4 h-auto"
        />
        <Image
          src="/partners/livo.svg"
          width={53}
          height={18}
          alt="livo"
          className=" max-w-14 max-h-5 h-auto w-auto pr-1"
        />
      </div>
    </section>
  );
}
