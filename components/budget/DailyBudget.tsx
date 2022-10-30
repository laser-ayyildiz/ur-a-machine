import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {getExpenseTypes} from "../../constant/expense-types";
import {Picker} from "react-native-ui-lib";
import inputStyles from "../../styles/input-styles";

const DailyBudget = ({max = 200}) => {
    const [balance, setBalance] = useState(max);
    const [newExpense, setNewExpense] = useState(0);
    const [expenseType, setExpenseType] = useState(null);

    const onNewExpense = () => {
        if (expenseType === null) {
            return;
        }
        setBalance(balance - newExpense);
        setNewExpense(0);
        setExpenseType(null)
    };

    const onSelectType = (type) => {
        setExpenseType(type);
    };

    return (
        <View>
            <Text>Daily Balance: {balance}</Text>
            <Text>Add New Expense</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={inputStyles.textInputwithPickerInARow}
                    onChangeText={setNewExpense}
                    value={newExpense}
                    keyboardType="numeric"
                    maxLength={7}
                />
                <Picker
                    style={inputStyles.pickerwithTextInputInARow}
                    value={expenseType}
                    onChange={onSelectType}
                    useWheelPicker
                    placeholder={'Select an expense type'}
                    migrateTextField
                    enableModalBlur
                >
                    {getExpenseTypes().map((exType, index) => (
                        <Picker.Item key={index} value={exType} label={exType} disabled={false}/>
                    ))}
                </Picker>
            </View>
            <Button title="Expense" onPress={onNewExpense} disabled={newExpense == 0 || expenseType === null}/>
        </View>
    )
};

export default DailyBudget;
