import React, { useState } from 'react';
import { Button, Text, StyleSheet, View} from 'react-native';

const Hydrate = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
        console.log("drink water");
    };

    const decreaseCount = () => {
        setCount(count - 1);
        console.log("undrink(:D) water");
    };

    const reset = () => {
        setCount(0);
        console.log("reset");
    }

    return (
        <View style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
            <Text>Let's hydrate us</Text>
            <Text>{count}</Text>
            <Button
                onPress={() => increaseCount()}
                title={"Drink"}
            />
            <Button
                color="red"
                onPress={() => decreaseCount()}
                title="Oops! I clicked twice :("
                disabled={count === 0}
            />
            <Button
                color="gray"
                onPress={() => reset()}
                title="Reset"
                disabled={count === 0}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });
export default Hydrate;
