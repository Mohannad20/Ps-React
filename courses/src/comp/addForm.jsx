import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './login';
import { Form, FormItem } from '../components/ui/form';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useForm } from 'react-hook-form';
import { addCoursetoApi } from '../redux/courseSlice';
import { useNavigate } from 'react-router-dom';

const FormMessage = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const AddForm = () => {
  const isLogged = useSelector(state => state.auth.isLogged);
  const mode = useSelector(state => state.courses.mode);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onhandleSubmit = async (data) => {
    try {
      await dispatch(addCoursetoApi(data)).unwrap();
      navigate('/');
    } catch (error) {
      console.log('Error adding course:', error);
    }
  };

  return (
    <div
      className={`${
        mode ? "" : "dark"
      } flex items-start justify-center min-h-screen rounded-md bg-background transition duration-300`}
    >
      {!isLogged ? (
        <Login />
      ) : (
        <div className="bg-background text-primary mt-20 p-8 rounded shadow-md w-full max-w-md border border-primary">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Course</h2>
          <Form>
            <FormItem className="mb-3">
              <Label>Course Name</Label>
              <Input
                type="text"
                name="title"
                {...register('title', { required: 'Title is required' })}
              />
              {errors.title && (
                <FormMessage className="text-red-500">
                  {errors.title.message}
                </FormMessage>
              )}
            </FormItem>
            <FormItem className="mb-3">
              <Label>Course Description</Label>
              <Input
                type="text"
                name="description"
                {...register('description', { required: 'Description is required' })}
              />
              {errors.description && (
                <FormMessage className="text-red-500">
                  {errors.description.message}
                </FormMessage>
              )}
            </FormItem>
            <FormItem className="mb-3">
              <Label>Instructor</Label>
              <Input
                type="text"
                name="instructor"
                {...register('instructor', { required: 'Instructor is required' })}
              />
              {errors.instructor && (
                <FormMessage className="text-red-500">
                  {errors.instructor.message}
                </FormMessage>
              )}
            </FormItem>
            <Button type="submit" onClick={handleSubmit(onhandleSubmit)}>Add Course</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AddForm;