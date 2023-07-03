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

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title> Faça login em sua conta </Title>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            placeholder="Digite seu e-mail"
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            placeholder="Digite sua senha"
          />
        </FormControl>
      </Box>
      <Button mt={10} w="100%" bgColor="blue.800" borderRadius="lg">
        Entrar
      </Button>

      <Link href="/" mt={2}>
        Esqueceu sua senha ?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
