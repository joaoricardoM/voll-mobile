import { Avatar, Box, Divider, ScrollView, Text, VStack } from "native-base";
import { Title } from "../components/Title";
import { Buttons } from "../components/Button";
import { Card } from "../components/Card";

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Title color="blue.500">Minhas Consultas</Title>

      <Buttons mt={5} mb={5}>
        Agendar nova consulta
      </Buttons>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas consultas
      </Title>
      <Card
        name="Dr.Ana lúcia"
        especiality="Angiologista"
        foto="https://github.com/joaoricardoM.png"
        date="20/03/2023"
        answered
      />

      <Divider mt={5} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas passadas
      </Title>

      <Card
        name="Dr.Paulo Matos"
        especiality="Otorrinolaringologista"
        foto="https://github.com/joaoricardoM.png"
        date="09/08/2022"
        scheduled
      />
      <Card
        name="Dra. Mariana Luz"
        especiality="Mastologista"
        foto="https://github.com/joaoricardoM.png"
        date="07/10/2022"
        scheduled
      />
    </ScrollView>
  );
}
