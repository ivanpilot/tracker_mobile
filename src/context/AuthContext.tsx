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
        case 'clear_error_message': {
            return {
                ...state,
                errorMessage: '',
            };
        }
        case 'signin':
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
const clearErrorMessage = (dispatch: any) => () => {
    dispatch({ type: 'clear_error_message' });
};

const automaticSignin = (dispatch: any) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

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

const signin = (dispatch: any) => async ({ email, password }: any) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ payload: response.data.token, type: 'signin' });
        navigate('TrackList');
    } catch (err) {
        dispatch({
            payload: 'Something went wrong with sign in',
            type: 'add_error',
        });
    }
};

const signout = (dispatch: any) => {
    return () => {};
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { clearErrorMessage, signin, signout, signup, automaticSignin },
    { token: null, errorMessage: '' },
);
