import * as yup from 'yup'

const schema = yup.object({
  Name: yup.string().required('Campo obrigatório'),
  Email: yup.string().email().required('Campo obrigatório')
})

export default schema