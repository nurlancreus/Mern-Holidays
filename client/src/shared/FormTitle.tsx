import { ReactNode } from "react";

type TFormTitleProps = {
  children: ReactNode;
};

export default function FormTitle({ children }: TFormTitleProps) {
  return <h2 className="mb-3 text-2xl font-bold">{children}</h2>;
}
