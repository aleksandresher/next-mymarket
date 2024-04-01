import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex w-4/5 mb-[100px] justify-between">
      <div className="bg-[#3c74ff] p-6 rounded-[64px]">
        <Image src="/partners/tnet.svg" width={66} height={20} alt="tne" />
      </div>

      <Image src="/partners/myauto.svg" width={66} height={20} alt="myaouto" />
      <Image src="/partners/myparts.svg" width={68} height={20} alt="mymarts" />
      <Image src="/partners/myhome.svg" width={66} height={20} alt="myhome" />
      <Image
        src="/partners/mymarket.svg"
        width={66}
        height={20}
        alt="mymarket"
      />
      <Image
        src="/partners/superapp.svg"
        width={66}
        height={20}
        alt="superapp"
      />
      <Image src="/partners/myshop.svg" width={69} height={12} alt="myshop" />
      <Image src="/partners/vendoo.svg" width={82} height={18} alt="vendoo" />
      <Image src="/partners/tkt.svg" width={71} height={17} alt="tkt.ge" />
      <Image src="/partners/swoop.svg" width={85} height={18} alt="swoop" />
      <Image src="/partners/livo.svg" width={66} height={20} alt="livo" />
    </div>
  );
}
