import React, { useState, useEffect } from "react";
import { TextInput, Button, View, Text, Modal, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import { globalStyles } from "../styles/global";
import StackNavigator from "../src/StackNav";

export default function PaymentForm({ navigation }) {

  return (
    <StackNavigator />
  );
}
const styles = StyleSheet.create({
  title: {
    borderWidth: 1,
    borderColor: "green",
    padding: 10,

  },
  viewWrapper: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",

  },
  textWrapper: {
    alignItems: "center",
    top: "50%"
  },
  text: {
    color: "#fff"
  }
})




// <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
    //     <Formik
    //         initialValues={ { title: '', body: "", rating: "" } }
    //         onSubmit={ (values) => {
    //             console.log(values);

    //         } }
    //     >
    //         { (props) => {
    //             return (
    //                 (
    //                     <View style={ globalStyles.container }>
    //                         <TextInput
    //                             style={ globalStyles.input }
    //                             placeholder='Review title'
    //                             onChangeText={ props.handleChange('title') }
    //                             value={ props.values.title }
    //                         />
    //                         <TextInput
    //                             style={ globalStyles.input }
    //                             placeholder='Review body'
    //                             onChangeText={ props.handleChange('body') }
    //                             value={ props.values.body }
    //                         />
    //                         <TextInput
    //                             style={ globalStyles.input }
    //                             placeholder='Review body'
    //                             onChangeText={ props.handleChange('rating') }
    //                             value={ props.values.rating }
    //                         />
    //                         <Button
    //                             title="submit"
    //                             color="marron"
    //                             onPress={ props.handleSubmit }
    //                         />
    //                     </View>
    //                 )
    //             )
    //         } }
    //     </Formik>
    // </View>