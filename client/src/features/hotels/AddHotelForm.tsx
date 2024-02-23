import ManageHotelForm from "./ManageHotelForm";
import { useAddHotel } from "./useAddHotel";

export default function AddHotelForm() {
  const { mutate: addHotel, isPending } = useAddHotel();

  return <ManageHotelForm onSave={addHotel} isPending={isPending} />;
}
