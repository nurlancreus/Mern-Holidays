import { useFormContext } from "react-hook-form";
import { hotelTypes } from "@/config/hotelOptions.config";
import { type THotelFormData } from "./ManageHotelForm";
import FormTitle from "@/shared/FormTitle";
import ErrorField from "@/shared/ErrorField";

export default function TypeSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<THotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <FormTitle>Type</FormTitle>
      <div className="flex flex-wrap gap-2">
        {hotelTypes.map((type) => {
          const id = `id${type}`;
          const styles = `cursor-pointer grid place-content-center rounded-full ${typeWatch === type ? "bg-blue-500" : "bg-blue-300"} px-4 py-2 text-sm font-semibold`;

          return (
            <label htmlFor={id} className={styles} key={type}>
              <input
                type="radio"
                id={id}
                value={type}
                className="hidden"
                {...register("type", {
                  required: "This field is required",
                })}
              />
              <span className="whitespace-nowrap">{type}</span>
            </label>
          );
        })}
      </div>
      {errors.type && <ErrorField>{errors.type.message}</ErrorField>}
    </div>
  );
}
