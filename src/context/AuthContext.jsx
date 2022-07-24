import { createContext, useState } from "react";
import axios from "axios"
export let AuthContext=createContext()

export let AuthContextProvider=({children})=>{
    let navigate=useNavigate()
    let [registerdata,setdata]=useState([])
    let [state,setstate]=useState({token:'',isAuth:false})
    let [formdata,setformdata]=useState({})
let onchange=(e)=>{
let {name,value}=e.target
setformdata({...formdata,[name]:value})
}
console.log(formdata)
let onsubmit=(e)=>{
    e.preventDefault()
    // fetch("https://reqres.in/api/login",{
    //     method:"POST",
    //     body:JSON.stringify(formdata),
    //     headers:{'Authorization': 'Bearer my-token',"Content-Type":"application/json"}
    // }).then((res)=>res.json()).then((res)=>setstate({...state,token:res.token})).catch((err)=>console.log(err))
    setdata([...registerdata,formdata])
localStorage.setItem("registerdata",JSON.stringify(registerdata))
    

}
let onlogout=(e)=>{
    e.preventDefault()

    setstate({...state,token:"",isAuth:false})
}
console.log(state)
    return <AuthContext.Provider value={{onchange,onsubmit,state,onlogout}}>{children}</AuthContext.Provider>
}