import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Title } from './components/Title'
import { Inputs } from './components/Input'
import { Buttons } from './components/Button'
import { useState } from 'react'
import { authLogin } from './services/authServices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import { NavigationProps } from './@types/navigation'

export default function Login({ navigation }: NavigationProps<'Login'>) {
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verifyLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
        setLoading(false)
      }
    }
    verifyLogin()
  }, [])

  interface TokenProps {
    token: string
    id: string
  }

  async function login() {
    const result = await authLogin(email, password)

    if (result) {
      const { token } = result
      AsyncStorage.setItem('token', token)

      const tokenDecode = jwtDecode(token) as TokenProps
      const patientId = tokenDecode.id

      AsyncStorage.setItem('PatientId', patientId)
      navigation.replace('Tabs')
    } else {
      toast.show({
        title: 'Erro no login',
        description: 'O email ou senha não conferem',
        bgColor: 'red.500'
      })
    }
  }
  // if (loading) {
  //   return null
  // }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title> Faça login em sua conta </Title>
      <Box>
        <Inputs
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Insira seu e-mail"
        />
        <Inputs
          value={password}
          onChangeText={setPassWord}
          secureTextEntry
          label="Senha"
          placeholder="Insira seu senha"
        />
      </Box>
      <Buttons onPress={login}>Entrar</Buttons>

      <Link href="/" mt={2}>
        Esqueceu sua senha ?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text
            color="blue.500"
            onPress={() => navigation.navigate('Cadastro')}
          >
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  )
}
