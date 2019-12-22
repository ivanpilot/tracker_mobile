import { AsyncStorage } from 'react-native';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
import createDataContext from './createDataContext';

const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'add_error': {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        case 'signup': {
            return {
                errorMessage: '',
                token: action.payload,
            };
        }
        default:
            return state;
    }
};

/**
 * actions are functions that we call with dispatch and these functions return a function
 */
const signup = (dispatch: any) => async ({ email, password }: any) => {
    try {
        const response = await trackerApi.post('/signup', {
            email,
            password,
        });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ payload: response.data.token, type: 'signup' });
        navigate('TrackList');
    } catch (err) {
        dispatch({
            payload: 'Something went wrong with sign up',
            type: 'add_error',
        });
    }
};

const signin = (dispatch: any) => {
    return ({ email, password }: any) => {};
};

const signout = (dispatch: any) => {
    return () => {};
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' },
);