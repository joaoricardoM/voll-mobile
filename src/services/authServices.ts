import api from './api'

export async function authLogin(email: string, senha: string) {
  if (!email || !senha) return null
  try {
    const result = await api.post('/auth/login', { email, senha })
    return result.data
  } catch (error) {
    console.log(error)
    return null
  }
}
