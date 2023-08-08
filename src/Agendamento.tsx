import { Input, VStack, useToast } from 'native-base'
import { useState } from 'react'
import { Buttons } from '../src/components/Button'
import { agendarConsulta } from '../src/services/consultService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { converterStringParaData } from '../src/utils/conversoes'

export default function Agendamento({ route, navigation }: any) {
  const [data, setData] = useState('')
  const toast = useToast()

  async function agendar() {
    const pacienteId = await AsyncStorage.getItem('pacienteId')
    const { especialistaId } = route.params
    if (!pacienteId || !especialistaId || !data) return
    console.log('oi')
    const dataFormatada = converterStringParaData(data)
    const resultado = await agendarConsulta(
      dataFormatada,
      especialistaId,
      pacienteId
    )
    console.log('oi2')
    if (resultado) {
      console.log('agendada')
      toast.show({
        title: 'Consulta agendada com sucesso',
        backgroundColor: 'green.500'
      })
      return navigation.goBack()
    }
    toast.show({
      title: 'Erro ao agendar consulta',
      description: 'Horário indisponível',
      backgroundColor: 'red.500'
    })
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Input placeholder="Digite a data" onChangeText={setData} />

      <Buttons onPress={agendar}>Agendar</Buttons>
    </VStack>
  )
}
