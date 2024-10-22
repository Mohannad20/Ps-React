import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button"; // This import is not used in the current code
import SingleCours from './singleCours';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, setCourse } from '../redux/courseSlice';
import axios from 'axios'

const Home = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);

    useEffect(() => {
        axios.get('http://localhost:3001/courses')
            .then(res => {
                dispatch(setCourse(res.data));  // Set the entire course list
                console.log(res.data);
            })
            .catch(err => console.log('Error fetching courses:', err));
    }, [dispatch]);

    return (
        <div className="container mx-auto px-4">
            {
                courses.length > 0 ? (
                    <div className="my-8 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map(course => (
                            <SingleCours key={course.id} course={course} />
                        )
                        )}
                    </div>
                ) : (
                    <div className="text-center mt-5 text-gray-500">No courses available</div>
                )
            }
        </div>
    );
}

export default Home;