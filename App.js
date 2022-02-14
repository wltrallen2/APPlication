import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import TechStackScreen from "./app/screens/TechStackScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import ProfessionalHistoryScreen from "./app/screens/ProfessionalHistoryScreen";
import EducationScreen from "./app/screens/EducationScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import RoleDetailScreen from "./app/screens/RoleDetailScreen";

const Tab = createBottomTabNavigator();

const WorkStack = createNativeStackNavigator();
function WorkStackScreen() {
  return (
    <WorkStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
      })}
    >
      <WorkStack.Screen name='List' component={ProfessionalHistoryScreen} />
      <WorkStack.Screen name='Detail' component={RoleDetailScreen} />
    </WorkStack.Navigator>
  )
}

function TabbedResume() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'TechStack' ? 'computer' :
            route.name === 'ProfessionalHistory' ? 'work' :
            route.name === 'Education' ? 'school' :
            route.name === 'Profile' ? 'account-circle' :
            '';

          return <MaterialIcons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.medium,
        headerShown: false
      })}
    >
      <Tab.Screen name="TechStack" component={TechStackScreen} options={{ title: 'Tech Stack' }} />
      <Tab.Screen name="ProfessionalHistory" component={WorkStackScreen} options={{ title: 'Work History' }} />
      <Tab.Screen name="Education" component={EducationScreen} options={{ title: 'Education' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }}/>
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TabbedResume" component={TabbedResume} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}