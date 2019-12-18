import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [outputText, setText] = useState(
        'Open up App.js to start working on your app',
    );
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button
                title="Change Text"
                onPress={() => setText('The text has change!!')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});
