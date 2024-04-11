"use client";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { DateSelect } from "./DateSelect";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export type UserProps = {
  username: string;
  lastname: string;
  email: string;
  password: string;
  // password2: string;
  phonenumber: string;
  gender: string;
  rules: boolean;
  confidentiality: boolean;
  // year: Date;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();
  const onSubmit = async (formData: UserProps) => {
    try {
      const response = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to register user: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="flex flex-col items-center p-12 gap-4">
      <div className="px-[64px] w-full flex items-start mb-12">
        <Image src="/tineti.svg" width={200} height={50} alt="თნეტი" />
      </div>

      <div className="w-4/5 flex justify-start">
        <h1 className="text-[32px] font-tbc-bold">ანგარიშის შექმნა</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mt-7">
        <div className=" flex flex-col gap-4">
          <div className="w-full flex items-center gap-2">
            <input
              placeholder="ელფოსტა"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="email"
              {...register("email", {
                required: "this field is required",
              })}
            />
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              placeholder="პაროლი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="password"
              {...register("password", {
                required: "this field is required",
              })}
            />
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
          {/* <div className="w-full flex items-center gap-2">
            <input
              placeholder="გაიმეორე პაროლი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="password2"
              {...register("password2", {
                required: "this field is required",
              })}
            />
            {errors.password2?.message && (
              <span>{errors.password2?.message}</span>
            )}
          </div> */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#b0aeac] ">სქესი</h3>
            <div className="flex gap-5">
              {" "}
              <span className="flex gap-3 items-center">
                <input
                  className="w-[30px] h-[30px]"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="ქალი"
                  id="women"
                />
                <label htmlFor="women" className="text-[#b0aeac]">
                  მდედრობითი
                </label>
              </span>
              <span className="flex gap-3 items-center">
                <input
                  className="w-[30px] h-[30px]"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="კაცი"
                  id="man"
                />
                <label htmlFor="man" className="text-[#b0aeac] ">
                  მამრობითი
                </label>
              </span>
            </div>
          </div>

          <div className="w-full flex items-center gap-2">
            <input
              placeholder="სახელი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="username"
              {...register("username", {
                required: "this field is required",
              })}
            />
            {errors.username?.message && (
              <span>{errors.username?.message}</span>
            )}
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              placeholder="გვარი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="lastname"
              {...register("lastname", {
                required: "this field is required",
              })}
            />
            {errors.lastname?.message && (
              <span>{errors.lastname?.message}</span>
            )}
          </div>
          {/* <input type="date" {...register("year")} /> */}
          {/* <DateSelect /> */}
          <div className="w-full flex items-center gap-2">
            <input
              type="number"
              placeholder="ტელეფონის ნომერი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="phonenumber"
              {...register("phonenumber", {
                required: "this field is required",
              })}
            />
            {errors.phonenumber?.message && (
              <span>{errors.phonenumber?.message}</span>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <input
              {...register("rules")}
              type="checkbox"
              className="w-[30px] h-[30px] border-[#dbdbdb] outline-none"
            />
            <p>ვეთანხმები</p>
            <p className="text-[#4181ff]">წესებსა და პირობებს</p>
          </div>
          <div className="flex gap-2 items-center">
            <input
              {...register("confidentiality")}
              type="checkbox"
              className="w-[30px] h-[30px] border-[#dbdbdb] outline-none"
            />
            <p>ვეთანხმები</p>
            <p className="text-[#4181ff]">კონფიდენციალობის პოლიტიკას</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center bg-[#3c74ff] text-white p-4 rounded-[25px] hover:bg-[#5a88fd] cursor-pointer mt-9">
          <button> დადასტურება</button>
        </div>
      </form>
      <div className="w-4/5 flex justify-between mt-6">
        <div className="flex items-center border-[1px] border-[#dbdbdb] px-6 py-2 rounded-[12px] gap-3">
          <Image src="/social/google.svg" width={30} height={30} alt="google" />
          <p>Google</p>
        </div>
        <div className="flex items-center border-[1px] border-[#dbdbdb] px-6 py-2 rounded-[12px] gap-3">
          <Image
            src="/social/facebook.svg"
            width={30}
            height={30}
            alt="facebook"
          />
          <p>Facebook</p>
        </div>
        <div className="flex items-center border-[1px] border-[#dbdbdb] px-6 py-2 rounded-[12px] gap-3">
          <Image src="/social/apple.svg" width={30} height={30} alt="apple" />
          <p>Apple ID</p>
        </div>
      </div>
      <div className="flex p-6 mt-8 gap-2">
        <p className="text-[#9f9d9b] font-tbc-medium ">არსებული ანგარიშით</p>
        <Link href="/login">
          <p className="text-[#6d87ff] font-tbc-medium">შესვლა</p>
        </Link>
      </div>
    </div>
  );
}
