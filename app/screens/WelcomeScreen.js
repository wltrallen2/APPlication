import { StackActions } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Button from '../components/Button';
import Screen from '../components/Screen';

import colors from '../config/colors';

function WelcomeScreen({ navigation }) {    
    const avatarImage = require('../assets/avatar.jpg')
    const logoImage = require('../assets/appLogo.png')

    const handleWelcomeButton = () => {
        navigation.dispatch(
            StackActions.replace('TabbedResume')
        )
    }

    return (
      <Screen style={styles.container}>
        <View style={styles.imageContainer}>
            <View style={styles.imageShadow}>
                <Image source={avatarImage} resizeMode='cover' style={styles.image} />
            </View>
        </View>
        <View style={styles.titleContainer}>
            <Image source={logoImage} resizeMode='contain' style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
            <Button label='Check Me Out' onPress={handleWelcomeButton}/>
        </View>
      </Screen>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 12,
        width: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        height: 200,
    },
    titleContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default WelcomeScreen;