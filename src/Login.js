import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default Login = ({ navigation }) => {

    return (
        <View style={ styles.container }>
            <TouchableOpacity
                style={ styles.wrapperButton }
                onPress={ () => navigation.navigate("Add Card") }
            >
                <Text style={ styles.text }>
                    ADD CARD
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#2c3e50",

    },
    wrapperButton: {
        backgroundColor: "#1097E9",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        paddingVertical: 10,
        textAlign: "center"
    },

})