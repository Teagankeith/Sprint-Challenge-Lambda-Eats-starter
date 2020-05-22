import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import * as yup from "yup"

import Form from "./Form/Form"
import formSchema from "./Form/validation/formSchema"


const App = () => {
 
 const initialFormValues = {
   name: "",
   email: "",
   size : "",
   ham : false,
   peperoni: false,
   sausage: false,
   onion: false,
   bacon: false,
 }
 
 const initialErrorValues = {
  name: "",
  email: "",
  size : "",
  cheese: false,
  ham : false,
  peperoni: false,
  sausage: false,
  onion: false,
  bacon: false,
}
 
  const [formValues, setFormValues] = useState(initialFormValues)
  const [post, setPost] = useState([])
  const [formErrors, setFormErrors] = useState(initialErrorValues)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)  
      .then( valid => {
          setFormErrors({
              ...formErrors,
              [name]: ""
            });
      })    
      .catch( err => { 
          console.log(err.error)
          setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
         
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  

  const checkboxChange = evt => {
    const {name} = evt.target
    const newStatus = {
      ...formValues, [name] : evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    }
    setFormValues(newStatus)
  }
  
  
  
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Router>
        <Route exact path="/Order">
         <Form values={formValues} errors={formErrors} checkBoxChange={checkboxChange} onInputChange={onInputChange}/>
        </Route>
      </Router>
    </div>
  );
};
export default App;
