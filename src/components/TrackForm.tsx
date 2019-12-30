import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from './Spacer';

const TrackForm = () => {
    const {
        changeName,
        startRecording,
        state: { name, recording, locations },
        stopRecording,
    } = useContext(LocationContext);

    /**
     * saveTrack is holding a callback since useSaveTrack() returns a function. onPress is referencing what saveTrack is holding and when the user clicks then the callback is executed
     */
    const [saveTrack] = useSaveTrack();

    // console.log(locations.length);
    return (
        <>
            <Spacer>
                <Input
                    onChangeText={changeName}
                    placeholder="Enter name"
                    value={name}
                />
            </Spacer>
            <Spacer>
                {recording ? (
                    <Button title="Stop" onPress={stopRecording} />
                ) : (
                    <Button title="Start Recording" onPress={startRecording} />
                )}
            </Spacer>
            <Spacer>
                {!recording && locations.length ? (
                    <Button title="Save Recording" onPress={saveTrack} />
                ) : null}
            </Spacer>
        </>
    );
};

export default TrackForm;
