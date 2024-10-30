import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, removeCourse, updateCourse } from '../redux/courseSlice'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/Dialog'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Textarea } from '@/components/ui/Textarea'
import { useToast } from "@/hooks/use-toast"

const SingleCourse = ({ course }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({ title: course.title, description: course.description });
  const { toast } = useToast();

  const handleUpdate = () => {
    dispatch(updateCourse({ id: course.id, ...updatedCourse }));
    setIsOpen(false);
  };

  const mode = useSelector(state => state.courses.mode);

  return (
    <>
      <div className={mode ? '' : 'dark'}>
        <Card className='w-72 mx-auto bg-card text-primary shadow-lg rounded-lg overflow-hidden'>
          <CardHeader className='bg-card-foreground p-4'>
            <CardTitle className='text-xl font-bold text-primary-foreground'>{course.title}</CardTitle>
            <CardDescription className='text-secondary-foreground'>{course.instructor}</CardDescription>
          </CardHeader>
          <CardContent className='p-4'>
            <p className='text-foreground'>
              {course.description}
            </p>
          </CardContent>
          <CardFooter className='p-4 gap-3'>
            <Dialog open={isOpen} onOpenChange={setIsOpen} className={`bg-background transition duration-300 ${mode? '': 'dark'}`}>
              <DialogTrigger asChild>
                <Button className="transition duration-200">
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-6 rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">Edit Course</DialogTitle>
                  <DialogDescription className="text-sm text-gray-600">
                    {course.instructor}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right font-medium text-gray-700">
                      Title
                    </Label>
                    <Input
                      id="title"
                      value={updatedCourse.title}
                      onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
                      className="col-span-3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right font-medium text-gray-700">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={updatedCourse.description}
                      onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
                      className="col-span-3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={() => {
                    handleUpdate(); 
                    toast({
                      title: "Course Updated",
                      description: "success",
                    })
                  }} className="bg-primary text-primary-foreground hover:bg-primary transition duration-200">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant='destructive' onClick={() => dispatch(removeCourse(course.id))}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SingleCourse