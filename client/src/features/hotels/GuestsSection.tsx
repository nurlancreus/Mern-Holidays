import FormTitle from "@/shared/FormTitle";
import { THotelFormData } from "./ManageHotelForm";
import { useFormContext } from "react-hook-form";
import InputField from "@/shared/InputField";

export default function GuestsSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<THotelFormData>();

  return (
    <div>
      <FormTitle>Guests</FormTitle>
      <div className="grid grid-cols-2 gap-5 bg-gray-300 p-6">
        <InputField label="Adults" error={errors.adultCount?.message}>
          <input
            className="w-full rounded border px-3 py-2 font-normal"
            type="number"
            id="adultCount"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
        </InputField>
        <InputField label="Children" error={errors.childCount?.message}>
          <input
            className="w-full rounded border px-3 py-2 font-normal"
            type="number"
            id="childCount"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
        </InputField>
      </div>
    </div>
  );
}
