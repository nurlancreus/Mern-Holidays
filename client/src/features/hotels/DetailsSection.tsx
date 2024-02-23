import { useFormContext } from "react-hook-form";
import InputField from "@/shared/InputField";
import { type THotelFormData } from "./ManageHotelForm";
import FormTitle from "@/shared/FormTitle";

export default function DetailsSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<THotelFormData>();

  return (
    <div className="flex flex-col gap-4">
      <FormTitle>Add Hotel</FormTitle>
      <InputField label="Name" error={errors.name?.message}>
        <input
          type="text"
          id="name"
          className="form-input"
          {...register("name", { required: "This field is required" })}
        />
      </InputField>
      <div className="flex items-center gap-4">
        <InputField label="City" error={errors.city?.message}>
          <input
            type="text"
            id="city"
            className="form-input"
            {...register("city", { required: "This field is required" })}
          />
        </InputField>
        <InputField label="Country" error={errors.country?.message}>
          <input
            type="text"
            id="country"
            className="form-input"
            {...register("country", { required: "This field is required" })}
          />
        </InputField>
      </div>

      <InputField label="Description" error={errors.description?.message}>
        <textarea
          rows={10}
          id="description"
          className="form-input resize-none"
          {...register("description", { required: "This field is required" })}
        />
      </InputField>
      <div className="sm:w-1/2">
        <InputField
          label="Price Per Night"
          error={errors.pricePerNight?.message}
        >
          <input
            type="number"
            id="pricePerNight"
            min={1}
            className="form-input"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          />
        </InputField>
      </div>
      <div className="sm:w-1/2">
        <InputField label="Star Rating" error={errors.starRating?.message}>
          <select
            id="starRating"
            className="w-full rounded border p-2 font-normal text-gray-700"
            {...register("starRating", {
              required: "This field is required",
            })}
          >
            <option value="" className="text-sm font-bold">
              Select as Rating
            </option>
            {Array.from({ length: 5 }, (_, i) => {
              const rating = i + 1;

              return (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              );
            })}
          </select>
        </InputField>
      </div>
    </div>
  );
}
