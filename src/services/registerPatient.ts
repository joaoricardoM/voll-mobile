import { Paciente } from '../interfaces/Paciente'
import api from './api'

export async function registerPatient(paciente: Paciente) {
  if (!paciente) return null
  try {
    const result = await api.post('/paciente', paciente)
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
    return null
  }
}
