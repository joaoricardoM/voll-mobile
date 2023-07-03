import Login from "./src/Login";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

import { TEMAS } from "./src/styles/Themes";

export default function App() {
  return (
    <SSRProvider>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Login />
      </NativeBaseProvider>
    </SSRProvider>
  );
}
