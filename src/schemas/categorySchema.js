import * as yup from 'yup'

const categorySchema = yup.object().shape({
    name: yup.string("Name must be a string!").required("Please, enter a name!"),
    image: yup.string("Password must be a number only!").url('Must be a url of an image!'),
})

export default categorySchema;