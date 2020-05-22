import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import * as yup from "yup"
import axios from "axios"

import Form from "./Form/Form"
import formSchema from "./Form/validation/formSchema"
import Pizza from "./components/Pizza"


import StyledBody from "./components/Complete"
import StyledHome from "./components/Home"
import StyledOrder from "./components/Order"



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
   instructions: "",
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
  instructions: "",
}
 
  const [formValues, setFormValues] = useState(initialFormValues)
  const [post, setPost] = useState([])
  const [formErrors, setFormErrors] = useState(initialErrorValues)
  const [pizza, setPizza] = useState([])

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
  


  const onSubmit = evt => {
    evt.preventDefault()
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size : formValues.size,
      ham : formValues.ham,
      peperoni: formValues.peperoni,
      sausage: formValues.sausage,
      onion: formValues.onion,
      bacon: formValues.bacon,
      instructions: formValues.instructions,
  
    }

    axios.post("https://reqres.in/api/pizzas", newPizza)
    .then((response) => {
      setPost([response.data]);
      setPizza([...pizza, response.data]);
      setFormValues(initialFormValues);
    })
    .catch((err) => console.log(err.response), "An error happened");
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
      <Router>
        <Route exact path="/">
        <StyledHome>
        <header>Lambda Eats</header>
        <img src="../Assets/Pizza.jpg" alt="Loading"></img>
        <p> Welcome to the Keith Pizzaria! Best prices and best ingredients around!</p>
        <Link to="/pizza"><button>Order now!</button></Link>
        </StyledHome>
        </Route>
        <Route exact path="/pizza">
         <StyledOrder>
         <Form 
         values={formValues}
          errors={formErrors} 
          checkBoxChange={checkboxChange} 
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          />
          
          {

            pizza.map(formValues => {
              return (
                <Pizza key={formValues.id} details={formValues}/>
              )
            })
          }
          </StyledOrder>
        </Route>
        <Route exact path ="/Complete">
        <StyledBody>
          <div className="thankyou">
          <h1> Thank you for your order!</h1>
          <p>An email will be sent to you when it's on it's way.</p>
          </div>
          <div>
          <h2>For now enjoy this image of a dog eating pizza! :)</h2>
          <iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen alt="loading...."></iframe>
          </div>

          
        </StyledBody>
        </Route>
      </Router>
    </div>
  );
};
export default App;
