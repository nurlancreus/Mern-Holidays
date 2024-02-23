import { useForm } from "react-hook-form";
import { useSignIn } from "./useSignIn";
import { Link } from "react-router-dom";
import InputField from "@/shared/InputField";
import FormTitle from "@/shared/FormTitle";
import SubmitBtn from "@/shared/SubmitBtn";

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

  const { mutate: signIn, isPending } = useSignIn();

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
      <FormTitle>Sign in</FormTitle>
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
        <SubmitBtn isLoading={isPending}>Sign in</SubmitBtn>
      </div>
    </form>
  );
}
