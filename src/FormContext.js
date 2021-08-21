import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props){

    //STATES
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [occupation,setOccupation]=useState("")
    const [city,setCity]=useState("")
    const [bio,setBio]=useState("")

    // STATE ARRAY
    const stateArray=[firstName,lastName,email,occupation,city,bio]

    //METHODS
    // SETSTATE METHOD ARRAY
    const setStateArray=[setFirstName,setLastName,setEmail,setOccupation,setCity,setBio]
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
    <Context.Provider value={{ firstName,lastName,email,occupation,city,bio,handleChange }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
