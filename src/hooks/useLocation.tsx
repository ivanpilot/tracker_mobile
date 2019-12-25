import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';

export default (shouldTrack: boolean, callback: any) => {
    const initSub: any = null;
    const [err, setError] = useState(null);

    /**
     * The reason we create a state variable of subscriber is simply because we need to access it from useEffect while the sub variable is available only inside the startWatching function
     */
    const [subscriber, setSubscriber] = useState(initSub);

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
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    distanceInterval: 10,
                    timeInterval: 1000,
                },
                callback,
            );
            setSubscriber(sub);
        } catch (e) {
            setError(e);
        }
    };

    /**
     * useEffect is called each time our hook is called and useEffect is called each time the TrackCreateScreen gets re-rendered.
     * Every time this hook is executed, react will compared the new value of shouldTrack with its previous value and if the value is different then it will run the callback inside useEffect
     */
    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            /**
             * Once remove, we don't need a subscriber anymore so we rest it to null
             */
            setSubscriber(null);
        }
    }, [shouldTrack]);

    /**
     * By convention, hooks return value through an array.
     */
    return [err];
};
