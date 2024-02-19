import { useForm } from "react-hook-form";
import { useSignIn } from "./useSignIn";
import { Link } from "react-router-dom";
import InputField from "@/shared/InputField";

export type TSignInFormData = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormData>();

  const { mutate: signIn } = useSignIn();

  const onSubmit = (formData: TSignInFormData) => {
    signIn(formData);
  };

  return (
    <form
      id="signInForm"
      name="signInForm"
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-2 text-3xl font-bold">Sign in</h2>
      <InputField label="Email" error={errors.email?.message}>
        <input
          type="email"
          id="email"
          className="form-input"
          {...register("email", { required: "This field is required" })}
        />
      </InputField>
      <InputField label="Password" error={errors.password?.message}>
        <input
          type="password"
          id="password"
          className="form-input"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
      </InputField>
      <div className="flex items-center justify-between">
        <span>
          Not Registered?{" "}
          <Link
            to="/register"
            className="text-blue-500 underline underline-offset-2"
          >
            Create an account here
          </Link>
        </span>
        <button className="bg-blue-600 p-2 text-lg font-bold text-white hover:bg-blue-500">
          Sign in
        </button>
      </div>
    </form>
  );
}
