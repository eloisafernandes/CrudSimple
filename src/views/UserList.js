import React from 'react'
import {FlatList, Text, View, Alert} from 'react-native'
import users from "../data/users"
import { ListItem, Avatar, Button } from 'react-native-elements'
import {Icon} from 'react-native-elements/dist/icons/Icon'

export default props => {

    function confirmUserDeletion (item) {
        Alert.alert("Excluir usuário", "Deseja excluir usuário?", [
            {
                text: 'Sim',
                onPress() {
                    console.warn("Deleted")
                }
            },
            {
                text: 'Não'
            },
        ])
    }

    function getUserItem({item}){
        return (
            <ListItem bottomDivider onPress = {() => {props.navigation.navigate("UserForm")}}>
                <Avatar rounded source={{uri: item.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', item);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => {confirmUserDeletion(item)
                    }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
                <ListItem.Chevron />
            </ListItem>
        )
        


    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}