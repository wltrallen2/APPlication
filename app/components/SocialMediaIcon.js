import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SocialMediaIcon({ icon, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={icon} resizeMode='contain' style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50
    }
})