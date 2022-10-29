import {StyleSheet, Text, TextInput, View} from 'react-native'
import {useState} from "react";

const Budget = () => {
    const [maxSpendPerDay, setMaxSpendPerDay] = useState("");

    const maxSpendPerDayOnChange = (spend) => {
       if (!isSpendValid(spend)) {
           return;
       }
        setMaxSpendPerDay(spend);
    };

    const isSpendValid = (spend): boolean => {
        if (isNaN(spend)) {
            return false;
        }
        if (spend > 10000 || spend < 0) {
            return false;
        }
        return true;
    }

    return (
        <View>
            <Text>Type your max</Text>
            <TextInput
                style={styles.input}
                onChangeText={maxSpendPerDayOnChange}
                value={maxSpendPerDay}
                placeholder="Max 10000"
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Budget
