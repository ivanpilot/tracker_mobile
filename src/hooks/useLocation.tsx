import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';

export default (shouldTrack: boolean, callback: any) => {
    const [err, setError] = useState(null);

    /**
     * useEffect is called each time our hook is called and useEffect is called each time the TrackCreateScreen gets re-rendered.
     * Every time this hook is executed, react will compared the new value of shouldTrack with its previous value and if the value is different then it will run the callback inside useEffect
     */

    /**
     * watch again lecture 242 and 243 to remember why we decided to use this construct, i.e. all inside the useEffect hook
     */
    useEffect(() => {
        let subscriber: any;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                /**
                 * once watchPositionAsync is called, the tracking features is activated and stays on. we specifically needs to manually removes it to stop tracking.
                 * We could have avoid to saved await watchPositionAsync in a variable but in that case we would not be able to remove the watchPosition to deactivate the geo location tracking
                 */

                /**
                 * each time the user location changes, the callback is called
                 */
                subscriber = await watchPositionAsync(
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

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            /**
             * Once remove, we don't need a subscriber anymore so we rest it to null
             */
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    /**
     * By convention, hooks return value through an array.
     */
    return [err];
};
