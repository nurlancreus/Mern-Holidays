import { useFormContext } from "react-hook-form"

export default function HotelDetailsSection() {
  const {register} = useFormContext()


  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold mb-3">Add Hotel</h2>
      
    </div>
  )
}
