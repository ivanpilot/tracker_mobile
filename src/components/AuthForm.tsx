import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e: string) => {
        setEmail(e);
    };

    const onChangePassword = (e: string) => {
        setPassword(e);
    };

    const onSubmitForm = () => {
        onSubmit({ email, password });
    };

    return (
        <>
            <Spacer>
                <Text h3={true}>{headerText}</Text>
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
            {errorMessage ? (
                <Text style={styles.errorMessage}> {errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button title={buttonText} onPress={onSubmitForm} />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15,
    },
});

export default AuthForm;
