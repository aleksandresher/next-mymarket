"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { Button } from "@components/ui/button";

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

export type BicycleProductValues = {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  condition: string;
  amortization: boolean;
  folding: boolean;
  type: string;
  speedometr: boolean;
  size: number;
};

export default function BicycleCreator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BicycleProductValues>();

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: BicycleProductValues) =>
      await fetch("http://localhost:3000/api/bicycle/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ data }),
      }),
    onSuccess: () => {
      toast({ description: "Bicycle created succesfully!" });
      queryClient.invalidateQueries({ queryKey: ["bicycle"] });
    },
    onError: () => {
      toast({ description: "Error occured", variant: "destructive" });
    },
  });
  const onSubmit = (formData: BicycleProductValues) => {
    console.log(formData);
    mutation.mutate(formData);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          asChild
          className="border-2 rounded-[8px] border-outset border-opacity-50 border-[#f1a45d] p-2 cursor-pointer"
        >
          <p>Add Bicycle</p>
        </DialogTrigger>
        <DialogContent className="w-full opacity-100 bg-[#c7f9cc]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Bicycle</DialogTitle>
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
                {/* {errors.title?.message && <span>{errors.title.message}</span>} */}
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
                <label htmlFor="size" className="text-right">
                  Size
                </label>
                <input
                  type="number"
                  className=" w-full p-2  rounded-[8px]"
                  id="place"
                  {...register("size", {
                    required: "this field is required",
                  })}
                />
                {errors.size?.message && <span>{errors.size.message}</span>}
              </div>
              <select {...register("condition")}>
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
              <select {...register("type")}>
                <option value="">Select Type</option>
                <option value="მთის">მთის</option>
                <option value="საგზაო">საგზაო</option>
                <option value="საბავშვო">საბავშვო</option>
                <option value="ელექტრო">ელექტრო</option>
                <option value="შოსე">შოსე</option>
              </select>
              <div className="flex w-1/4  items-center gap-2 bg-green-400 rounded-lg p-2">
                <label htmlFor="vip">Folding</label>
                <input
                  type="checkbox"
                  className="p-2  rounded-[8px]"
                  id="vip"
                  {...register("folding")}
                />
                {errors.folding?.message && (
                  <span>{errors.folding.message}</span>
                )}
              </div>
              <div className="flex w-1/4  items-center gap-2 bg-green-400 rounded-lg p-2">
                <label htmlFor="amortization">Amortization</label>
                <input
                  type="checkbox"
                  className="p-2  rounded-[8px]"
                  id="vip"
                  {...register("amortization")}
                />
                {errors.amortization?.message && (
                  <span>{errors.amortization.message}</span>
                )}
              </div>
              <div className="flex w-1/4  items-center gap-2 bg-green-400 rounded-lg p-2">
                <label htmlFor="vip">Speedometr</label>
                <input
                  type="checkbox"
                  className="p-2  rounded-[8px]"
                  id="speedometr"
                  {...register("speedometr")}
                />
                {errors.speedometr?.message && (
                  <span>{errors.speedometr.message}</span>
                )}
              </div>
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
