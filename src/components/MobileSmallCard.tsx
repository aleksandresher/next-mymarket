import Image from "next/image";
import { MobileProductValues } from "./ProductCreator";

export default function MobileSmallCard({
  item,
}: {
  item: MobileProductValues;
}) {
  return (
    <div className="grid grid-row-4 bg-[#ffffff] rounded-[10px]">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={400}
          className="p-1"
        />
        <div>
          {item.vipplus ? (
            <div className="flex justify-center  w-[60px] rounded-[10px] bg-[#fb8500] absolute top-4 left-10 z-50">
              <p className="text-white">VIP +</p>
            </div>
          ) : (
            ""
          )}

          {item.vip ? (
            <div className="bg-[#0077b6] flex justify-center  w-[60px] rounded-[10px] absolute top-4 left-10 z-50">
              <p className="text-white">VIP</p>
            </div>
          ) : (
            ""
          )}
          {item.supervip ? (
            <div className="flex justify-center bg-[#60e260] w-[60px] rounded-[10px] absolute top-4 left-10 z-50">
              <p className="text-white">S-VIP</p>
            </div>
          ) : (
            ""
          )}
          {item.condition === "new" ? (
            <div className="flex justify-center bg-[#60e260] w-[60px] rounded-[10px] absolute top-4 left-[130px] z-50">
              <p className="text-white">ახალი</p>
            </div>
          ) : (
            <div className="flex justify-center bg-[#0077b6] w-[80px] rounded-[10px] absolute top-4 left-[120px] z-50">
              <p className="text-white">მეორადი</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5 pl-8 pt-2 justify-between pb-3 h-[130px]">
        <p className="text-[#b1b3b6]">{item.owner}</p>
        <h1 className="">{item.title}</h1>
        <h2 className="overflow-y-hidden text-[#b1b3b6]">{item.description}</h2>
      </div>

      <span className="flex justify-between items-center h-[60px] border-t-2 border-[#f1f3f6] p-3 row-span-4">
        <div className="flex items-center">
          <p className="font-bold">{item.price}</p>
          <Image src="/gel.png" width={20} height={10} alt="georgian-gel" />
        </div>

        <div className="flex justify-center hover:bg-yellow-500 bg-[#cfd0d3] w-[32px] h-[32px] p-2 rounded-[8px] cursor-pointer">
          <Image
            src="/favorite-svgrepo-com.svg"
            width={24}
            height={24}
            alt="favorite"
          />
        </div>
      </span>
    </div>
  );
}