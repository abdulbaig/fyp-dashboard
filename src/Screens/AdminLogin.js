

import React from 'react'
import "./Login.css"
import axios from "axios";
import {useFormik} from "formik"
import * as Yup from "yup";
import "./AdminLogin.css"
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const AdminLogin = () => {
  const sendData = async (values)=>{
    const res = await axios.post("https://fyp-2022.herokuapp.com/api/auth/login",
            {
              "email":values.user_name,
              "password":values.password
            })
            if(res.status === 200){
            localStorage.setItem("token",res.data.token)
            navigate("/PermanentDrawerLeft");}
            else{
              // console.log(res.data)
              alert("incorrect password")
            }
  }
    const formik = useFormik({
        initialValues: {
          user_name: '',
          password: '',
        },
    
        validationSchema: Yup.object({
          user_name: Yup.string().max(15, "name must contain 15 letters or less")
          .required("required"),
    
          password: Yup.string().min(5, "name must contain atleast 5 letters or digits")
          .required("required"),
    
          
        }),

        onSubmit: async (values) => {
          sendData(values)
          
         
            // const res = await axios.post("https://fyp-2022.herokuapp.com/api/auth/login",
            // {
            //   "email":values.user_name,
            //   "password":values.password
            // })
            // if(res.status === 200){
            // localStorage.setItem(values.token,"token")
            // navigate("/PermanentDrawerLeft");}
            // else{
            //   console.log(res.data)
            // }
          
         
         
          },
    });

    console.log(formik.touched); 
    const navigate = useNavigate();

  return (
    <div>
      <div className='dashboard-nav'>
            <h2>Community Assist Admin Panel</h2>
          </div>
        <div className="login-main">
          
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="login-heading">
            <h2>Log <span className='login-in-span'>In</span></h2>
        </div>
        <div style={{alignSelf:'center'}}>
        <div className="login-input-container">
        <input 
        style={{
          width: "250px",
          height: "40px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "2px solid #02a95c",
          paddingLeft: "10px",
        }}
        className="login-inputs"
        id ="user_name"
        name= "user_name"
        type="text"
        placeholder="EnterUserName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_name}
        />
        <div className='login-errors'>
        {formik.touched.user_name && formik.errors.user_name ? <p style={{color:"red", marginTop: '-8%', marginLeft: '-60%'}}>{formik.errors.user_name}</p> : null }
        </div>
        </div>

        

        <div className="login-input-container">
        <input 
        style={{
          width: "250px",
          height: "40px",
          borderWidth: "1px",
          focus: "1px #02a95c",
          borderRadius: "10px",
          border: "2px solid #02a95c",
          paddingLeft: "10px",
        }}
        className="login-inputs"
        id ="password"
        name= "password"
        type="password"
        placeholder="Enter Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <p style={{color:"red", marginTop: '-8%', marginLeft: '-60%'}}>{formik.errors.password}</p> : null }
        </div>
        </div>
<div ></div>
        <div className='login-button-holder'  onSubmit={formik.handleSubmit}>
        
        <Button
                width='250px'
                height='40px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Log In'
                
                />
         </div>
        
        

        </form>
        
        </div>
    
    </div>
  )
}

export default AdminLogin
