export default function HeaderBottom() {
  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex justify-between p-5 pt-0">
        <div className="flex gap-6">
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            მეორადი განვადებით
          </p>
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            Trade In
          </p>
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            მაღაზიები
          </p>
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            ჩემით წავიღებ
          </p>
        </div>

        <div className="flex gap-6">
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            გახსენი მაღაზია
          </p>
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            დახმარება
          </p>
          <p className="text-sm cursor-pointer hover:text-[#eedb6d]">
            კონტაქტი
          </p>
        </div>
      </div>
    </section>
  );
}
