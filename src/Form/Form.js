import React from "react"
import * as yup from "yup"
import axios from "axios"


export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        errors,
        checkBoxChange
    } = props

    return (
        <form onSubmit={onSubmit}>
            <div className='schema-errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.ham}</div>
                <div>{errors.peperoni}</div>
                <div>{errors.sausage}</div>
                <div>{errors.onion}</div>
                <div>{errors.bacon}</div>
            </div>
            <label name="name"> Name: &nbsp;</label>
                <input  
                type="text"
                name="name"
                placeholder="Enter your name"
                value= {values.name}
                onChange={onInputChange}
                />

            <label name="email">Email for Order: &nbsp;</label>
                <input
                type="email"
                name="email"
                placeholder="Enter a email for the order"
                value= {values.email}
                onChange = {onInputChange}
                />


            <label name="size">Pizza Size</label>
                <select name="size" onChange={onInputChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xtra-large">Xtra Large</option>
                </select>

            <label name="ham">Ham: &nbsp;</label>
                <input 
                type="checkbox"
                name="ham"
                value={values.ham}
                onChange={checkBoxChange}
                />

            <label name="peperoni">Peperoni: &nbsp;</label>
                <input 
                type="checkbox"
                name="peperoni"
                value={values.peperoni}
                onChange={checkBoxChange}
                />

            <label name="sausage">Sauasge: &nbsp;</label>
                <input 
                type="checkbox"
                name="sausage"
                value={values.sausage}
                onChange={checkBoxChange}
                />

            <label name="onion">Onion: &nbsp;</label>
                <input 
                type="checkbox"
                name="onion"
                value={values.onion}
                onChange={checkBoxChange}
                />

            <label name="bacon">Bacon: &nbsp;</label>
                <input 
                type="checkbox"
                name="bacon"
                value={values.bacon}
                onChange={checkBoxChange}
                />
















        </form>
       

    )
}

