import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
// import '../_mockLocation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setError] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();

            /**
             * each the user location changes, the callback is called
             */
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    distanceInterval: 10,
                    timeInterval: 1000,
                },
                location => {
                    addLocation(location);
                },
            );
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3={true}>Create a track</Text>
            <Map />
            {err ? <Text>'Please enable location services'}</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
