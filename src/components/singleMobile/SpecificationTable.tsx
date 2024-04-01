import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MobileProps } from "../mobileList/MobileSmallCard";

export default function SpecificationTable({ data }: { data: MobileProps }) {
  return (
    <div className="w-4/5 bg-[#fff] p-5">
      <Table>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="w-[100px] ">
              <div className="w-fit border-b-2 border-yellow-500">
                <p className="text-lg font-bold pb-2">სპეციფიკაციები</p>
              </div>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ბრენდი
            </TableCell>
            <TableCell>{data?.brand}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              მოდელი
            </TableCell>
            <TableCell>{data?.model}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              OS ვერსია
            </TableCell>
            <TableCell>{data?.osversion}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              Selfie კამერა
            </TableCell>
            <TableCell>{data?.selfcamera} MP</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              SIM ბარათების რაოდენობა
            </TableCell>
            <TableCell>{data?.simnum}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              SIM ბარათის ტიპი
            </TableCell>
            <TableCell>{data?.simtype}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              გამოშვების წელი
            </TableCell>
            <TableCell>{data?.published} წ.</TableCell>
          </TableRow>

          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ეკრანის ზომა
            </TableCell>
            <TableCell>{data?.screensize}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ეკრანის ტიპი
            </TableCell>
            <TableCell>{data?.screentype}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ელემენტის მოცულობა
            </TableCell>
            <TableCell>{data?.battery} mAh</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              კამერის რაოდენობა
            </TableCell>
            <TableCell>{data?.cameranum}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              მახასიათებლები
            </TableCell>
            <TableCell>{data?.features}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ოპერაციული სისტემა
            </TableCell>
            <TableCell>{data?.os}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              შიდა მეხსიერება
            </TableCell>
            <TableCell>{data?.internalmemory}</TableCell>
          </TableRow>
          <TableRow className="border-[#c6c9cc]">
            <TableCell className="text-base text-[#9ea3a3] font-bold  w-2/5 tracking-wide">
              ძირითადი კამერა
            </TableCell>
            <TableCell>{data?.maincamera} MP</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
