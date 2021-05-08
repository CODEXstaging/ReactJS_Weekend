import { createContext } from "react";

//creating Context Object using createContext Method.
//new Context
//helper methods / helper function / factory fn
let personContext =createContext()

//configure provider
let PersonProvider=personContext.Provider

//configure consumer
let PersonConsumer=personContext.Consumer

export  { PersonProvider , PersonConsumer } // -> ES6 sytax 
//{ PersonProvider:PersonProvider, PersonConsumer:PersonConsumer}


