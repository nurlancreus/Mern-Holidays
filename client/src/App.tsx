import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import {
  AddHotelPage,
  BookingPage,
  DetailsPage,
  EditHotelPage,
  HomePage,
  MyBookingsPage,
  MyHotelsPage,
  RegisterPage,
  SearchPage,
  SignInPage,
} from "./pages";

const isLoggendIn = false;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to={"home"} replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="details/:hotelId" element={<DetailsPage />} />

          {!isLoggendIn && (
            <>
              <Route path="register" element={<RegisterPage />} />
              <Route path="sign-in" element={<SignInPage />} />
            </>
          )}

          {isLoggendIn && (
            <>
              <Route path="hotel/:hotelId/booking" element={<BookingPage />} />
              <Route path="add-hotel" element={<AddHotelPage />} />
              <Route path="edit-hotel/:hotelId" element={<EditHotelPage />} />
              <Route path="my-hotels" element={<MyHotelsPage />} />
              <Route path="my-bookings" element={<MyBookingsPage />} />
            </>
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
