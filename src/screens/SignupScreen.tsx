import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignupScreen = ({ navigation }: any) => {
    const toSignin = () => {
        navigation.navigate('Signin');
    };
    const toMainFlow = () => {
        navigation.navigate('mainFlow');
    };

    return (
        <View>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button title="Go to Signin" onPress={toSignin} />
            <Button title="Go to MainFlow" onPress={toMainFlow} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;
