import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        alert("Here's your value \n" + result);
    } else {
        alert('No values stored under that key.');
    }
}

export default Home = ({ navigation }) => {
    const [key, onChangeKey] = React.useState('Your key here');
    const [value, onChangeValue] = React.useState('Your value here');

    return (
        <View style={ styles.container }>
            <Text style={ styles.paragraph }>Save an item, and grab it later!</Text>
            <TextInput placeholder="your name" style={ { paddingVertical: 10 } } />
            <Button
                title="Save this key/value pair"
                onPress={ () => {
                    save(key, value);
                    onChangeKey('Your key here');
                    onChangeValue('Your value here');
                } }
            />

            <Text style={ styles.paragraph }>Enter your key </Text>
            <TextInput
                style={ styles.textInput }
                onSubmitEditing={ event => {
                    getValueFor(event.nativeEvent.text);
                } }
                placeholder="Enter the key for the value you want to get"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        paddingVertical: 20,
    },
    paragraph: {
        backgroundColor: "green",
        paddingVertical: 20,
    },
    textInput: {
        backgroundColor: "yellow",
        paddingVertical: 20,
    }
});