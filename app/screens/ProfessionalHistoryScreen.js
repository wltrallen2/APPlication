import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import ProfessionalCard from '../components/ProfessionalCard'

import ProfessionalHistoryData from '../data/ProfessionalHistoryData'
import Spacer from '../components/Spacer'

export default function ProfessionalHistoryScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={ProfessionalHistoryData}
        renderItem={({item}) => <ProfessionalCard {...item} navigation={navigation} />}
        keyExtractor={role => role.company}
        ItemSeparatorComponent={() => <Spacer height={12} />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10,
  }
})