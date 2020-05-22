import * as yup from "yup"


const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(4, "The name must be at least four characters")
    .required("You must enter a name for the order"),
    email: yup.string()
    .email("You must enter a valid email")
    .min(10, "Your email must ben at least ten characters long")
    .required("You must enter an email for the order"),
    size: yup.string()
    .required("You must select a size")
})


export default formSchema