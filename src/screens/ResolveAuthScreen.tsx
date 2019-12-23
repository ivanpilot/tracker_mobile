import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

/**
 * When the user open the app, he might still have a valid authentication token. In that case, we want to sign him in automatically. To achieve that, at first load, we need to check is the device holds a valid token. Checking this takes half a second. If we check this from the signup screen for instance, the user will see the signup screen for half a second during the check process and then will be redirected to another screen. this might be desorientating so to prevent this we want to show an empty screen during this check process of a token
 */
const ResolveAuthScreen = () => {
    const { automaticSignin } = useContext(AuthContext);

    /**
     * the [] as the second params in useEffect is a convention to indicate we want to call useEffect only once when the component SignupScreen is loaded`
     */
    useEffect(() => {
        automaticSignin();
    }, []);
    /**
     * return null will show nothing
     */
    return null;
};

export default ResolveAuthScreen;
