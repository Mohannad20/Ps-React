import React from "react";
import { Form, FormItem } from "../components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { addUserToServer } from "../redux/authSlice";

const FormMessage = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const mode = useSelector((state) => state.courses.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandle = async (data) => {
    const { cpassword, ...userData } = data;
    if (data.password !== cpassword) {
      alert("Passwords do not match");
      return;
    }
    const userWithTimestamp = {
      ...userData,
      created_at: new Date().toISOString(),
    };
    try {
      await dispatch(addUserToServer(userWithTimestamp)).unwrap();
      navigate("/"); // Navigate to the sign-in page after successful signup
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  return (
    <div
      className={`${
        mode ? "" : "dark"
      } flex items-start justify-center h-screen rounded-md bg-background transition duration-300`}
    >
      <div className="bg-background text-primary mt-20 p-8 rounded shadow-md w-full max-w-md border border-primary">
        <h2 className="text-2xl mb-6 font-bold text-center">Sign up</h2>

        <Form className="w-fit p-4" onSubmit={handleSubmit(onSubmitHandle)}>
          <FormItem className="mb-1">
            <Label>username</Label>
            <Input
              type="text"
              name="username"
              {...register("username", { required: "username is required" })}
            />
            {errors.username && (
              <FormMessage className="text-red-500">
                {errors.username.message}
              </FormMessage>
            )}
          </FormItem>
          <FormItem className="mb-1">
            <Label>email</Label>
            <Input
              type="text"
              name="email"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <FormMessage className="text-red-500">
                {errors.email.message}
              </FormMessage>
            )}
          </FormItem>
          <FormItem className="mb-1">
            <Label>password</Label>
            <Input
              type="password"
              name="password"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <FormMessage className="text-red-500">
                {errors.password.message}
              </FormMessage>
            )}
          </FormItem>
          <FormItem className="mb-4">
            <Label>confirm password</Label>
            <Input
              type="password"
              name="cpassword"
              {...register("cpassword", {
                required: "confirm password is required",
              })}
            />
            {errors.cpassword && (
              <FormMessage className="text-red-500">
                {errors.cpassword.message}
              </FormMessage>
            )}
          </FormItem>

          <Button type="submit">Sign up</Button>

          <Button variant="link" onClick={() => navigate("/")}>
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;