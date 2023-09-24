import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    usuario: yup.
    string().
    required('Por favor digite seu usuário'),

    senha: yup.
    string()
    .required('Por favor digite sua senha')
})