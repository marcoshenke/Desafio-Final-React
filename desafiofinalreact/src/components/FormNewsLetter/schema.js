import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email().required('Campo obrigatório')
})

export default schema