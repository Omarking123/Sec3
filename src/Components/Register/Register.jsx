import { useFormik } from "formik";
import React from "react";

export default function Register() {
  

let user = {
  name : '',
  phone : '',
  password: '',
  rePassword: '',
  email: ''

}
function onsubmit (values){
  console.log("hello formik",values)
}

  const RegisterFormik =  useFormik ({
    initialValues:  user,
    onSubmit :onsubmit,
    validate:  (allData)=>{

      
      const errors = {};
      // const nameRegex = /^[A-Z][a-z]+$/;
      
      // const phoneRegex = /^01[0125][0-9]{8}$/;

      const nameRegex = /^[A-Z][a-zA-Z\s]+$/;
      const phoneRegex = /^01[0125][0-9]{8}$/;


      if(!nameRegex.test(allData.name)){
        errors.name ="Name must be with Capital Letter"
      }


      if(!phoneRegex.test(allData.phone)){
        errors.phone = "your phone must be in egypt "
      }
      
      if(allData.email.includes ("@") == false  ||  allData.email.includes (".com" )==false){
        errors.email = "Wrong Email"
      }
      if(allData.password.length < 6 || allData.password.length > 12 ){
        errors.password = "invaild password "
      }
      if(allData.password != allData.rePassword){
        errors.rePassword = "the password desn't match ";
      }
      console.log(errors)
     
      return errors

    }
  });





  return (
    <div className=" p-5 ">
      <h2 className=" text-center ">Register Now </h2>
      <form onSubmit={RegisterFormik.handleSubmit} className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input
          value={RegisterFormik.values.name}
          onChange={RegisterFormik.handleChange}
          onBlur={RegisterFormik.handleBlur}
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
       {RegisterFormik.errors.name && RegisterFormik.touched.name ?  <div className="p-4 mt-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {RegisterFormik.errors.name}
        </div> : ''}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
        value={RegisterFormik.values.email}
        onChange={RegisterFormik.handleChange}
        onBlur={RegisterFormik.handleBlur}
          type="email"
          name="email"

          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email Address
        </label>

        {RegisterFormik.errors.email && RegisterFormik.touched.email ?  <div className="p-4 mt-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {RegisterFormik.errors.email}
        </div> : ""}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
        value={RegisterFormik.values.password}
        onChange={RegisterFormik.handleChange}
        onBlur={RegisterFormik.handleBlur}
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        
        {RegisterFormik.errors.password && RegisterFormik.touched.password  ?  <div className="p-4 mt-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">

          {RegisterFormik.errors.password}
        </div> :"" }
      </div>
       <div className="relative z-0 w-full mb-5 group">
        <input
          value={RegisterFormik.values.rePassword}
          onChange={RegisterFormik.handleChange}
          onBlur={RegisterFormik.handleBlur}
          type="password"
          name="rePassword"
          id="rePassword"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="rePassword"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          rePassword
        </label>

        {RegisterFormik.errors.rePassword && RegisterFormik.touched.rePassword ?  <div className="p-4 mt-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {RegisterFormik.errors.rePassword}

        </div> :''}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          value={RegisterFormik.values.phone}
          onChange={RegisterFormik.handleChange}
          onBlur={RegisterFormik.handleBlur}
          type="tel"
          name="phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone
        </label>
        {RegisterFormik.errors.phone && RegisterFormik.touched.phone ? <div className="p-4 mt-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {RegisterFormik.errors.phone}
        </div>  :''}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
    </div>
  );
}
