import { Image, Checkbox, Box, ScrollView, Text, useToast } from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'
import { Inputs } from './components/Input'
import { Buttons } from './components/Button'
import { useState } from 'react'
import { sections } from './utils/json'
import { registerPatient } from './services/registerPatient'
import { NavigationProps } from './@types/navigation'

export default function Cadastro({ navigation }: NavigationProps<'Cadastro'>) {
  const toast = useToast()
  const [session, setSession] = useState(0)
  const [dados, setDados] = useState({} as any)
  const [plano, setPlano] = useState([] as number[])

  function nextSession() {
    if (session < sections.length - 1) {
      setSession(session + 1)
    } else {
      register()
    }
  }

  function backSession() {
    if (session > 0) {
      setSession(session - 1)
    }
  }

  function updateDados(id: string, valor: string) {
    setDados({ ...dados, [id]: valor })
  }

  async function register() {
    const result = await registerPatient({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: plano.length > 0,
      planosSaude: plano,
      imagem: dados.imagem
    })

    if (result) {
      toast.show({
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer login',
        bgColor: 'green.500'
      })
      navigation.replace('Login')
    } else {
      toast.show({
        title: 'Erro ao cadastrar',
        description: 'Verifique os dados e tente novamente',
        bgColor: 'red.500'
      })
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" mt={8} />

      <Title> {sections[session].title} </Title>
      <Box>
        {sections[session]?.text?.map((text) => {
          return (
            <Inputs
              label={text.label}
              placeholder={text.placeholder}
              key={text.id}
              secureTextEntry={text.secureTextEntry}
              value={dados[text.name]}
              onChangeText={(texts) => updateDados(text.name, texts)}
            />
          )
        })}
      </Box>
      <Box>
        {session === 2 && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
            Selecione o plano:
          </Text>
        )}

        {sections[session].checkbox.map((checkbox) => {
          return (
            <Checkbox
              key={checkbox.id}
              value={checkbox.value}
              onChange={() => {
                setPlano((previousPlan) => {
                  if (previousPlan.includes(checkbox.id)) {
                    return previousPlan.filter((id) => id !== checkbox.id)
                  }
                  return [...previousPlan, checkbox.id]
                })
              }}
              isChecked={plano.includes(checkbox.id)}
            >
              {checkbox.value}
            </Checkbox>
          )
        })}
      </Box>
      {session > 0 && (
        <Buttons onPress={() => backSession()} bgColor={'gray.400'}>
          Voltar
        </Buttons>
      )}
      <Buttons onPress={() => nextSession()} mt={4} mb={20}>
        {session === 2 ? 'Finalizar' : 'Avançar'}
      </Buttons>
    </ScrollView>
  )
}
