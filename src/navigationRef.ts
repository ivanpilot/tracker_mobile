/**
 * The reason we created this file is because is our AuthContext within signup and signin the flow of the operation requires us once the loggin process is successful to make our user navigate to the appropriate screen.
 * However, react navigation is not accessible from outside a react component and is really triggered inside the App.tsx file at the <App/> line which create the navigate object.
 * So this file is to allow us to create a hook so that any file from anywhere in our project can access the navigate object
 */

import { NavigationActions } from 'react-navigation';

let myNavigator: any;

export const setNavigator = (nav: any) => {
    myNavigator = nav;
};

export const navigate = (routeName: any, params?: any) => {
    myNavigator.dispatch(
        NavigationActions.navigate({
            params,
            routeName,
        }),
    );
};
