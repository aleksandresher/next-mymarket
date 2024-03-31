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

export function LocationSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] p-4 z-10 border-2 border-[#a3c4df] rounded-[8px]">
        <SelectValue placeholder="აირჩიე მდებარეობა" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="თბილისი">თბილისი</SelectItem>
          <SelectItem value="აბაშა">აბაშა</SelectItem>
          <SelectItem value="ამბროლაური">ამბროლაური</SelectItem>
          <SelectItem value="ასპინძა">ასპინძა</SelectItem>
          <SelectItem value="ახმეტა">ახმეტა</SelectItem>
          <SelectItem value="ბათუმი">ბათუმი</SelectItem>
          <SelectItem value="ბოლნისი">ბოლნისი</SelectItem>
          <SelectItem value="ბორჯომი">ბორჯომი</SelectItem>
          <SelectItem value="გორი">გორი</SelectItem>
          <SelectItem value="ქუთაისი">ქუთაისი</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
