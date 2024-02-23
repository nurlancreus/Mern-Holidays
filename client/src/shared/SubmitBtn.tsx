import { ReactNode } from "react";

type TSubmitBtnProps = {
  children: ReactNode;
  isLoading: boolean;
};

export default function SubmitBtn({ children, isLoading }: TSubmitBtnProps) {
  return (
    <button
      className="bg-blue-600 p-2 text-lg font-bold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-500"
      disabled={isLoading}
    >
      {isLoading ? "Submitting..." : children}
    </button>
  );
}
