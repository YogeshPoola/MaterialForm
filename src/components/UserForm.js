import React,{useState} from "react";

export default function UserForm(){

    //States
    const [step,setStep]=useState(1)
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [occupation,setOccupation]=useState("")
    const [city,setCity]=useState("")
    const [bio,setBio]=useState("")

    //Methods
    const nextStep=()=>{setStep(prevState=>prevState+1)}

    return(
        <>

        </>
    )
}