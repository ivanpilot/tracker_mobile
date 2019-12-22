import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

/**
 * withNavigation is a way for a custome made nested componenet to access the navigation object from the Navigator
 * To use it, we just wrapped the component with withNavigation and our component will have access to the navigation object
 */

const NavLink = ({ navigation, routeName, text }: any) => {
    const toSignin = () => {
        navigation.navigate(routeName);
    };

    return (
        <TouchableOpacity onPress={toSignin}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    },
});

export default withNavigation(NavLink);
