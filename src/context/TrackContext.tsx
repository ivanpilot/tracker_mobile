/**
 * This context is all about saving + retrieving existing tracks from our API
 */

import trackerApi from '../api/tracker';
import createDataContext from './createDataContext';

const trackReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'fetch_tracks': {
            return action.payload;
        }
        default:
            return state;
    }
};

const fetchTracks = (dispatch: any) => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
};
const createTrack = (dispatch: any) => async (name: any, locations: any) => {
    await trackerApi.post('/tracks', { locations, name });
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, fetchTracks },
    [],
);
