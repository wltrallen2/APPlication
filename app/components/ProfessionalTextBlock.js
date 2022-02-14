import { StyleSheet, View } from 'react-native'
import React from 'react'

import AppText from './AppText'

export default function ProfessionalTextBlock({ role, company, location, dates }) {
  return (
    <View>
        <AppText style={styles.textRole}>{role}</AppText>
        <AppText style={styles.textCompany}>{company}</AppText>
        <AppText style={styles.textLocation}>{location}</AppText>
        <AppText style={styles.textDates}>{dates}</AppText>
    </View>
)
}

const reduceMargin = { marginBottom: -3 }

const styles = StyleSheet.create({
    textCompany: {
        ...reduceMargin,
        lineHeight: 16,
        marginTop: 6
    },
    textDates: {
        fontStyle: 'italic'
    },
    textRole: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 20,
        ...reduceMargin
    }
})