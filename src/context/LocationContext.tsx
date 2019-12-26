import createDataContext from './createDataContext';

const locationReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'add_current_location': {
            return {
                ...state,
                currentLocation: action.payload,
            };
        }
        case 'add_location': {
            return {
                ...state,
                locations: [...state.locations, action.payload],
            };
        }
        case 'start_recording': {
            return {
                ...state,
                recording: true,
            };
        }
        case 'stop_recording': {
            return {
                ...state,
                recording: false,
            };
        }
        case 'change_name': {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
};

const changeName = (dispatch: any) => (name: string) => {
    dispatch({ type: 'change_name', payload: name });
};

const startRecording = (dispatch: any) => () => {
    dispatch({ type: 'start_recording' });
};

const stopRecording = (dispatch: any) => () => {
    dispatch({ type: 'stop_recording' });
};

const addLocation = (dispatch: any) => (location: any, recording: boolean) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (recording) {
        dispatch({ type: 'add_location', payload: location });
    }
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        addLocation,
        changeName,
        startRecording,
        stopRecording,
    },
    { name: '', recording: false, locations: [], currentLocation: null },
);
