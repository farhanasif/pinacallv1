import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';


export default function MapScreen () {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);

  const _fetchData = async(position) => {
    try {
        let response = await fetch(
            'https://api.joindoer.com/testing/offermama.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    action: 'getNearByRange'
                }),
            }
        );

        let responseJson = await response.json();
        console.log(responseJson);
        //setNearbyofferslist(responseJson);
        
    } 
    catch (error) {
        alert('An error occured during api data fetch: '+error);
    }
}


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

        let location = await Location.getCurrentPositionAsync({});
        //console.log(location);
        setLocation(location);
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      console.log(location)
    }

    const _onPress = (e) => {
      console.log(e.nativeEvent.coordinate);
      let region = {
          latitude:       e.nativeEvent.coordinate.latitude,
          longitude:      e.nativeEvent.coordinate.longitude,
          latitudeDelta:  0.00922*1.5,
          longitudeDelta: 0.00421*1.5
      }

      setRegion(region);;p-00

    }

    return (
      <View style={styles.container}>
        { location ? (
          <MapView 
              style={styles.mapStyle}
              region={region}
              followUserLocation={true}
              onPress={(e) => _onPress(e)}
          >
              <MapView.Marker
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
                title="My Location"
              />
          </MapView>
        ): <View></View>}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={styles.button}>
            <Text style={styles.buttonItem}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={styles.button}>
            <Text style={styles.buttonItem}>Video Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  button: {
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,235,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },

  buttonItem: {
    textAlign: 'center',
  },
});
