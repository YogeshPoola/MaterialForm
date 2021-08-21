import React,{useState} from "react";
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Buttons from "./Buttons"
import { Switch,Route } from "react-router-dom";

export default function Form(){

    return(
        <>
            <FormUserDetails/>
            <FormPersonalDetails/>
            <Buttons/>
        </>
    )
}