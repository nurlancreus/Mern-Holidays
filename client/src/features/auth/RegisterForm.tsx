import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";

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

  const { mutate: signIn, isPending } = useRegister();

  const onSubmit = (formData: TRegisterFormData) => {
    signIn(formData);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-bold">Create an Account </h2>
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
      <span>
        <button className="bg-blue-600 p-2 text-lg font-bold text-white hover:bg-blue-500">
          Create Account
        </button>
      </span>
    </form>
  );
}
