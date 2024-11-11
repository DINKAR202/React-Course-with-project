import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div>
      <h1>Form Submit</h1>


      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
        <label htmlFor="name">Name</label>
        <input {...register('name', {required: true})} />
        </div>
        <div>
        <label htmlFor="phone">Phone</label>
        <input type='number' {...register('Phone', {required: true, min: 10, max: 12})} />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} />
        </div>
        <div>
        <label htmlFor="requirement">Requirement</label>
        <input {...register('requirement')} />
        </div>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
