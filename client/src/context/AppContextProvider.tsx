import Toast from "@/shared/Toast";
import { ReactNode, createContext, useContext, useState } from "react";

export type TToastMessage = {
  message?: string;
  type?:  "SUCCESS" | "ERROR";
};

type TAppContext = {
  showToast: (toastMessage: TToastMessage) => void;
};

const AppContext = createContext<TAppContext | null>(null);

type TAppContextProviderProps = {
  children: ReactNode;
};

export default function AppContextProvider({
  children,
}: TAppContextProviderProps) {
  const [toast, setToast] = useState<TToastMessage | null>(null);

  const showToast = (toastMessage: TToastMessage) => {
    setToast(toastMessage);
  };

  const closeToast = () => setToast(null);

  return (
    <AppContext.Provider
      value={{
        showToast,
      }}
    >
      <Toast
        type={toast?.type}
        isOpen={toast != null}
        message={toast?.message}
        onClose={closeToast}
      />

      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context == null)
    throw new Error(
      "You should use useAppContext inside of the context provider",
    );

  return context;
};
