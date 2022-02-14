import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function Card({ image, logo, textBlock, handleShowMore}) {
    const CardView = ({ image, logo, textBlock }) => (
        <View style={styles.card}>
            <Image source={image} resizeMode='cover' style={styles.image} />
            <View style={styles.detailsContainer}>
                <Image source={logo} resizeMode='contain' style={styles.logo} />
                <View style={styles.textContainer}>{textBlock}</View>
                {handleShowMore && <MaterialIcons name='read-more' size={36} style={styles.moreIcon} />}
            </View>
        </View>
    )

    const card = handleShowMore
        ? <TouchableOpacity
            onPress={handleShowMore}
        >
            <CardView
                image={image}
                logo={logo}
                textBlock={textBlock}
            />
        </TouchableOpacity>
        : <CardView
            image={image}
            logo={logo}
            textBlock={textBlock}
        />

  return card
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        width: '100%',
        shadowColor: colors.medium,
        shadowOffset: { height: 3, width: 0},
        shadowOpacity: 1,
    },
    detailsContainer: {
        flexDirection: 'row',
        padding: 12,
        paddingBottom: 6
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    logo: {
        width: 75,
        height: 75,
        borderColor: colors.medium,
        borderWidth: 2,
    },
    moreIcon: {
        color: colors.fadedPurple,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
})