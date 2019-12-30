import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }: any) => {
    const { fetchTracks, state } = useContext(TrackContext);

    const toTrackDetail = (trackId: any) => () => {
        /**
         * To pass along some info to navigation.navigate, we can add an object.
         * Here we want to pass the id of the track so we add {_id: item._id}
         */
        navigation.navigate('TrackDetail', { _id: trackId });
    };

    /**
     * This must be a function that renders a unique key
     */
    const renderKey = (item: any) => item._id;

    /**
     * This is a function that renders the actual thing we want to render.
     * This function gets called with one argument that include an item object that contains the actual data > this is why we destructure {item}
     */
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={toTrackDetail(item._id)}>
                <ListItem chevron={true} title={item.name} />
            </TouchableOpacity>
        );
    };

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={renderKey}
                renderItem={renderItem}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks',
};

const styles = StyleSheet.create({});

export default TrackListScreen;
