import { Avatar, Text, VStack } from 'native-base'
import { Buttons } from './Button'

interface CardProps {
  name: string
  foto: string
  especiality: string
  date?: string
  answered?: boolean
  scheduled?: boolean
  onPress?: () => void
}

export function Card({
  name,
  foto,
  date,
  especiality,
  answered,
  scheduled,
  onPress
}: CardProps) {
  return (
    <VStack
      w="100%"
      bg={answered ? 'blue.100' : 'white'}
      p="5"
      borderRadius="lg"
      shadow="2"
      mb={5}
    >
      <VStack flexDir="row">
        <Avatar size="lg" source={{ uri: foto }} />
        <VStack pl="4">
          <Text fontSize="md" bold>
            {name}
          </Text>
          <Text>{especiality}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      <Buttons mt={4} onPress={onPress}>
        {scheduled ? 'cancelar' : 'Agendar Consulta'}
      </Buttons>
    </VStack>
  )
}
