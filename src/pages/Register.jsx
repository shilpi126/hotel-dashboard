import React, { useState } from 'react'
import { Input, Label } from '../UI/Input'
import Card from '../UI/Card'
import Button from '../UI/Button'


const Register = () => {
    const [adminName, setAdminName]= useState("")
    const [adminEmail, setAdminEmail]= useState("")
    const [adminPassword, setAdminPassword]= useState("")


  return (
    <React.Fragment>

        <div className='bg-slate-950 w-screen h-screen flex justify-center items-center flex-col'>
        <h1 className='text-center text-2xl mb-6 text-white'>Register</h1>
          <Card className='bg-slate-900  w-96 h-96 p-6 '>
          <form >
                <div>
                <Label htmlFor="name" label="Name" className="text-white "/>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter Name Here..."
                    value={adminName}
                    onChange={(e)=>setAdminName(e.target.value)}
                    className="h-10 w-80 outline-none rounded-md  mb-4 pl-4"
                />
                </div>
                <div>
                <Label htmlFor="email" label="Email" className="text-white"/>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter Email Here..."
                    value={adminEmail}
                    onChange={(e)=>setAdminEmail(e.target.value)}
                    className="h-10 w-80 outline-none rounded-md mb-4 pl-4"
                />
                </div>
                <div>
                <Label htmlFor="password" label="Password" className="text-white"/>
                <Input
                    type="password"
                    id="password"
                    placeholder="Enter Password Here..."
                    value={adminPassword}
                    onChange={(e)=>setAdminPassword(e.target.value)}
                    className="h-10 w-80 outline-none rounded-md mb-4 pl-4"
                />
                </div>
                <Button
                type="submit"
                name="Register"
                className="bg-orange-600 text-white h-10 w-80 mt-4 text-2xl text-center"
                />
                
            </form>

        </Card>

        <div className='text-white mt-4'>Already Have Account ? Login</div>
        </div>
    </React.Fragment>
  )
}

export default Register