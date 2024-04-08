"use client";
import { LocationSelect } from "@components/side-accordion/LocationSelect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function MobileSideBar() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[240px] bg-[#fff] p-4 mt-5 shadow-md rounded-[10px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>ფასი</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-4 border-2 border-gray-300 rounded-[10px]">
            <input
              type="number"
              placeholder="დან"
              className="w-1/2 p-1 text-center"
            />
            <input
              type="number"
              placeholder="მდე"
              className="w-1/2 text-center p-3"
            />
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-3 p-2">
              <Switch id="withoutPrice" />
              <Label htmlFor="withoutPrice" className="font-8">
                "ფასი შეთანხმებით"-ის <br></br>გარეშე
              </Label>
            </span>
            <span className="flex items-center gap-3 p-2">
              <Switch id="sale" />
              <Label htmlFor="sale">მხოლოდ ფასდაკლებული</Label>
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>მდებარეობა</AccordionTrigger>
        <AccordionContent className="">
          <LocationSelect />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>ყიდვის ფორმა</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <button className="w-fit border-2 p-2 border-[#e6e9ee] rounded-[10px]">
              მე შევხვდები
            </button>
            <button className="w-fit border-2 p-2 border-[#e6e9ee] rounded-[10px]">
              საკურიეროს დახმარებით
            </button>
            <button className="w-fit border-2 p-2 border-[#e6e9ee] rounded-[10px]">
              ორივე
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
