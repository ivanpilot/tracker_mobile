import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = ({ navigation }: any) => {
    const toTrackDetail = () => {
        navigation.navigate('TrackDetail');
    };
    return (
        <View>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={toTrackDetail} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
