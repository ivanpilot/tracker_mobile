import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SigninScreen = ({ navigation }: any) => {
    const toSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View>
            <Text style={{ fontSize: 48 }}>SigninScreen</Text>
            <Button title="Go to Signup" onPress={toSignup} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SigninScreen;
