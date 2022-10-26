import React from "react";
import { StyleSheet } from "react-native";
import Text from "react-native-ui-lib/src/components/text";
import View from "react-native-ui-lib/src/components/view";

const Home = () => {
    return (
        <View style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
            <Text>Hey dude don't feel as humiliated but u r a machine like everybody.</Text>
        </View>
    );

};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Home;