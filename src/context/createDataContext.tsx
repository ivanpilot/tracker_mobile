import React, { useReducer } from 'react';

/**
 * THIS IS A MANUAL WAY TO RECREATE WHAT REDUX DOES !!!
 * TO MAKE IT EASIER WE CAN INSTEAD USE THE REDUX LIBRARY
 *
 *
 * The whole idea here is to recreate the <Provider /> that
 * comes with the redux library
 * Basically we create a wrapper component that gives access
 * to specific data and function to its children.
 * This wrapper component is called Provider and we combine
 * it with Context to empower is children
 * On this Provider component we enhanced him with state
 * but to make it better we enhance it with useReducer
 * actions is the list of actions to be dispatch
 *
 * Each time we want to create a resource provider we need to call this file
 */
export default (reducer: any, actions: any, initialState: any) => {
    const Context = React.createContext(initialState);

    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions: { [k: string]: any } = {};
        for (const key in actions) {
            if (actions.hasOwnProperty(key)) {
                boundActions[key] = actions[key](dispatch);
            }
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};
