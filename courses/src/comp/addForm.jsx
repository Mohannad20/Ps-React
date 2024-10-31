import React from 'react'
import { useSelector } from 'react-redux';
import Login from './login';

const AddForm = () => {
  const isLogged = useSelector(state => state.auth.isLogged)
  console.log(isLogged);
  const mode = useSelector(state => state.courses.mode)
  
  return (
    <div className={` ${mode ? '' : 'dark'} container mx-auto my-0 px-4 transition duration-300 bg-background text-primary`}>

    {!isLogged ? (
      <Login/>
    )
      :
      (

        <div>AddForm</div>
      )
    }
    </div>
  )
}

export default AddForm