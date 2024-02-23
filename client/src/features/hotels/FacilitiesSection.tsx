import { hotelFacilities } from "@/config/hotelOptions.config";
import { useFormContext } from "react-hook-form";
import { type THotelFormData } from "./ManageHotelForm";
import FormTitle from "@/shared/FormTitle";

export default function FacilitiesSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<THotelFormData>();

  return (
    <div>
      <FormTitle>Facilities</FormTitle>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {hotelFacilities.map((facility) => {
          const id = `id${facility}`;
          return (
            <label
              htmlFor={id}
              key={id}
              className="flex items-center gap-1 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                id={id}
                value={facility}
                {...register("facilities", {
                  validate: (facilities) => {
                    if (facilities && facilities.length > 0) {
                      return true;
                    } else {
                      return "At least one facility is required";
                    }
                  },
                })}
              />
              <span className="whitespace-nowrap">{facility}</span>
            </label>
          );
        })}
      </div>
      {errors.facilities && (
        <span className="text-sm font-bold text-red-500">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
}
