import React, { useState } from 'react'
import { useForm } from "react-hook-form";
const ROLES = ["Frontend", "Backend", "AI-Engineer"];
const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({ defaultValues: { name: "one" , email: "one@gmail.com", phone: 1234567890}, mode: "onTouched" });

  function submit(data){
    return new Promise((res) => console.log("submited", data))
  }
  if(isSubmitSuccessful){
    return(
      <div>
        <h1>Form Submit Successfully</h1>
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label >
          Full Name
          <input {...register('name' , {required: 'Name is required'})} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label >
          Email
          <input {...register('email' , {required: 'Email is required'})} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label >
          Phone Number
          <input {...register('phone' , {required: 'Phone number is required'})} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </label>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "submit"}
        </button>
      </form>
    </div>
  )
}

export default HookForm