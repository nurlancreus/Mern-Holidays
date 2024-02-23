import { useFormContext } from "react-hook-form";
import { THotelFormData } from "./ManageHotelForm";
import FormTitle from "@/shared/FormTitle";
import ErrorField from "@/shared/ErrorField";

export default function ImagesSection() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<THotelFormData>();

  const existingImageUrls = watch("imageFiles");

  return (
    <div>
      <FormTitle>Images</FormTitle>
      <div className="flex flex-col gap-4 rounded border p-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font-normal text-gray-700"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;

              if (!totalLength) return "At least one image should be added";

              if (totalLength > 6)
                return "Total number of images cannot be more than 6 (six)";

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <ErrorField>{errors.imageFiles.message}</ErrorField>
      )}
    </div>
  );
}
