// import { toast } from 'react-toastify'
// import api from '../services/api'

// export default function signIn(req, res) {
//   api
//     .post('/user/authenticate', {
//       user: {
//         name: req.name,
//         password: req.password
//       }
//     })
//     .then(res => {
//       if (res.status === 200) {
//         toast.success('Login realizado com sucesso!')
//       }
//     })
//     .catch(err => {
//       if (err.response.status === 422) {
//         toast.error('Ops! Verifique os dados!')
//       }

//       if (err.response.status === 404) {
//         toast.error('Ops! Verifique os dados!')
//       }

//       if (err.response.status === 405) {
//         toast.error('Falha na comunicação com servidor!')
//       }

//       if (err.response.status === 500) {
//         toast.error('Falha no servidor!')
//       }
//     })
// }
