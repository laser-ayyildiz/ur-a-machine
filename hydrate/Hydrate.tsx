import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

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

    return (
        <View>
            <Text>Let's hydrate us</Text>
            <Text>{count}</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => increaseCount()}
                title={"Drink"}
            />
            <Button
                color="red"
                onPress={() => decreaseCount()}
                title="Opps! I clicked twice :("
                disabled={count === 0}
            />
        </View>
    );
};

export default Hydrate;
