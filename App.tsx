import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/components/AccountScreen';
import SigninScreen from './src/components/SigninScreen';
import SignupScreen from './src/components/SignupScreen';
import TrackCreateScreen from './src/components/TrackCreateScreen';
import TrackDetailScreen from './src/components/TrackDetailScreen';
import TrackListScreen from './src/components/TrackListScreen';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
        Account: AccountScreen,
        TrackCreate: TrackCreateScreen,
        trackListFlow: createStackNavigator({
            TrackDetail: TrackDetailScreen,
            TrackList: TrackListScreen,
        }),
    }),
});

export default createAppContainer(switchNavigator);
