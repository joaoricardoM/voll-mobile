import { VStack, Image, Checkbox, Box, ScrollView, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { Title } from "./components/Title";
import { Inputs } from "./components/Input";
import { Buttons } from "./components/Button";
import { useState } from "react";
import { sessions } from "./utils/json";

export default function Cadastro() {
  const [session, setSession] = useState(0);

  function nextSession() {
    if (session < sessions.length - 1) {
      setSession(session + 1);
    }
  }

  function backSession() {
    if (session > 0) {
      setSession(session - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" mt={8} />

      <Title> {sessions[session].title} </Title>
      <Box>
        {sessions[session]?.text?.map((text) => {
          return (
            <Inputs
              label={text.label}
              placeholder={text.placeholder}
              key={text.id}
            />
          );
        })}
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          {" "}
          Selecione o plano:
        </Text>
        {sessions[session].checkbox.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>
      {session > 0 && (
        <Buttons onPress={() => backSession()} bgColor={"gray.400"}>
          Voltar
        </Buttons>
      )}
      <Buttons onPress={() => nextSession()} mt={4} mb={20}>
        Avançar
      </Buttons>
    </ScrollView>
  );
}
