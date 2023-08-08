import { Text, VStack, ScrollView, Divider, Avatar } from 'native-base'
import { Title } from '../components/Title'
import { useState, useEffect } from 'react'
import { getDataPatient } from '../services/registerPatient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Paciente } from '../interfaces/Paciente'
import { Buttons } from '../components/Button'
import { NavigationProps } from '../@types/navigation'

export default function Perfil({ navigation }: NavigationProps<'Perfil'>) {
  const [data, setData] = useState({} as Paciente)

  useEffect(() => {
    async function dataPatient() {
      const response = await AsyncStorage.getItem('PatientId')
      if (!response) return null

      const result = await getDataPatient(response)
      if (result) {
        setData(result)
      }
    }
    dataPatient()
  }, [])

  function logout() {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('PatientId')

    navigation.replace('Login')
  }
  return (
    <ScrollView flex={1} mt={8}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar size="xl" source={{ uri: data?.imagem }} mt={5} />
        <Title color="blue.500">Informações Pessoais: </Title>

        <Title fontSize="lg" mb={1}>
          {data?.nome}
        </Title>
        <Text>{data?.email}</Text>
        <Text>{data?.endereco?.estado}</Text>

        <Divider mt={5} />

        <Title color="blue.500" mb={1}>
          Histórico Médico
        </Title>
        {data?.planosSaude?.map((plano, index) => (
          <Text key={index}>{plano}</Text>
        ))}

        <Buttons onPress={logout}>Deslogar</Buttons>
      </VStack>
    </ScrollView>
  )
}
