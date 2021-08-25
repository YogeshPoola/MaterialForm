import React, { useState } from "react";
import { useLocation } from 'react-router-dom'

const Context = React.createContext();

function ContextProvider(props){

    //STATES
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [occupation,setOccupation]=useState("")
    const [city,setCity]=useState("")
    const [bio,setBio]=useState("")
    const [step,setStep]=useState(0)

    // STATE ARRAY
    const stateArray=[firstName,lastName,email,occupation,city,bio,step]

    // Page Index Object
    const pageIndex={
        [1] : 'formuserdetails',
        [2] : 'formpersonaldetails'
    }
    //METHODS
    // SETSTATE METHOD ARRAY
    const setStateArray=[setFirstName,setLastName,setEmail,setOccupation,setCity,setBio]
    //Handle Step Changes
    const nextStep=()=>{
        console.log("nextStep")
        setStep(step+1)
    }
    const prevStep=()=>{
        console.log("prevStep")
        setStep(step-1)
   }
   console.log(step)
   const location = useLocation();
   console.log(`path : ${location.pathname}`);
    //Handle Input Changes
    const handleChange=e=>{
        switch (e.target.name) {
            case "firstName":
                setFirstName(e.target.value)
                break
        
            case "lastName":
                setLastName(e.target.value)
                break

            case "email":
                setEmail(e.target.value)
                break

            case "occupation":
                setOccupation(e.target.value)
                break
            
            case "city":
                setCity(e.target.value)
                break
    
            case "bio":
                setBio(e.target.value)
                break
        }
    }

  return (
    <Context.Provider value={{ firstName,lastName,email,occupation,city,bio,step,pageIndex,nextStep,prevStep,handleChange }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
