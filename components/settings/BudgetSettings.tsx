import {useState} from "react";
import {Text, TextInput, View} from "react-native";
import input from "../../styles/input-styles";

const BudgetSettings = () => {
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
        <View padding-s4 bg-white style={{height: 60}}>
            <Text>Type your max</Text>
            <TextInput
                style={input.default}
                onChangeText={maxSpendPerDayOnChange}
                value={maxSpendPerDay}
                placeholder="Max 10000"
                keyboardType="numeric"
            />
        </View>
    )
}

export default BudgetSettings;
