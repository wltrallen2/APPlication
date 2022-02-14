import { StyleSheet, View } from 'react-native'
import React from 'react'

import Card from './Card'
import { StackActions } from '@react-navigation/native'
import ProfessionalTextBlock from './ProfessionalTextBlock'

export default function ProfessionalCard({ image, logo, role, company, location, dates, details, navigation }) {
    const props = {
        image,
        logo,
        role,
        company,
        location,
        dates,
        details
    }

    return (
    <Card
        image={image}
        logo={logo}
        textBlock={<ProfessionalTextBlock {...props} />}
        handleShowMore={details ? () => navigation.dispatch(StackActions.push('Detail', props)) : null}
    />
  )
}

