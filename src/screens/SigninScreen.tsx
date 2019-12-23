import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }: any) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    /**
     * In react native each time we move to a new screen, the previous screen in fact doesn't disappear and the new screen doesn't get called
     * Every screen is present when the app is launched. We just can't see them because they are pushed to the edge
     * so in order to detect when a user is leaving from a current screen and focusing on a new screen we need to add some event listener or we can use NavigationEvents which is a built in compoent that doesn't display anything but run some callback depending if you arrive / leave to/from a screen
     */
    return (
        <View style={styles.container}>
            <NavigationEvents
                // onWillFocus={}
                // onDidFocus={}
                onWillBlur={clearErrorMessage}
                // onDidBlur={}
            />
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                buttonText="Sign In"
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Signup instead"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SigninScreen;
