import Image from "next/image";

export default function HomeSearch() {
  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 pl-5 pr-5 flex flex-col gap-5">
        <h1 className="text-2xl font-tbc-medium tracking-wide">
          ყველაფერი, რასაც ეძებ
        </h1>
        <div className="w-full flex items-center ">
          <div className="w-4/5 flex ">
            <input
              placeholder="მაგ: Iphone 14"
              className="border-2 w-full p-4 rounded-2xl outline-none border-[#fec900] "
            />
          </div>

          <div className="w-1/5 flex gap-3">
            <span className="flex justify-center items-center pl-3">
              <Image
                src="/settings.png"
                width={50}
                height={50}
                alt="search filter"
              />
            </span>
            <span className=" bg-[#fec900]  flex justify-center items-center gap-3 rounded-2xl p-4 w-full hover:bg-[#f5d562] cursor-pointer">
              <Image
                src="/search.svg"
                width={20}
                height={20}
                alt="search icon"
              />
              <p className="font-tbc-medium tracking-wide text-[18px]">ძებნა</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
