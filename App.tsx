import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Hydrate from './hydrate/Hydrate';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hey dude don't feel as humiliated but u r a machine like everybody.</Text>
            <StatusBar style="auto"/>
            <Hydrate/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acf',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
