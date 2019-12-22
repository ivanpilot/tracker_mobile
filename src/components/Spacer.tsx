import React from 'react';
import { StyleSheet, View } from 'react-native';

/*
 * This component is only for styling other native component
 * It prevents from doing the styling element / component by component but to have a
 * more homogenous styling for every element
 * This component is assumed to be used as a wrapper of a native element so
 * it will receive children
 */
const Spacer = ({ children }: any) => {
    return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15,
    },
});
export default Spacer;
