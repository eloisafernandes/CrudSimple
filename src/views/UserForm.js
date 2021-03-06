import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'




export default ({route, navigation}) => {
    const [user, setUser] = useState (route.params ? route.params : {})
    return (
        <>
            <View style={style.form}>
                <Text>Name </Text>
                <TextInput
                    style={style.input}
                    onChangeText= {name => setUser({...user, name})}
                    placeholder="Informe o nome"
                    value={user.name}
                />
                <Text>Email </Text>
                <TextInput
                    style={style.input}
                    onChangeText= {email => setUser({...user, email})}
                    placeholder="Informe o e-mail"
                    value={user.email}
                />
                <Text>URL do avatar </Text>
                <TextInput
                    style={style.input}
                    onChangeText= {avatarUrl => setUser({...user, avatarUrl})}
                    placeholder="Informe a URL do avatar"
                    value={user.avatarUrl}
                />
                <Button
                    title = "Salvar"
                    onPress= {() => navigation.goBack()}
                ></Button>
            </View>
        </>

    )
}

const style = StyleSheet.create( {
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
    },
    form: {
        padding: 12
    }
})