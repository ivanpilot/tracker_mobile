import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';

const TrackForm = () => {
    const {
        changeName,
        startRecording,
        state: { name, recording, locations },
        stopRecording,
    } = useContext(LocationContext);

    console.log(locations.length);
    return (
        <>
            <Spacer>
                <Input
                    onChangeText={changeName}
                    placeholder="Enter name"
                    value={name}
                />
            </Spacer>
            {recording ? (
                <Button title="Stop" onPress={stopRecording} />
            ) : (
                <Button title="Start Recording" onPress={startRecording} />
            )}
        </>
    );
};

export default TrackForm;
