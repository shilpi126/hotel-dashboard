import React, { useState } from 'react'
import { Input, Label } from '../UI/Input'
import Card from '../UI/Card'
import Button from '../UI/Button'
import {useDispatch} from "react-redux"
import { Link } from 'react-router'


const Login = () => {
    
    const [adminEmail, setAdminEmail]= useState("")
    const [adminPassword, setAdminPassword]= useState("")
    const [error, setError] = useState({});
    const dispatch = useDispatch()

    

    const validateEmail = () => {
        if(!adminEmail.includes("@")){
            setError((prevError)=>({...prevError, email: "Invalid email address"}))
            return false;
        }else{
            setError((prevError) => ({...prevError, email:null}))
            return true;
        }
    }


    const validatePassword = () => {
        if(adminPassword.trim().length <= 6){
            setError((prevError)=>({...prevError, password: "Password must be longer than 6 charecters."}))
            return false;

        }else{
            setError((prevError) => ({...prevError, password:null}))
            return true;
        }
    }


    const isFormValid = () => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if(isEmailValid && isPasswordValid){
            return true;
        }else{
            return false;
        }
    }



    const handleFormSubmit = async(e) => {
        e.preventDefault();

        if(isFormValid()){
            
            // dispatch(login({
            //     adminEmail,
            //     adminPassword
            // }))
        }else{
            console.log("form is not valid")
        }

        setAdminEmail("")
        
        setAdminPassword("")

    }


  return (
    <React.Fragment>
          <div className='bg-slate-950 w-screen h-screen flex justify-center items-center flex-col'>
        <h1 className='text-center text-2xl mb-2 text-white'>Login</h1>

        <Card className='bg-slate-900  w-96 h-96 p-6 '>
        <form onSubmit={handleFormSubmit}>
              
                <div className='h-20'>
                <Label htmlFor="email" label="Email" className="text-white"/>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter Email Here..."
                    value={adminEmail}
                    onChange={(e)=>setAdminEmail(e.target.value)}
                    className="h-10 w-80 outline-none rounded-md  pl-4"
                />
                        {error && <h2 className='text-red-600 text-sm'>{error.email}</h2>}
                </div>
                <div className='h-20'>
                <Label htmlFor="password" label="Password" className="text-white"/>
                <Input
                    type="password"
                    id="password"
                    placeholder="Enter Password Here..."
                    value={adminPassword}
                    onChange={(e)=>setAdminPassword(e.target.value)}
                    className="h-10 w-80 outline-none rounded-md  pl-4"
                />
                        {error && <h2 className='text-red-600 text-sm'>{error.password}</h2>}
                </div>
                <Button
                type="submit"
                name="Login"
                className="bg-orange-600 text-white h-10 w-80 mt-4 text-2xl text-center"
                />
                
            </form>

        </Card>

        <div className='text-white mt-4'>Don't Have Account ? <Link to="/register">Signup</Link></div>
        </div>
    </React.Fragment>
  )
}

export default Login