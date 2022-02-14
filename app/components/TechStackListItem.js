import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import ListItem from './ListItem'
import colors from '../config/colors'

export default function TechStackListItem({ title, category, description, professionalYears, hobbyYears, image }) {
  const getStars = (numStars, color, keyStart = 0) => {
    return [ ...Array(numStars) ]
      .map((_, i) => (
        <MaterialIcons name='star' size={25} color={color} key={keyStart + i} />
      ))
  }

  const stars = getStars(professionalYears, colors.gold)
    .concat(getStars(hobbyYears, colors.fadedGold, professionalYears + 1))
    .filter(icon => icon.key <= 10)

  return (
      <ListItem
        image={image}
        title={title}
        subtitle={description}
      >
        <View style={styles.starContainer}>
          {stars}
        </View>
      </ListItem>
  )
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginLeft: -5
  }
})