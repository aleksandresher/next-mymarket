"use client";
import { LocationSelect } from "@components/side-accordion/LocationSelect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionButton from "@components/side-accordion/AccordionBtn";
import { useState } from "react";
import { SelectWrapper } from "@components/side-accordion/Select";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function MobileSideBar() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[240px] bg-[#fff] p-4 mt-5 shadow-md rounded-[10px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-sm tracking-wide">ფასი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-4 border-2 border-gray-300 rounded-[10px]">
            <input
              type="number"
              placeholder="დან"
              className="w-1/2 p-1 text-center remove-arrow"
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
        <AccordionTrigger>
          <p className="text-sm tracking-wide">მდებარეობა</p>
        </AccordionTrigger>
        <AccordionContent className="">
          <LocationSelect />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <p className="text-sm tracking-wide">ყიდვის ფორმა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <AccordionButton
              content="მე შევხვდები"
              option="მე შევხვდები"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="საკურიეროს დახმარებით"
              option="საკურიეროს დახმარებით"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="ორივე"
              option="ორივე"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="flex flex-col items-start">
            <p className="text-sm">განვადებით</p>
            <p className="text-sm">სარგებლობა</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-2">
            <AccordionButton
              content="ყველა"
              option="ყველა"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="დიახ"
              option="დიახ"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="არა"
              option="არა"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <p className="text-sm">ნივთის მდგომარეობა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <AccordionButton
              content="მეორადი"
              option="მეორადი"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="ახალი"
              option="ახალი"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <p className="text-sm">გამყიდველის ტიპი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <AccordionButton
              content="ყველა"
              option="ყველა"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="კერძო"
              option="კერძო"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="მაღაზია"
              option="მაღაზია"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          <p className="text-sm">განცხადების ტიპი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <AccordionButton
              content="ყველა"
              option="ყველა"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="ვყიდი"
              option="ვყიდი"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
            <AccordionButton
              content="ვაბარებ"
              option="ვაბარებ"
              onClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          <p className="text-sm">ბრენდი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <SelectWrapper
              items={["Acer", "AGM", "Amazon", "Apple", "Google", "Samsung"]}
              header="ბრენდი"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          <p className="text-sm">გამოშვების წელი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>
          <p className="text-sm">კამერის რაოდენობა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>
          <p className="text-sm">Selfie კამერა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>
          <p className="text-sm">SIM ბარათისტიპი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger>
          <div className="flex flex-col items-start">
            <p className="text-sm">SIM ბარათების</p>
            <p className="text-sm">რაოდენობა</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-14">
        <AccordionTrigger>
          <p className="text-sm">IP სერტიფიკატი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-15">
        <AccordionTrigger>
          <p className="text-sm">ქსელი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-16">
        <AccordionTrigger>
          <p className="text-sm">მახასიათებლები</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-17">
        <AccordionTrigger>
          <p className="text-sm">ოპერაციული სისტემა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-18">
        <AccordionTrigger>
          <p className="text-sm">OS ვერსია</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-19">
        <AccordionTrigger>
          <div className="flex flex-col items-start">
            <p className="text-sm">ოპერატიული</p>
            <p className="text-sm"> მეხსიერება</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-20">
        <AccordionTrigger>
          <p className="text-sm">შიდა მეხსიერება</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-21">
        <AccordionTrigger>
          <p className="text-sm">ბარათის სლოტი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-22">
        <AccordionTrigger>
          <p className="text-sm">ეკრანის ზომა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-23">
        <AccordionTrigger>
          <p className="text-sm">ეკრანის ტიპი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-24">
        <AccordionTrigger>
          <p className="text-sm">სენსორული ეკრანი</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-25">
        <AccordionTrigger>
          <p className="text-sm">ძირითადი კამერა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-26">
        <AccordionTrigger>
          <p className="text-sm">ელემენტის მოცულობა</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-27">
        <AccordionTrigger>
          <p className="text-sm">შშმპ ადაპტირებული</p>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2"></div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
