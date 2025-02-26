import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { ColorRing} from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function Register() {
  
const [iserror, setiserror] = useState(null)
const [Issucc, setIssucc] = useState(false)
const [Flag, setFlag] = useState(false)
const navigate =  useNavigate()

let user = {
  name : '',
  phone : '',
  password: '',
  rePassword: '',
  email: ''

}


async function RegisterUser (values){
  setFlag(true)

  const result = await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)
  .then(()=>{
    setIssucc(true)
    setFlag(false)

    setTimeout(() => {
      navigate('/login')
      
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
    onSubmit :RegisterUser,


    validationSchema : Yup.object().shape({

      name: Yup.string().required("Name is required ").min(3, "Minmum must be 3 ").max(12, "Max Must be less than 12 ") ,
      email: Yup.string().email("Invaild Value").required() , 
      password : Yup.string().min(6).max(12) ,
      rePassword :Yup.string().required().oneOf([Yup.ref("password")],"Re password dosen't match ") ,
      phone  : Yup.string().required().matches(/^01[0125][0-9]{8}$/ , "Not valid ")


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
