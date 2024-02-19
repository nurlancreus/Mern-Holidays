import { FormProvider, useForm } from "react-hook-form";

export type THotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageFiles: FileList;
};

export default function AddHotelForm() {
  const formMethods = useForm<THotelFormData>();

  return (
    <FormProvider {...formMethods}>
      <form id="createHotelForm" name="createHotelForm">
        AddHotelForm
      </form>
    </FormProvider>
  );
}
