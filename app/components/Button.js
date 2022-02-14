import { View, StyleSheet, TouchableOpacity } from "react-native"

import AppText from "./AppText"
import colors from "../config/colors"


export default function Button({ label, color, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, color && { backgroundColor: color }]}>
                <AppText style={styles.label}>{label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        backgroundColor: colors.purple,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: colors.white,
        fontWeight: '600',
        textTransform: 'uppercase',
    }
})