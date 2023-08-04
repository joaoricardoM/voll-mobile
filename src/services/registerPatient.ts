import { Paciente } from '../interfaces/Paciente'
import api from './api'

export async function registerPatient(paciente: Paciente) {
  if (!paciente) return null
  try {
    const result = await api.post('/paciente', paciente)
    console.log(result.data)
    return result.data
  } catch (error) {
    // console.log('oi', error)
    return null
  }
}

export async function getDataPatient(id: string) {
  try {
    const result = await api.get(`/paciente/${id}`)
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
    return null
  }
}
