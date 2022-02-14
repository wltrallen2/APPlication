import { Image, StyleSheet, FlatList, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

import AppText from '../components/AppText'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import { StackActions } from '@react-navigation/native'
import ProfessionalResponsibilityCard from '../components/ProfessionalResponsibilityCard'
import Spacer from '../components/Spacer'

export default function RoleDetailScreen({ route: { params: { image, logo, role, company, location, dates, details }}, navigation }) {
    const BackIcon = () => (
        <TouchableWithoutFeedback 
            onPress={() => navigation.dispatch(StackActions.pop())}
            style={styles.backIconContainer}
        >
            <View style={styles.backIconContainer} >
                <MaterialIcons name='arrow-back-ios' size={18} color={colors.white} style={styles.backIcon} />
            </View>
        </TouchableWithoutFeedback>
    )
    
  return (
    <View style={{ flex: 1 }}>
        <Image source={image} resizeMode='cover' style={styles.image} />
        <BackIcon />

        <View style={styles.header}>
            <Image source={logo} resizeMode='contain' style={styles.logo} />
            <View style={styles.headerText}>
                <AppText style={styles.role}>{role}</AppText>
                <AppText style={styles.company}>{company}</AppText>
                <AppText style={styles.location}>{location}</AppText>
                <AppText style={styles.dates}>{dates}</AppText>
            </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.detailContainer}>
            <FlatList
                data={details}
                renderItem={({ item }) => <ProfessionalResponsibilityCard description={item} />}
                keyExtractor={detail => detail.substring(0, 36)}
                ItemSeparatorComponent={() => <Spacer height={16} />}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backIcon: {
        left: 10,
    },
    backIconContainer: {
        position: 'absolute',
        top: 50,
        left: 12,
        backgroundColor: colors.purple,
        height: 30,
        width: 30,
        borderRadius: 100,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    company: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500',
        marginTop: 8,
        marginBottom: -2
    },
    dates: {
        fontStyle: 'italic',
        marginTop: 5,
        color: colors.medium
    },
    detailContainer: {
        flex: 1,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        width: '100%',
        height: 150
    },
    logo: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    role: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: -5,
        lineHeight: 22
    },
    separator: {
        backgroundColor: colors.purple,
        height: 1,
        marginHorizontal: 10,
        marginBottom: 8,
    },
    headerText: {
        flex: 1,
    }
})