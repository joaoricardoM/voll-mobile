import { Text, VStack, ScrollView, Divider, Avatar } from "native-base";
import { Title } from "../components/Title";

export default function Perfil() {
  return (
    <ScrollView flex={1} mt={8}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar
          size="xl"
          source={{ uri: "https://github.com/joaoricardoM.png" }}
          mt={5}
        />
        <Title color="blue.500">Informações Pessoais: </Title>

        <Title fontSize="lg" mb={1}>
          João Ricardo
        </Title>
        <Text>14/12/1997</Text>
        <Text>Campinas</Text>

        <Divider mt={5} />

        <Title color="blue.500" mb={1}>
          Histórico Médico
        </Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
