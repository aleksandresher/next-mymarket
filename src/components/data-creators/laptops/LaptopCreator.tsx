"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../ui/dialog";

export type LaptopProductValues = {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  brand: string;
  hdd: number;
  ssd: number;
  published: number;
  videocard: string;
  ram: number;
  os: string;
  cpufrequence: number;
  cpu: string;
  condition: string;
  resolution: string;
};

export default function LaptopCreator() {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LaptopProductValues>();

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: LaptopProductValues) =>
      await fetch(`${URL}/api/laptop/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ data }),
      }),
    onSuccess: () => {
      toast({ description: "laptop created succesfully!" });
      queryClient.invalidateQueries({ queryKey: ["laptop"] });
    },
    onError: () => {
      toast({ description: "Error occured", variant: "destructive" });
    },
  });
  const onSubmit = (formData: LaptopProductValues) => {
    console.log(formData);
    mutation.mutate(formData);
  };
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger
          asChild
          className="border-2 rounded-[8px] border-outset border-opacity-50 border-[#f1a45d] p-2 cursor-pointer"
        >
          <p>Add Laptop</p>
        </DialogTrigger>
        <DialogContent className="w-full opacity-100 bg-[#c7f9cc]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Laptop</DialogTitle>
            </DialogHeader>
            <div className="w-full grid grid-cols-3 gap-4 py-4">
              <div className="w-full flex items-center gap-2">
                <label htmlFor="title">Title</label>
                <input
                  className="p-2  rounded-[8px] w-full"
                  id="title"
                  {...register("title", {
                    required: "this field is required",
                  })}
                />
                {errors.title?.message && <span>{errors.title.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="image">Image</label>
                <input
                  className="w-full p-2  rounded-[8px]"
                  id="image"
                  {...register("image", {
                    required: "this field is required",
                  })}
                />
                {errors.image?.message && <span>{errors.image.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="description">Description</label>
                <input
                  className="w-full p-2  rounded-[8px]"
                  id="description"
                  {...register("description", {
                    required: "this field is required",
                  })}
                />
                {errors.description?.message && (
                  <span>{errors.description.message}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="price" className="text-right">
                  Price
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="price"
                  {...register("price", {
                    required: "this field is required",
                  })}
                />
                {errors.price?.message && <span>{errors.price.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="brand" className="text-right">
                  Brand
                </label>
                <input
                  className=" w-full p-2  rounded-[8px]"
                  id="brand"
                  {...register("brand", {
                    required: "this field is required",
                  })}
                />
                {errors.brand?.message && <span>{errors.brand.message}</span>}
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="os" className="text-right">
                  OS
                </label>
                <input
                  className=" w-full p-2  rounded-[8px]"
                  id="os"
                  {...register("os", {
                    required: "this field is required",
                  })}
                />
                {errors.os?.message && <span>{errors.os.message}</span>}
              </div>
              <div className="flex w-1/4 bg-green-400 items-center gap-2 p-2">
                <label htmlFor="supervip" className="text-right">
                  SUPER VIP
                </label>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className=" p-2  rounded-[8px]"
                  id="supervip"
                  {...register("supervip")}
                />
                {errors.supervip?.message && (
                  <span>{errors.supervip.message}</span>
                )}
              </div>
              <div className="flex w-1/4 items-center gap-2 bg-green-400 p-2 rounded-lg">
                <label htmlFor="vipplus">VIP+</label>
                <input
                  type="checkbox"
                  className="p-2  rounded-[8px]"
                  id="vipplus"
                  {...register("vipplus")}
                />
                {errors.vipplus?.message && (
                  <span>{errors.vipplus.message}</span>
                )}
              </div>
              <div className="flex w-1/4  items-center gap-2 bg-green-400 rounded-lg p-2">
                <label htmlFor="vip">VIP</label>
                <input
                  type="checkbox"
                  className="p-2  rounded-[8px]"
                  id="vip"
                  {...register("vip")}
                />
                {errors.vip?.message && <span>{errors.vip.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="owner" className="text-right">
                  Owner
                </label>
                <input
                  className="p-2 w-full  rounded-[8px]"
                  id="owner"
                  {...register("owner", {
                    required: "this field is required",
                  })}
                />
                {errors.owner?.message && <span>{errors.owner.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="place" className="text-right">
                  Place
                </label>
                <input
                  className=" w-full p-2  rounded-[8px]"
                  id="place"
                  {...register("place", {
                    required: "this field is required",
                  })}
                />
                {errors.place?.message && <span>{errors.place.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="published" className="text-right">
                  Published year
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="published"
                  {...register("published", {
                    required: "this field is required",
                  })}
                />
                {errors.published?.message && (
                  <span>{errors.published.message}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="hdd" className="text-right">
                  HDD
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="hdd"
                  {...register("hdd", {
                    required: "this field is required",
                  })}
                />
                {errors.hdd?.message && <span>{errors.hdd.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="ssd" className="text-right">
                  SSD
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="ssd"
                  {...register("ssd", {
                    required: "this field is required",
                  })}
                />
                {errors.ssd?.message && <span>{errors.ssd.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="ram" className="text-right">
                  RAM
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="ram"
                  {...register("ram", {
                    required: "this field is required",
                  })}
                />
                {errors.ram?.message && <span>{errors.ram.message}</span>}
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="videocard" className="text-right">
                  Video Card
                </label>
                <input
                  className=" w-full p-2  rounded-[8px]"
                  id="videocard"
                  {...register("videocard", {
                    required: "this field is required",
                  })}
                />
                {errors.videocard?.message && (
                  <span>{errors.videocard.message}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="cpufrequence" className="text-right">
                  CPU Frequence
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="cpufrequence"
                  {...register("cpufrequence", {
                    required: "this field is required",
                  })}
                />
                {errors.cpufrequence?.message && (
                  <span>{errors.cpufrequence.message}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="cpu" className="text-right">
                  CPU
                </label>
                <input
                  className=" w-full p-2  rounded-[8px]"
                  id="cpu"
                  {...register("cpu", {
                    required: "this field is required",
                  })}
                />
                {errors.cpu?.message && <span>{errors.cpu.message}</span>}
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="resolution" className="text-right">
                  Resolution
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="resolution"
                  {...register("resolution", {
                    required: "this field is required",
                  })}
                />
                {errors.resolution?.message && (
                  <span>{errors.resolution.message}</span>
                )}
              </div>

              <select {...register("condition")}>
                <option value="">Select...</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
            <DialogFooter>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
