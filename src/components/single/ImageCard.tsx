import Image from "next/image";

import { MobileType, LaptopType } from "@lib/mobile-laptop";

type Props = {
  data: MobileType | LaptopType;
};

export default function ImageCardSingle({ data }: Props) {
  return (
    <div className="relative">
      {data ? (
        <Image src={data?.image} width={300} height={300} alt="mobile" />
      ) : null}
      <div>
        {data?.vipplus ? (
          <div className="flex justify-center  w-[60px] rounded-[10px] bg-[#fb8500] absolute top-4 left-10 z-50">
            <p className="text-white">VIP +</p>
          </div>
        ) : (
          ""
        )}

        {data?.vip ? (
          <div className="bg-[#0077b6] flex justify-center  w-[60px] rounded-[10px] absolute top-4 left-10 z-50">
            <p className="text-white">VIP</p>
          </div>
        ) : (
          ""
        )}
        {data?.supervip ? (
          <div className="flex justify-center bg-[#60e260] w-[60px] rounded-[10px] absolute top-4 left-10 z-50">
            <p className="text-white">S-VIP</p>
          </div>
        ) : (
          ""
        )}
        {data?.condition === "new" ? (
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
  );
}
