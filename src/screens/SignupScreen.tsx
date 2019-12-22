import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }: any) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toSignin = () => {
        navigation.navigate('Signin');
    };
    // const toMainFlow = () => {
    //     navigation.navigate('mainFlow');
    // };
    const onSignup = () => {
        signup({ email, password });
    };

    const onChangeEmail = (e: string) => {
        setEmail(e);
    };

    const onChangePassword = (e: string) => {
        setPassword(e);
    };

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3={true}>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={onChangeEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry={true}
                label="Password"
                value={password}
                onChangeText={onChangePassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? (
                <Text style={styles.errorMessage}> {state.errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button title="Sign Up" onPress={onSignup} />
            </Spacer>
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
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15,
    },
    link: {
        color: 'blue',
    },
});

export default SignupScreen;
