import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';

export default (callback: any) => {
    const [err, setError] = useState(null);

    useEffect(() => {
        startWatching();
    }, []);

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
                callback,
            );
        } catch (e) {
            setError(e);
        }
    };

    /**
     * By convention, hooks return value through an array.
     */
    return [err];
};
