import React from "react";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    titleText: {
        fontFamily: "nunito-bold",
        color: "#333",
        fontSize: 19,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})