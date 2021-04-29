import React from 'react'
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"
import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup'
import { Button} from 'react-native-elements'
import {Icon} from 'react-native-elements/dist/icons/Icon'

const Stack = createStackNavigator()


export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={op} initialRouteName="UserList" >
                <Stack.Screen  
                    name="UserList" 
                    component={UserList} 
                    options={({navigation}) => {
                        return {
                            title: "Lista de usuários",
                            headerRight: () => (
                                <Button 
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name='add' size={25} color="white"></Icon>}
                                />

                            )
                        }
                    }} 
                />
                <Stack.Screen  name="UserForm" component={UserForm} options={{ title: 'Formulário de Cadastro' }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}


const op = {
    headerStyle: {
        backgroundColor: '#29988f',
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: 'bold'
    },


}
