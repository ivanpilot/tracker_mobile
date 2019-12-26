import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
// import '../_mockLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

/**
 * withNavigationFocus is a HOC that provides additional props to elements it wraps.
 * Once TrackCreateScreen is wrapped by withNavigationFocus, we can access isFocused props that will help up determinate when a user is not focusing on a screen and as such, in this example, stop the geotracking that eats battery
 */
const TrackCreateScreen = ({ isFocused }: any) => {
    const { addLocation, state } = useContext(LocationContext);
    const callback = useCallback(
        (location: any) => {
            addLocation(location, state.recording);
        },
        [state.recording],
    );

    const [err] = useLocation(isFocused, callback);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3={true}>Create a track</Text>
            <Map />
            {err ? <Text>'Please enable location services'}</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
