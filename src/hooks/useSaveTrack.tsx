import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../navigationRef';

/**
 * What is interesting in this file is that we use and combine several contexts together
 */

/**
 * we export a function that returns another function
 */
export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        reset,
        state: { locations, name },
    } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList');
    };

    return [saveTrack];
};
