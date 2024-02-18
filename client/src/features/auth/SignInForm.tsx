import { useForm } from "react-hook-form";
import { useSignIn } from "./useSignIn";
import { Link } from "react-router-dom";

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
      <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
      <label
        htmlFor="email"
        className="flex-1 space-y-2 text-sm font-bold text-gray-700"
      >
        <span>Email</span>

        <input
          type="email"
          id="email"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label
        htmlFor="password"
        className="flex-1 space-y-2 text-sm font-bold text-gray-700"
      >
        <span>Password</span>
        <input
          type="password"
          id="password"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
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
