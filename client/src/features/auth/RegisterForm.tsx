import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { Link } from "react-router-dom";
import InputField from "@/shared/InputField";

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
        <InputField label="First Name" error={errors.firstName?.message}>
          <input
            type="text"
            id="firstName"
            className="form-input"
            {...register("firstName", { required: "This field is required" })}
          />
        </InputField>
        <InputField label="Last Name" error={errors.lastName?.message}>
          <input
            type="text"
            id="lastName"
            className="form-input"
            {...register("lastName", { required: "This field is required" })}
          />
        </InputField>
      </div>
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
      <InputField
        label="Confirm Password"
        error={errors.confirmPassword?.message}
      >
        <input
          type="password"
          id="confirmPassword"
          className="form-input"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) return "This field is required";
              if (watch("password") !== value)
                return "Your passwords do not match";
            },
          })}
        />
      </InputField>
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
