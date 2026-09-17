import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonPropd = {
    title: string;
    onPress: () => void;
}

export default function CustomButton({ title, onPress }: CustomButtonPropd) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#c67c4e',
        width: '100%',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    messageText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#c67c4e',
        alignItems: 'center',
        margin: 'auto',
        marginTop: 20

    },
})