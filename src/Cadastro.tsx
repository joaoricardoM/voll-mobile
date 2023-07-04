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
import { useState } from "react";

export default function Login() {
  const [session, setSession] = useState(0);
  const sessions = [
    {
      id: 1,
      title: "Insira alguns dados básicos",
      text: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Digite seu E-mail",
        },
      ],
    },
    {
      id: 2,
      title: "Agora, mais alguns dados sobre você",
      text: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Digite seu nome CEP",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Digite seu E-mail",
        },
      ],
    },
  ];

  function nextSession() {
    setSession(session + 1);
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title> {sessions[session].title} </Title>
      <Box>
        {sessions[session].text.map((text) => {
          return (
            <Inputs
              label={text.label}
              placeholder={text.placeholder}
              key={text.id}
            />
          );
        })}
      </Box>
      <Buttons onPress={() => nextSession()}>Avançar</Buttons>
    </VStack>
  );
}
