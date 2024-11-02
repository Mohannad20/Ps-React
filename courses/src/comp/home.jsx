import React, { useEffect } from 'react';
import SingleCourse from './singleCourse';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, setCourse, removeCourse } from '../redux/courseSlice'; // Added removeCourse import
import axios from 'axios'
import Login from './login';

const Home = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    const isLogged = useSelector(state => state.auth.isLogged)

    useEffect(() => {
        axios.get('http://localhost:3002/courses')
            .then(res => {
                dispatch(setCourse(res.data));
            })
            .catch(err => console.log('Error fetching courses:', err));
    }, [dispatch]);
    const mode = useSelector(state=> state.courses.mode)

    return (
        <div className={` ${mode ? '' : 'dark'} container mx-auto my-0 px-4 transition duration-300 min-h-screen`}>
            {!isLogged ? (
                <Login/>
            ):
            (
                courses.length > 0 ? (
                    <div className="py-8 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map(course => (
                            <SingleCourse key={course.id} course={course} />
                        )
                    )}
                    </div>
                ) : (
                    <div className="my-0 text-gray-500 flex justify-center items-center h-screen">No courses available</div>
                )
            )
            }
        </div>
    );
}

export default Home;