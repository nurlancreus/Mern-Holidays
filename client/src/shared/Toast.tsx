import { type TToastMessage } from "@/context/AppContextProvider";
import { useEffect } from "react";

type TToastProps = { isOpen: boolean; onClose: () => void } & TToastMessage;

export default function Toast({ isOpen, message, type, onClose }: TToastProps) {
  const styles = `fixed ${isOpen ? "" : "translate-x-[200%]"} right-4 top-4 z-50 max-w-md rounded-md ${type === "SUCCESS" ? "bg-green-600" : "bg-red-600"} transition p-4 text-white`;

  const time = type === "SUCCESS" ? 3000 : 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, time);

    return () => clearTimeout(timer);
  }, [time, onClose]);

  return (
    <div className={styles}>
      <div className="flex items-center justify-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
}
