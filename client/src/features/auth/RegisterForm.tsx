import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { Link } from "react-router-dom";

export type TRegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>();

  const { mutate: signIn } = useRegister();

  const onSubmit = (formData: TRegisterFormData) => {
    signIn(formData);
  };

  return (
    <form
      id="registerForm"
      name="registerForm"
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-2 text-3xl font-bold">Create an Account </h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <label
          htmlFor="firstName"
          className="flex-1 space-y-2 text-sm font-bold text-gray-700"
        >
          <span>First Name</span>

          <input
            type="text"
            id="firstName"
            className="w-full rounded border px-2 py-1 font-normal"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label
          htmlFor="lastName"
          className="flex-1 space-y-2 text-sm font-bold text-gray-700"
        >
          <span>Last Name</span>
          <input
            type="text"
            id="lastName"
            className="w-full rounded border px-2 py-1 font-normal"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>
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
      <label
        htmlFor="confirmPassword"
        className="flex-1 space-y-2 text-sm font-bold text-gray-700"
      >
        <span>Confirm Password</span>
        <input
          type="password"
          id="confirmPassword"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) return "This field is required";
              if (watch("password") !== value)
                return "Your passwords do not match";
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <div className="flex items-center justify-between">
        <span>
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="text-blue-500 underline underline-offset-2"
          >
            Sign in here
          </Link>
        </span>
        <button className="bg-blue-600 p-2 text-lg font-bold text-white hover:bg-blue-500">
          Create Account
        </button>
      </div>
    </form>
  );
}
