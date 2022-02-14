import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function Spacer({ height = 8 }) {
  return (
    <View style={[styles.spacer, { height: height }]}></View>
  )
}

const styles = StyleSheet.create({
    spacer: {
        width: '100%',
    }
})