import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }: any) => {
    const { state, signup } = useContext(AuthContext);

    const toSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign up"
                onSubmit={signup}
            />
            <TouchableOpacity onPress={toSignin}>
                <Spacer>
                    <Text style={styles.link}>
                        Already have an account? Sign in instead
                    </Text>
                </Spacer>
            </TouchableOpacity>
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
    link: {
        color: 'blue',
    },
});

export default SignupScreen;
