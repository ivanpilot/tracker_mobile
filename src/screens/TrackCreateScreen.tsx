import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
// import '../_mockLocation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    // const [err] = useLocation((location: any) => addLocation(location));
    const [err] = useLocation(addLocation);
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
