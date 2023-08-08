import { Avatar, Box, Divider, ScrollView, Text, VStack } from 'native-base'
import { Title } from '../components/Title'
import { Buttons } from '../components/Button'
import { Card } from '../components/Card'
import { Inputs } from '../components/Input'
import { useState } from 'react'
import { getSpecialist } from '../services/specialistService'
import { NavigationProps } from '../@types/navigation'

interface Specialist {
  nome: string
  imagem: string
  especialidade: string
  id: string
}

export default function Explorar({ navigation }: NavigationProps<'Explorar'>) {
  const [state, setState] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [search, setSearch] = useState([])

  async function Search() {
    if (!state || !speciality) return null

    const result = await getSpecialist(state, speciality)
    if (result) {
      setSearch(result)
      console.log(result)
    }
  }

  return (
    <ScrollView p={5}>
      <Box
        w="100%"
        borderRadius="lg"
        p={3}
        mt={10}
        shadow={3}
        borderRightRadius="md"
        bgColor="gray.50"
      >
        <Inputs
          value={speciality}
          onChangeText={setSpeciality}
          label=""
          placeholder="Digite a especialidade"
        />
        <Inputs
          value={state}
          onChangeText={setState}
          label=""
          placeholder="Digite sua localização"
        />

        <Buttons onPress={Search} mt={3} mb={3}>
          Buscar
        </Buttons>
      </Box>

      <Title color="blue.500" alignSelf="center" mb={2}>
        Resultado da busca
      </Title>

      <Divider mt={5} mb={5} />

      {search?.map((specilist: Specialist, i) => (
        <VStack w="100%" flex={1} alignItems="flex-start" key={i}>
          <Card
            name={specilist.nome}
            especiality={specilist.especialidade}
            foto={specilist.imagem}
            onPress={() =>
              navigation.navigate('Agendamento', {
                especialistaId: specilist.id
              })
            }
          />
        </VStack>
      ))}
    </ScrollView>
  )
}
