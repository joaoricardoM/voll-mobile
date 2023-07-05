import {
  VStack,
  Image,
  Text,
  Box,
  Input,
  FormControl,
  Button,
  Link,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Title } from "./components/Title";
import { Inputs } from "./components/Input";
import { Buttons } from "./components/Button";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title> Faça login em sua conta </Title>
      <Box>
        <Inputs label="Email" placeholder="Insira seu e-mail" />
        <Inputs label="Senha" placeholder="Insira seu senha" />
      </Box>
      <Buttons>Entrar</Buttons>

      <Link href="/" mt={2}>
        Esqueceu sua senha ?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text
            color="blue.500"
            onPress={() => navigation.navigate("Cadastro")}
          >
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
