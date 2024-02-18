import QueryProvider from "./lib/react-query/QueryProvider";
import AppContextProvider from "./context/AppContextProvider";
import AppRoutes from "./routes";

export default function App() {
  return (
    <QueryProvider>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </QueryProvider>
  );
}
