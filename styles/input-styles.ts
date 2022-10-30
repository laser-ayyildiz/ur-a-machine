import {StyleSheet} from "react-native";

const input = StyleSheet.create({
    default: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }, textInputwithPickerInARow: {
        height: 40,
        margin: 12,
        marginEnd: 3,
        borderWidth: 1,
        padding: 10,
        width: "30%"
    }, pickerwithTextInputInARow: {
        height: 40,
        margin: 12,
        marginStart: 3,
        padding: 10,
        width: "60%",
        position: "absolute"
    }
});

export default input;
