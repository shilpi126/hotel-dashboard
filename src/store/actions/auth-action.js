import axios from "axios"
import { API_KEY } from "../../secret"
// const API_KEY = "AIzaSyDZe0RQilpVKR_0LmvxrBuHtORS55URn1w"



export const register = (adminData) => {
    return async (dispatch) => {
        const adminRegister = async () => {

            const {adminEmail,adminPassword} = adminData;

            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,{
                
                email:adminEmail,
                password:adminPassword,
                
                returnSecureToken:true
            })

            const data = response.data
            const uid = data.localId
            const token = data.idToken;
            localStorage.setItem("uid",uid)
            localStorage.setItem("token", token)
            
            
        }

        try{
        await adminRegister()
        
        }catch(error){
        console.log(error.message)
        }
    }
}



export const login = (adminData) => {
    return async (dispatch) => {
        const adminLogin = async () => {
            const {adminEmail,adminPassword} = adminData;
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,{
                
                email:adminEmail,
                password:adminPassword,
                returnSecureToken:true
            })

            // const data = response.data
            // const uid = data.localId
            // const token = data.idToken;
            // localStorage.setItem("uid",uid)
            // localStorage.setItem("token", token)
            
            
        }

        try{
        await adminLogin()
        
        }catch(error){
        console.log(error.message)
        }
    }
}