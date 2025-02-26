import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { ColorRing} from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function Login() {
  
const [iserror, setiserror] = useState(null)
const [Issucc, setIssucc] = useState(false)
const [Flag, setFlag] = useState(false)
const navigate =  useNavigate()

let user = {
 
  
  password: '',
  email: ''

}


async function SigninUser (values){
  setFlag(true)

  const result = await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)
  .then(()=>{
    setIssucc(true)
    setFlag(false)

    setTimeout(() => {
      navigate('/')
      
    }, 2000);
   
    
  })
  .catch((x)=>{
    setiserror(x.response.data.message)
    setFlag(false)
    setTimeout(() => {
      setiserror(null)

    }, 2000);
      
 
  })
  
}

  const RegisterFormik =  useFormik ({
    initialValues:  user,
    onSubmit :SigninUser,


    validationSchema : Yup.object().shape({

      email: Yup.string().email("Invaild Value").required() , 
      password : Yup.string().min(6).max(12) ,


    })
    
  });





  return (
    <div className=" p-5 ">
      {iserror != null ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{iserror}</span> 
      </div> : ''}
      {Issucc == true ? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Congurtlion</span> 
      </div> : ''}
      <h2 className=" text-center ">Register Now </h2>
      <form onSubmit={RegisterFormik.handleSubmit} className="max-w-md mx-auto">
   
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
      
      
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
       { Flag ==false ?"Submit" :  <ColorRing
        visible={true}
        height="30"
        width="30"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
      />}

 
  


      </button>
    </form>
    </div>
  );
}
