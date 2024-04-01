import Image from "next/image";

export default function BuyCard({ price }: { price: number }) {
  return (
    <div className="w-[300px] flex flex-col gap-3 bg-[#fff] p-3 rounded-[10px]">
      <div className="flex items-center gap-1 p-1">
        <h1 className="text-2xl font-bold">{price}.00</h1>
        <Image src="/gel.png" width={25} height={25} alt="gelIcon" />
      </div>
      <button className="bg-[#028d71] p-2 rounded-[10px] text-white font-medium hover:bg-[#367949]">
        განვადებით ყიდვა
      </button>
      <button className="bg-[#00aeef] p-2 rounded-[10px] text-white font-medium hover:bg-[#58b8db]">
        აიღე სესხი 2 წუთში
      </button>
      <button className="bg-[#edf0fe] p-2 rounded-[10px] text-[#00aeef] font-bold hover:bg-[#edeef0]">
        შეთავაზე ფასი
      </button>
    </div>
  );
}
