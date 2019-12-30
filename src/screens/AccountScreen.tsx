import { FontAwesome } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={20} />,
    title: 'Account',
};

const styles = StyleSheet.create({});

export default AccountScreen;
