import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWrapper({
  items,
  header,
}: {
  header: string;
  items: string[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-[205px]   border-2 border-[#a3c4df] rounded-[8px]">
        <SelectValue placeholder={header} />
      </SelectTrigger>
      <SelectContent className="border-2 border-[#dcdee2] p-0 rounded-[4px]">
        <SelectGroup className="z-60 bg-white ">
          {items?.map((item, idx) => {
            return (
              <SelectItem value={item} key={idx}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
