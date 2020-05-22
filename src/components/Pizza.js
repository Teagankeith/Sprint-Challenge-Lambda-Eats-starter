import React from "react"

function Pizza({details}) {
    if(!details) {
        return <p> We are loading your pizza</p>
    }

    return (
    <div className="pizza-container">
        <h2>Name: {details.name}</h2>
        <p>Email: {details.email}</p> 
        <p>Size: {details.size}</p>
        <p>Toppings: Cheese, {details.onion ? 'Onions,': ''} {details.peperoni ? 'Peperoni,': ''} {details.ham ? 'Ham,': ''} {details.bacon ? 'Bacon,': ''} {details.sausage ? 'Sausage,': ''} </p>
        <p>Instructions: {details.instructions}</p>
    </div>
    )

}


export default Pizza