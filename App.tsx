import { NativeBaseProvider, StatusBar } from 'native-base'
import { SSRProvider } from '@react-aria/ssr'

import { TEMAS } from './src/styles/Themes'
import Routes from './src/route'
import { useEffect } from 'react'
import api from './src/services/api'

export default function App() {
  return (
    <SSRProvider>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Routes />
      </NativeBaseProvider>
    </SSRProvider>
  )
}
