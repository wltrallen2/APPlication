import { StyleSheet, Image, View, FlatList, Linking } from 'react-native'
import React from 'react'
import { showLocation } from 'react-native-map-link'

import Screen from '../components/Screen'
import colors from '../config/colors'
import SocialMediaIcon from '../components/SocialMediaIcon'
import ContactListItem from '../components/ContactListItem'
import Spacer from '../components/Spacer'

export default function ProfileScreen() {
  const avatarImage = require('../assets/avatar.jpg')
  const nameImage = require('../assets/name.png')
  const logoImage = require('../assets/thankyou.png')

  const detailsData = [
    {
      materialIconName: 'location-pin',
      text: '2752 Lancaster Ct.\nApopka, FL 32703',
      handlePress: () => showLocation({ 
        latitude: 28.677370, 
        longitude: -81.457832, 
        title: '2752 Lancaster Ct., Apopka, FL 32703'
      })
    },
    {
      materialIconName: 'phone-iphone',
      text: '(619) 204-7586',
      handlePress: () => Linking.openURL('tel:+16192047586')
    },
    {
      materialIconName: 'email',
      text: 'walterallen2@me.com',
      handlePress: () => Linking.openURL('mailto:walterallen2@me.com?subject=You\'re Hired!')
    },
  ]

  const socialMediaData = [
    {
      key: 'linkedin',
      icon: require('../assets/linkedin.png'),
      handlePress: () => Linking.openURL('https://linkedin.com/in/walter-allen')
    },
    {
      key: 'github',
      icon: require('../assets/techIcons/github.png'),
      handlePress: () => Linking.openURL('https://github.com/wltrallen2')
    },
    {
      key: 'twitter',
      icon: require('../assets/twitter.png'),
      handlePress: () => Linking.openURL('https://twitter.com/wltrallen2')
    },
  ]

  return (
    <Screen style={styles.container}>
      <View style={styles.imageContainer}>
          <View style={styles.imageShadow}>
              <Image source={avatarImage} resizeMode='cover' style={styles.image} />
          </View>
      </View>
      <View style={styles.nameContainer}>
          <Image source={nameImage} resizeMode='contain' style={styles.name} />
      </View>
      <View style={styles.detailsContainer}>
        <FlatList
          data={detailsData}
          renderItem={({item}) => (<ContactListItem {...item} />)}
          keyExtractor={data => data.materialIconName}
          ItemSeparatorComponent={() => <Spacer height={8} />}
          scrollEnabled={false}
        />
      </View>
      <FlatList
        data={socialMediaData}
        renderItem={({item}) => <SocialMediaIcon {...item} />}
        keyExtractor={link => link.key}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        horizontal={true}
        scrollEnabled={false}
      />
      <View style={styles.thanksContainer}>
          <Image source={logoImage} resizeMode='contain' style={styles.logo} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  details: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20
  },
  detailsContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderColor: colors.purple,
      borderWidth: 8,
  },
  imageContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 25,
      width: '100%',
      minHeight: 100,
  },
  imageShadow: {
      width: 200,
      height: 200,
      borderRadius: 100,
      shadowColor: colors.black,
      shadowOffset: { height: 3, width: 3},
      shadowOpacity: 0.4,
      elevation: 10,
  },
  logo: {
      width: '100%',
      maxWidth: 300,
      height: '100%',
  },
  name: {
    width: 300,
    height: 65,
    marginBottom: -20
  },
  nameContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  thanksContainer: {
      flex: 2,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
  }
})