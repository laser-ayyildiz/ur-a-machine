import {Button, Text, TextInput, TextInputComponent, View} from "react-native";
import {useState} from "react";
import input from "../../styles/input-styles";

const DailyBudget = ({max = 200}) => {
    const [balance, setBalance] = useState(max);
    const [newExpense, setNewExpense] = useState(0);

    const onNewExpense = () => {
        console.log(newExpense)
        setBalance(balance - newExpense);
        setNewExpense(0);
    };

    return (
        <View padding-s4 bg-white style={{height: 60}}>
            <Text>Daily Balance: {balance}</Text>
            <Text>Add New Expense</Text>
            <TextInput
                style={input.default}
                onChangeText={setNewExpense}
                value={newExpense}
                keyboardType="numeric"
            />
            <Button title="Expense" onPress={onNewExpense} disabled={newExpense == 0}/>
        </View>
    )
};

export default DailyBudget;
