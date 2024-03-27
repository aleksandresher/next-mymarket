"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CldUploadWidget } from "next-cloudinary";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import ImageUploadWidget from "./ImageUploader";
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

type FormValues = {
  title: string;
  image: string;
  subcategories: {
    name: string;
  }[];
};

<CldUploadWidget
  uploadPreset="<Your Upload Preset>"
  onSuccess={(result, { widget }) => {
    console.log(result?.info);
    widget.close();
  }}
>
  {({ open }) => {
    function handleOnClick() {
      console.log(undefined);
      open();
    }
    return <button onClick={handleOnClick}>Upload an Image</button>;
  }}
</CldUploadWidget>;

export default function CategoryCreator() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategories",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: FormValues) =>
      await fetch("http://localhost:3000/api/categories/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ data }),
      }),
    onSuccess: () => {
      toast({ description: "Card created succesfully!" });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast({ description: "Error occured", variant: "destructive" });
    },
  });
  const onSubmit = (formData: FormValues) => {
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
          <p>Add Category</p>
        </DialogTrigger>
        <DialogContent className="w-[320px] opacity-100 bg-[#c7f9cc]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>add category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
                  id="title"
                  {...register("image", {
                    required: "this field is required",
                  })}
                />
                {errors.image?.message && <span>{errors.image.message}</span>}
              </div>

              <ul>
                {fields.map((item, index) => (
                  <li key={item.id}>
                    <input
                      {...register(`subcategories.${index}.name`, {
                        required: true,
                      })}
                    />
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => append({ name: "" })}>
                Add Subcategory
              </button>
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
