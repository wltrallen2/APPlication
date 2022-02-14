import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function Separator({ style }) {
  return (
    <View style={[styles.separator, style]}></View>
  )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light,
        marginVertical: 4
    }
})