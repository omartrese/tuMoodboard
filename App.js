//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoardProvider } from './BoardContext';

//pages
import Home from "./pages/Home"
import Editor from "./pages/Editor";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <BoardProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Editor" component={Editor} />
                </Stack.Navigator>
            </NavigationContainer>
        </BoardProvider>
    )

}