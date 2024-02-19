import { TRegisterFormData } from "@/features/auth/RegisterForm";
import { TSignInFormData } from "@/features/auth/SignInForm";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// user register
export const register = async (formData: TRegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();

  if (!body.ok) throw new Error(body.message);
};

// user sign in
export const signIn = async (formData: TSignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();

  if (!body.ok) throw new Error(body.message);
};

// validate token
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) throw new Error("Token invalid");

  return response.json();
};

// user sign out
export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Error during sign out");

  return response.json();
};
