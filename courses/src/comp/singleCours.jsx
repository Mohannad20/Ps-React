import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const SingleCours = (course) => {
  const dispatch = useDispatch()

  return (
    <Card className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <CardHeader className='bg-gray-100 p-4'>
        <CardTitle className='text-xl font-bold'>{course.title}</CardTitle>
        <CardDescription className='text-gray-600'>{course.instructor}</CardDescription>
      </CardHeader>
      <CardContent className='p-4'>
        <p className='text-gray-800'>
        {course.description}          
        </p>
      </CardContent>
      <CardFooter className='p-4'>
        <Button variante='Secondary'>
          Primary
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SingleCours