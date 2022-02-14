import { useState, useEffect } from "react";

import { View, StyleSheet, SectionList } from "react-native";
import { SearchBar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import TechStackListItem from "../components/TechStackListItem";

import colors from "../config/colors";
import TechStackData from "../data/TechStackData";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import Spacer from "../components/Spacer";

// TODO: Add a sort/filter option

export default function TechStackScreen() {
    const [ search, setSearch ] = useState('')
    const [ filteredData, setFilteredData ] = useState([])

    const handleSort = (a, b) => {
        return a.professionalYears > b.professionalYears ? -1
            : a.professionalYears < b.professionalYears ? 1
            : a.hobbyYears > b.hobbyYears ? -1
            : a.hobbyYears < b.hobbyYears ? 1
            : a.title > b.title ? 1
            : a.title < b.title ? -1
            : 0
    }
    
    useEffect(() => {
        handleSearchFilter('')
    }, [])

    const handleSearchFilter = (text) => {
        const searchText = text ?? ''
        const newData = [ ...new Set(TechStackData.map(el => el.category)) ]
            .sort()
            .map(category => {
                return {
                    title: category,
                    data: TechStackData.filter(el => {
                            return el.category === category
                                && [el.category, el.description, el.title].join('').toUpperCase().indexOf(searchText.toUpperCase()) > -1
                        })
                        .sort(handleSort)
                }
            }).filter(row => row.data.length > 0)
        setFilteredData([...newData])
        setSearch(searchText)
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.key}>
                <AppText style={styles.legendTitle}>Stack Tech Legend</AppText>
                <Separator />
                <View style={styles.keyRowsContainer}>
                    <View style={styles.keyRow}>
                        <MaterialIcons name='star' size={25} color={colors.gold} style={styles.keyIcon} />
                        <AppText>Yrs. of Professional Experience</AppText>
                    </View>
                    <View style={styles.keyRow}>
                        <MaterialIcons name='star' size={25} color={colors.fadedGold} style={styles.keyIcon} />
                        <AppText>Yrs. of Personal/Hobby Experience</AppText>
                    </View>
                </View>
            </View>
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={handleSearchFilter}
                onClear={() => handleSearchFilter('')}
                placeholder='Search Here...'
                value={search}
                lightTheme={true}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBar}
                inputStyle={styles.searchText}
            />
            <View style={styles.stackContainer}>
                <SectionList
                    sections={filteredData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <TechStackListItem {...item} />}
                    renderSectionHeader={({ section: { title }}) => {
                        return (<View style={styles.sectionHeaderContainer}>
                            <AppText style={styles.sectionHeader}>{title}</AppText>
                        </View>)
                    }}
                    SectionSeparatorComponent={({ leadingItem, trailingSection}) => {
                        return <Spacer height={!!leadingItem && !!trailingSection ? 20 : 0} />
                    }}
                    ItemSeparatorComponent={() => <Spacer height={10} />}
                    stickySectionHeadersEnabled={true}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    key: {
        width: '100%',
        backgroundColor: colors.white,
        marginVertical: 15,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    keyIcon: {
        marginRight: 10,
        position: 'absolute',
        left: -30,
        top: -3,
    },
    keyRow: {
        flexDirection: 'row',
        height: 22,
    },
    legendTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    searchBar: {
        backgroundColor: colors.light,
        height: 35
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0
    },
    searchText: {
        fontSize: 16
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.purple,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    sectionHeaderContainer: {
        backgroundColor: colors.light,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    stackContainer: {
        flex: 1,
        flexGrow: 1,
    }
})