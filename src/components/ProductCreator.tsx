"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";

type MobileProductValues = {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean;
  vip: boolean;
  supervip: boolean;
  brand: string;
  model: string;
  osversion: string;
  selfcamera: string;
  simnum: string;
  simtype: string;
  published: Date;
  screensize: string;
  screentype: string;
  battery: string;
  cameranum: string;
  features: string;
  os: string;
  internalmemory: number;
  maincamera: string;
};

export default function ProductCreator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileProductValues>();

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: MobileProductValues) =>
      await fetch("http://localhost:3000/api/mobile/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ data }),
      }),
    onSuccess: () => {
      toast({ description: "mobile created succesfully!" });
      queryClient.invalidateQueries({ queryKey: ["mobile"] });
    },
    onError: () => {
      toast({ description: "Error occured", variant: "destructive" });
    },
  });
  const onSubmit = (formData: MobileProductValues) => {
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
          <p>Add Mobile</p>
        </DialogTrigger>
        <DialogContent className="w-full opacity-100 bg-[#c7f9cc]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>add mobile</DialogTitle>
            </DialogHeader>
            <div className="w-full grid grid-cols-3 gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right">
                  Title
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="title"
                  {...register("title", {
                    required: "this field is required",
                  })}
                />
                {errors.title?.message && <span>{errors.title.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right">
                  Image
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="image"
                  {...register("image", {
                    required: "this field is required",
                  })}
                />
                {errors.image?.message && <span>{errors.image.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right">
                  description
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="description"
                  {...register("description", {
                    required: "this field is required",
                  })}
                />
                {errors.description?.message && (
                  <span>{errors.description.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="price" className="text-right">
                  price
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="price"
                  {...register("price", {
                    required: "this field is required",
                  })}
                />
                {errors.price?.message && <span>{errors.price.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="brand" className="text-right">
                  brand
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="brand"
                  {...register("brand", {
                    required: "this field is required",
                  })}
                />
                {errors.brand?.message && <span>{errors.brand.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="model" className="text-right">
                  model
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="model"
                  {...register("model", {
                    required: "this field is required",
                  })}
                />
                {errors.model?.message && <span>{errors.model.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="osversion" className="text-right">
                  osversion
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="osversion"
                  {...register("osversion", {
                    required: "this field is required",
                  })}
                />
                {errors.osversion?.message && (
                  <span>{errors.osversion.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="selfcamera" className="text-right">
                  selfcamera
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="selfcamera"
                  {...register("selfcamera", {
                    required: "this field is required",
                  })}
                />
                {errors.selfcamera?.message && (
                  <span>{errors.selfcamera.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="simnum" className="text-right">
                  simnum
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="simnum"
                  {...register("simnum", {
                    required: "this field is required",
                  })}
                />
                {errors.simnum?.message && <span>{errors.simnum.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="screensize" className="text-right">
                  screensize
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="screensize"
                  {...register("screensize", {
                    required: "this field is required",
                  })}
                />
                {errors.screensize?.message && (
                  <span>{errors.screensize.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="screentype" className="text-right">
                  screentype
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="screentype"
                  {...register("screentype", {
                    required: "this field is required",
                  })}
                />
                {errors.screentype?.message && (
                  <span>{errors.screentype.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="battery" className="text-right">
                  battery
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="battery"
                  {...register("battery", {
                    required: "this field is required",
                  })}
                />
                {errors.battery?.message && (
                  <span>{errors.battery.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="cameranum" className="text-right">
                  cameranum
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="cameranum"
                  {...register("cameranum", {
                    required: "this field is required",
                  })}
                />
                {errors.cameranum?.message && (
                  <span>{errors.cameranum.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="features" className="text-right">
                  features
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="features"
                  {...register("features", {
                    required: "this field is required",
                  })}
                />
                {errors.features?.message && (
                  <span>{errors.features.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="os" className="text-right">
                  os
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="os"
                  {...register("os", {
                    required: "this field is required",
                  })}
                />
                {errors.os?.message && <span>{errors.os.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="internalmemory" className="text-right">
                  internalmemory
                </label>
                <input
                  type="number"
                  className="p-2 w-[140px] rounded-[8px]"
                  id="internalmemory"
                  {...register("internalmemory", {
                    required: "this field is required",
                  })}
                />
                {errors.internalmemory?.message && (
                  <span>{errors.internalmemory.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="maincamera" className="text-right">
                  maincamera
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="maincamera"
                  {...register("maincamera", {
                    required: "this field is required",
                  })}
                />
                {errors.maincamera?.message && (
                  <span>{errors.maincamera.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="supervip" className="text-right">
                  supervip
                </label>
                <input
                  type="checkbox"
                  className="p-2 w-[140px] rounded-[8px]"
                  id="supervip"
                  {...register("supervip", {
                    required: "this field is required",
                  })}
                />
                {errors.supervip?.message && (
                  <span>{errors.supervip.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="vipplus" className="text-right">
                  vipplus
                </label>
                <input
                  type="checkbox"
                  className="p-2 w-[140px] rounded-[8px]"
                  id="vipplus"
                  {...register("vipplus", {
                    required: "this field is required",
                  })}
                />
                {errors.vipplus?.message && (
                  <span>{errors.vipplus.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="vip" className="text-right">
                  vip
                </label>
                <input
                  type="checkbox"
                  className="p-2 w-[140px] rounded-[8px]"
                  id="vip"
                  {...register("vip", {
                    required: "this field is required",
                  })}
                />
                {errors.vip?.message && <span>{errors.vip.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="owner" className="text-right">
                  owner
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="owner"
                  {...register("owner", {
                    required: "this field is required",
                  })}
                />
                {errors.owner?.message && <span>{errors.owner.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="place" className="text-right">
                  place
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="place"
                  {...register("place", {
                    required: "this field is required",
                  })}
                />
                {errors.place?.message && <span>{errors.place.message}</span>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="published" className="text-right">
                  published
                </label>
                <input
                  type="date"
                  className="p-2 w-[140px] rounded-[8px]"
                  id="published"
                  {...register("published", {
                    required: "this field is required",
                  })}
                />
                {errors.published?.message && (
                  <span>{errors.published.message}</span>
                )}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="plsimtype" className="text-right">
                  simtype
                </label>
                <input
                  className="p-2 w-[140px] rounded-[8px]"
                  id="simtype"
                  {...register("simtype", {
                    required: "this field is required",
                  })}
                />
                {errors.simtype?.message && (
                  <span>{errors.simtype.message}</span>
                )}
              </div>
            </div>
            <DialogFooter>
              <DialogClose
                type="submit"
                className="bg-green-400 rounded-full p-2 uppercase"
              >
                submit
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
