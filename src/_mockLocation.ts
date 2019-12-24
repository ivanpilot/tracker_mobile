/**
 * this file is purely for testing purpose so we won't export it into production
 * Here we are trying to simulate a user moving by creating automatically various location points to trick the expo location library which is quite buggy with ios and android simulator
 */
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment: number) => {
    return {
        coords: {
            accuracy: 5,
            altitude: 5,
            altitudeAccuracy: 5,
            heading: 0,
            latitude: 37.33233141 + increment * tenMetersWithDegrees,
            longitude: -122.0312186 + increment * tenMetersWithDegrees,
            speed: 0,
        },
        timestamp: 10000000,
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        location: getLocation(counter),
        watchId: Location._getCurrentWatchId(),
    });
    counter++;
}, 1000);
