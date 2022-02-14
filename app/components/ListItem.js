import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from '../components/AppText'; 
import colors from '../config/colors'

export default function ListItem({ image, title, subtitle, children}) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode='contain' style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    image: {
      width: 75,
      height: 75
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: 10
    },
    subtitle: {
      lineHeight: 16,
      marginTop: 2,
      marginBottom: 6
    },
    title: {
      fontWeight: '700',
      fontSize: 18,
    }
})