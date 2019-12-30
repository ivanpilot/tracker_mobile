import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }: any) => {
    const { state } = useContext(TrackContext);
    const id = navigation.getParam('_id');

    const track = state.find((t: any) => t._id === id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initialCoords,
                }}
            >
                <Polyline
                    coordinates={track.locations.map((loc: any) => loc.coords)}
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default TrackDetailScreen;
