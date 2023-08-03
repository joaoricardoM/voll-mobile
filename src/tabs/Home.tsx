import {
  Box,
  Center,
  Divider,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Inputs } from "../components/Input";
import Logo from "../assets/Logo.png";
import { Buttons } from "../components/Button";
import { Title } from "../components/Title";
import { depositions } from "../utils/mock";

export default function Main() {
  return (
    <ScrollView flex={1} mt={5} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Image source={Logo} alt="Logo Voll" mt={10} />
        <Title color="blue.500">Boas-vindas!</Title>

        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={10}
          shadow={3}
          borderRightRadius="md"
          bgColor="gray.50"
        >
          <Inputs placeholder="Digite a especialidade" />
          <Inputs placeholder="Digite sua localização" />

          <Buttons mt={3} mb={3}>
            Buscar
          </Buttons>
        </Box>

        <Title color="blue.800" alignSelf="center">
          Depoimentos
        </Title>
        <VStack space={3} divider={<Divider />} w="100%">
          {depositions.map((d) => (
            <Box key={d.id} w="100%" borderRadius="lg" p={3}>
              <Text color="gray.300" fontSize="md" textAlign="justify">
                {d.text}
              </Text>
              <Text
                color="gray.500"
                fontSize="lg"
                fontWeight="bold"
                alignSelf="center"
                mt="2"
              >
                {d.titulo}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}
