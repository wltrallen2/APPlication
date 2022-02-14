import { StyleSheet, View, TouchableHighlight } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import AppText from './AppText'

export default function ContactListItem({ materialIconName, text, textStyle, handlePress }) {
  return (
      <View style={styles.container}>
        <TouchableHighlight
            onPress={handlePress}
            underlayColor={colors.purple}
            activeOpacity={0.85}
            style={styles.iconContainer}
        >
            <View style={styles.iconContainer}>
                <MaterialIcons name={materialIconName} size={36} style={styles.icon} />
            </View>
        </TouchableHighlight>
        <View style={{ width: 8 }} />
        <TouchableHighlight 
            onPress={handlePress}
            underlayColor={colors.purple}
            activeOpacity={0.85}
            style={styles.textTouchable}
        >
            <View style={styles.textContainer}>
                <AppText style={[styles.text, textStyle]}>{text}</AppText>
            </View>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        flexDirection: 'row',
    },
    icon: {
        padding: 10,
    },
    iconContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
    },
    textContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        flexGrow: 1,
        justifyContent: 'center',
    },
    textTouchable: {
        borderRadius: 10,
        flexGrow: 1,
    }
})