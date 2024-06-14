import { useForm } from "react-hook-form";
import Button from "../../ui/Button/Button";
import Form from "../../ui/Form/Form";
import FormRow from "../../ui/FormRow/FormRow";
import Input from "../../ui/Input/Input";
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

interface onSubmitProp {
  fullName: string;
   email: string; 
   password: string;
}

function SignupForm() {
  const { signup, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({fullName, email, password}: onSubmitProp) {
    signup({ fullName, email, password }, {
      onSettled: () => reset()
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName", { required: "This field is required" })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" disabled={isLoading} {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address"
          }
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" disabled={isLoading} {...register("password", {
          required: "This field is required", minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
        } })}/>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" disabled={isLoading}
        {...register("passwordConfirm", { required: "This field is required", validate: (value) => value === getValues().password || "Passwords need to match" })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;


