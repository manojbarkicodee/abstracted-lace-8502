import { createContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
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
// console.log(formdata)
let onsubmit=(e)=>{
    e.preventDefault()
    // fetch("https://reqres.in/api/login",{
    //     method:"POST",
    //     body:JSON.stringify(formdata),
    //     headers:{'Authorization': 'Bearer my-token',"Content-Type":"application/json"}
    // }).then((res)=>res.json()).then((res)=>setstate({...state,token:res.token})).catch((err)=>console.log(err))
    // setdata([...registerdata,formdata])
    let registerdata=[]
    
localStorage.setItem("registerdata",JSON.stringify([...registerdata,formdata]))
    navigate("/signin")

}
let oncheck=(e)=>{
    e.preventDefault()
    let checkdata=JSON.parse(localStorage.getItem("registerdata"))
    console.log(checkdata)

checkdata.forEach(element => {
    if(element.email===formdata.email&&element.password===formdata.password){
        console.log(true)
        setstate({...state,isAuth:true})
        
    }
   
})
// console.log(state)
// let goto=()=>{
    // if(state.isAuth){
        navigate("/")
    // }
   
// }
}
let onlogout=(e)=>{
    e.preventDefault()

    setstate({...state,token:"",isAuth:false})
}
// console.log(state)
    return <AuthContext.Provider value={{onchange,onsubmit,state,onlogout,oncheck}}>{children}</AuthContext.Provider>
}