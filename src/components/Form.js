import React,{useContext, useState} from "react";
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Buttons from "./Buttons"
import { Switch,Route } from "react-router-dom";
import {Context} from "../FormContext"

export default function Form(){
    const {step} = useContext(Context)
    return(
        <>
        <Switch>
            <Route exact path="/">
                <FormUserDetails/>
            </Route> 
            <Route exact path="/formpersonaldetails">
                <FormPersonalDetails/>
            </Route>     
        </Switch>
            <Buttons/>
        </>
    )
}