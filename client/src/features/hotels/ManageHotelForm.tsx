import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";
import SubmitBtn from "@/shared/SubmitBtn";

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
  imageUrls: string[];
};

type TManageHotelFormProps = {
  isPending: boolean;
  onSave: (formData: FormData) => void;
};

export default function ManageHotelForm({
  isPending,
  onSave,
}: TManageHotelFormProps) {
  const formMethods = useForm<THotelFormData>();

  const onSubmit = (formDataJson: THotelFormData) => {
    console.log(formDataJson);

    const formData = new FormData();

    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append("imageFiles", imageFile);
    });
    console.log(Object.fromEntries(formData));

    onSave(formData);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        id="createHotelForm"
        name="createHotelForm"
        className="flex flex-col gap-10"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImagesSection />
        <div className="flex justify-end">
          <SubmitBtn isLoading={isPending}>Save</SubmitBtn>
        </div>
      </form>
    </FormProvider>
  );
}
