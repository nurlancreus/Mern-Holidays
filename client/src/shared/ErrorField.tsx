import { ReactNode } from "react";

type TErrorFieldProps = {
  children: ReactNode;
};

export default function ErrorField({ children }: TErrorFieldProps) {
  return <p className="text-sm font-bold text-red-500">{children}</p>;
}
