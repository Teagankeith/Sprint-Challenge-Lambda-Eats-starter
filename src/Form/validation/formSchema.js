import * as yup from "yup"


const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(2, "The name must be at least two characters")
    .required("You must enter a name for the order"),
    email: yup.string()
    .email("You must enter a valid email")
    .min(10, "Your email must ben at least ten characters long")
    .required("You must enter an email for the order"),
    size: yup.string()
    .required("You must select a size"),
    instructions: yup.string()
    .trim()
    .min(5, "The instructions must be at least five characters")
    
})


export default formSchema