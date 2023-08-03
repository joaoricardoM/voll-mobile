import { Avatar, Box, Divider, ScrollView, Text, VStack } from "native-base";
import { Title } from "../components/Title";
import { Buttons } from "../components/Button";
import { Card } from "../components/Card";
import { Inputs } from "../components/Input";

export default function Explorar() {
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
        <Inputs label="" placeholder="Digite a especialidade" />
        <Inputs label="" placeholder="Digite sua localização" />

        <Buttons mt={3} mb={3}>
          Buscar
        </Buttons>
      </Box>

      <Title color="blue.500" alignSelf="center" mb={2}>
        Resultado da busca
      </Title>

      <Divider mt={5} mb={5} />

      {[1, 2, 3].map((_, i) => (
        <VStack w="100%" flex={1} alignItems="flex-start" key={i}>
          <Card
            name="Dra. Mariana Luz"
            especiality="Mastologista"
            foto="https://github.com/joaoricardoM.png"
          />
        </VStack>
      ))}
    </ScrollView>
  );
}
