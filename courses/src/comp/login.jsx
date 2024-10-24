import {
  Form,
  FormItem,
  FormDescription
} from '@/components/ui/form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useForm, useFormContext } from 'react-hook-form';
import { login } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

// const useFormField = (name) => {
//   const { getFieldState } = useFormContext();
//   const fieldState = getFieldState(name);
//   return fieldState;
// };

// Ensure FormMessage component is correctly implemented
const FormMessage = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const mode = useSelector(state=> state.courses.mode)

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={` ${mode ? '' : 'dark'} flex items-start py-10 m-10 justify-center h-auto rounded-md border border-primary  bg-background`}>
      <div className="bg-background text-primary p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          
          <FormItem className='mb-4'>
            <Label>Username</Label>
            <Input
              name="username"
              type='text'
            {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <FormMessage className='text-red-500'>{errors.username.message}</FormMessage>}
          </FormItem>

        
          <FormItem className='mb-4'>
            <Label>Password</Label>
            <Input
            name='password'
            type='password'
            {...register('password', {required: 'Password is required'})}
            />
            {errors.password && <FormMessage className='text-red-500'>{errors.password.message}</FormMessage>}
          </FormItem>
          <Button
            className=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit((data) => dispatch(login(data)))}
          >
            Login
          </Button>
          <Button variant='link'>Sing up</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;