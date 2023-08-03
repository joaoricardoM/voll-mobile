import { Text, VStack } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Perfil from "./Perfil";
import Explorar from "./Explorar";
import Consultas from "./Consulta";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: { backgroundColor: "#002851" },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#fff",
};

const tabs = [
  {
    name: "Home",
    component: Home,
    icon: "home",
  },
  {
    name: "Consultas",
    component: Consultas,
    icon: "calendar",
  },
  {
    name: "Explorar",
    component: Explorar,
    icon: "search",
  },
  {
    name: "Perfil",
    component: Perfil,
    icon: "person",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
