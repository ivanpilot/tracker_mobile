import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const {
        state: { currentLocation, locations },
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={25}
                strokeColor="red"
                fillColor="cyan"
            />
            <Polyline coordinates={locations.map((loc: any) => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
