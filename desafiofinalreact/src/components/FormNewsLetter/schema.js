import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo x')
})

export default schema