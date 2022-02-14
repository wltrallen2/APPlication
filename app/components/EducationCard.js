import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Card from './Card'
import AppText from '../components/AppText';
import Separator from '../components/Separator';

export default function EducationCard({ degree, college, date, image, logo, moreInfo = null}) {
    const textBlock = (
        <View style={styles.textContainer}>
            <AppText style={styles.degree}>{degree}</AppText>
            <Separator />
            <AppText style={styles.college}>{college}</AppText>
            <AppText style={styles.date}>{date}</AppText>
        </View>
    )
  return (
      <Card
        image={image}
        logo={logo}
        textBlock={textBlock}
      />
  )
}

const styles = StyleSheet.create({
    college: {
        lineHeight: 16
    },
    date: {
        fontStyle: 'italic'
    },
    degree: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 18
    },
})