"use client";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

export type UserProps = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();

  const queryClient = useQueryClient();

  //   const mutation = useMutation({
  //     mutationFn: async (data: UserProps) =>
  //       await fetch(`${URL}/api/user/new`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },

  //         body: JSON.stringify({ data }),
  //       }),
  //     onSuccess: () => {
  //       toast({ description: "user created succesfully!" });
  //       queryClient.invalidateQueries({ queryKey: ["mobile"] });
  //     },
  //     onError: () => {
  //       toast({ description: "Error occured", variant: "destructive" });
  //     },
  //   });
  const onSubmit = (formData: UserProps) => {
    console.log(formData);
    // mutation.mutate(formData);
  };
  return (
    <div className="flex flex-col items-center p-12 gap-4">
      <div className="px-[64px] w-full flex items-start mb-12">
        <Image src="/tineti.svg" width={200} height={50} alt="თნეტი" />
      </div>

      <div className="w-4/5 flex justify-start">
        <h1 className="text-[32px] font-tbc-bold">ავტორიზაცია</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mt-7">
        <div className=" flex flex-col gap-4">
          <div className="w-full flex items-center gap-2">
            <input
              placeholder="ელფოსტა | ტელეფონის ნომერი"
              className="p-2  rounded-[8px] w-full h-[55px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="email"
              {...register("email", {
                required: "this field is required",
              })}
            />
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </div>

          <div className="flex items-center gap-2">
            <input
              placeholder="პაროლი"
              type="password"
              className="w-full p-2 h-[55px]  rounded-[8px] border-[2px] border-[#dbdbdb] focus:border-[#3c74ff] focus:border-2 py-4 outline-none"
              id="password"
              {...register("password", {
                required: "this field is required",
              })}
            />
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
        </div>
        <div className="flex justify-end py-4 mt-4 mb-4">
          <p className=" font-tbc-bold">პაროლის აღდგენა</p>
        </div>
        <div className="w-full flex justify-center items-center bg-[#3c74ff] text-white p-4 rounded-[25px] hover:bg-[#5a88fd] cursor-pointer">
          შესვლა
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
        <p className="text-[#9f9d9b] font-tbc-medium">არ გაქვს ანგარიში? - </p>
        <Link href="/register">
          {" "}
          <p className="text-[#6d87ff] font-tbc-medium">შექმენი</p>
        </Link>
      </div>
    </div>
  );
}
