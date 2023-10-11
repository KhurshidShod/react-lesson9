import * as yup from 'yup'

const userSchema = yup.object().shape({
    fullName: yup.string("Name must be a string!").required("Please, enter a name!"),
    password: yup.string("Password must be a number only!").min(8),
    email: yup.string().email("Please, enter a valid email")
})

export default userSchema;