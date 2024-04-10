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

export function DateSelect() {
  return (
    <Select>
      <SelectTrigger className="w-fullp-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none">
        <SelectValue placeholder="აირჩიე დაბადების წელი" />
      </SelectTrigger>
      <SelectContent className="border-2 border-[#dcdee2] p-0 rounded-[4px]">
        <SelectGroup className="z-60 bg-white ">
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2020">2020</SelectItem>
          <SelectItem value="2019">2019</SelectItem>
          <SelectItem value="2018">2018</SelectItem>
          <SelectItem value="2017">2017</SelectItem>
          <SelectItem value="2016">2016</SelectItem>
          <SelectItem value="2015">2015</SelectItem>
          <SelectItem value="2014">2014</SelectItem>
          <SelectItem value="2013">2013</SelectItem>
          <SelectItem value="2012">2012</SelectItem>
          <SelectItem value="2011">2011</SelectItem>
          <SelectItem value="2010">2010</SelectItem>
          <SelectItem value="2009">2009</SelectItem>
          <SelectItem value="2008">2008</SelectItem>
          <SelectItem value="2007">2007</SelectItem>
          <SelectItem value="2006">2006</SelectItem>
          <SelectItem value="2005">2005</SelectItem>
          <SelectItem value="2004">2004</SelectItem>
          <SelectItem value="2003">2003</SelectItem>
          <SelectItem value="2002">2002</SelectItem>
          <SelectItem value="2001">2001</SelectItem>
          <SelectItem value="2000">2000</SelectItem>
          <SelectItem value="1999">1999</SelectItem>
          <SelectItem value="1998">1998</SelectItem>
          <SelectItem value="1997">1997</SelectItem>
          <SelectItem value="1996">1996</SelectItem>
          <SelectItem value="1995">1995</SelectItem>
          <SelectItem value="1994">1994</SelectItem>
          <SelectItem value="1993">1993</SelectItem>
          <SelectItem value="1992">1992</SelectItem>
          <SelectItem value="1991">1991</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
