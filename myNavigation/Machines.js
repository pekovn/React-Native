import * as React from 'react';
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

const BASE_URL = "https://dev.api.vending.averato.com/map_machines";
export default function App() {
  const [addresses, setAddresses] = useState([])
  fetch(BASE_URL)
    .then(response => response.json())
    .then((data) => {
      data.payload.map(el => addresses.push(el))
      return addresses
    })
    .then(x => x);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => { }, [isLoaded, addresses]);
  const obj = { latitude: 43.20424169194289, longitude: 27.91017268311008, latitudeDelta: 0.01, longitudeDelta: 0.01, }
  return (
    <View style={ styles.container }>
      { isLoaded ? (
        <View style={ styles.mapBtn }>
          <Button title="click to open map" onPress={ () => setIsLoaded(false) } />
        </View>
      ) : (
        <View >
          <MapView style={ styles.map }
            showsUserLocation={ true }
            initialRegion={ obj }
          >
            { addresses.map((address, index) => {
              return (
                <Marker
                  coordinate={ { latitude: +address.latitude, longitude: +address.longitude } }
                  title={ `${address.name}` }
                  description={ address.address }
                  key={ index }
                  style={ { borderRadius: 50 } }
                >
                </Marker>
              )
            }) }
          </MapView>
          <View style={ styles.mapBtn }>
            <Button title="Hide map" onPress={ () => setIsLoaded(true) } />
          </View>
        </View>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapBtn: {
    // marginTop: "100%"
  },
  mapStyle: {
    width: 100,
    height: 100,
  }
});