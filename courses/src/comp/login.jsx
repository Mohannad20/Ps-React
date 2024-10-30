import { Form, FormItem, FormDescription } from "@/components/ui/form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useForm } from "react-hook-form";
import { fetchUsers, login } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Ensure FormMessage component is correctly implemented
const FormMessage = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.courses.mode);
  const authError = useSelector((state) => state.auth.error);

  // Function to handle form submission
  const onSubmit = (data) => {
    dispatch(fetchUsers(data))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${
        mode ? "" : "dark"
      } flex items-start justify-center h-screen rounded-md bg-background transition duration-300`}
    >
      <div className="bg-background text-primary mt-20 p-8 rounded shadow-md w-full max-w-md border border-primary">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem className="mb-4">
            <Label>Username</Label>
            <Input
              name="username"
              type="text"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <FormMessage className="text-red-500">
                {errors.username.message}
              </FormMessage>
            )}
          </FormItem>

          <FormItem className="mb-4">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <FormMessage className="text-red-500">
                {errors.password.message}
              </FormMessage>
            )}
            {authError && (
              <FormMessage className="text-red-500">{authError}</FormMessage>
            )}
          </FormItem>
          <Button
            className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={() => dispatch(login(data))}
            onClick={handleSubmit((data) => dispatch(fetchUsers(data)))}

          >
            Login
          </Button>
          <Link to="/logout">
            <Button variant="link">Sign up</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
