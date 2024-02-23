import { ReactNode, isValidElement } from "react";
import ErrorField from "./ErrorField";

type TInputFieldProps = {
  children: ReactNode;
  label: string;
  error?: string
};

export default function InputField({
  children,
  error,
  label,
}: TInputFieldProps) {
  if (!isValidElement(children)) return null;

  const id = children.props.id ?? children.props.children[0].props.id;

  return (
    <label
      htmlFor={id}
      className="flex-1 space-y-2 text-sm font-bold capitalize text-gray-700"
    >
      <span>{label}</span>

      {children}
      {error && <ErrorField>{error}</ErrorField>}
    </label>
  );
}
