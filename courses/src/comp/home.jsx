import React from 'react';
import { Button } from "@/components/ui/button"; // This import is not used in the current code
import SingleCours from './singleCours';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.course.course);

    return (
        <div className="container mx-auto px-4">
            {
                courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map(course => (
                            <SingleCours key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-5 text-gray-500">No courses available</div>
                )
            }
        </div>
    );
}

export default Home;