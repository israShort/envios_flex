import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Scanner from '../screens/Scanner';

const Stack = createStackNavigator();

const MainStack = ({ route }) => {
    return (
        <Stack.Navigator
            initialRouteName="Scanner"
        >
            <Stack.Screen name="Scanner" component={Scanner}
                options={({ navigation }) => ({
                    headerTitle: 'Scanner',
                    headerTintColor: "black"
                })}
            />
        </Stack.Navigator>
    );
}

export { MainStack };