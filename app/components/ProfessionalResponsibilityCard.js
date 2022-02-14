import { StyleSheet, View } from 'react-native'
import Markdown from '@flowchase/react-native-markdown-display'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function ProfessionalResponsibilityCard({ description }) {
  return (
    <View style={styles.container}>
      <Markdown style={textStyle}>{description}</Markdown>
    </View>
  )
}

const textStyle = {
    body: {
        fontSize: 16
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        shadowColor: colors.medium,
        shadowOpacity: 0.5,
        shadowOffset: { height: 3, width: 3}
    },
    text: {
        fontSize: 16,
    }
})