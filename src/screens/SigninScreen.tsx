import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({ navigation }: any) => {
    const toSignup = () => {
        navigation.navigate('Signup');
    };
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
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
