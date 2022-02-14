import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import EducationCard from '../components/EducationCard'
import Spacer from '../components/Spacer'

import EducationData from '../data/EducationData'

export default function EducationScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={EducationData}
        renderItem={({item}) => <EducationCard {...item} />}
        keyExtractor={degree => degree.date}
        ItemSeparatorComponent={() => <Spacer height={12} />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10
  },
})