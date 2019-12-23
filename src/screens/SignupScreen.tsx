import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }: any) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign up"
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
};

/*
 * To hide the header on our screen, we just need to add a few options to our
 * navigation component.
 * Defining a function in a screen navigation options will customize the Stack
 * Navigator and change the way react navigation behave
 */

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    };
};
/**
 * We do not have to always assign a function to navigationOptions object
 * Assigning a function really makes sense when we want to access the props that
 * are passed to the navigate function.
 * So in this very case, since we do not need to access the props we could have simply done the below
 */
// SignupScreen.navigationOptions = {
//     header: null,
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    },
});

export default SignupScreen;
