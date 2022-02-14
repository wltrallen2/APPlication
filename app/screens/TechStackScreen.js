import { View, StyleSheet, Text, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import TechStackListItem from "../components/TechStackListItem";

import colors from "../config/colors";
import TechStackData from "../data/TechStackData";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import Spacer from "../components/Spacer";

// TODO: Add a search bar
// TODO: Add a sort/filter option

export default function TechStackScreen() {
    const data = TechStackData.sort((a, b) => {
        return a.professionalYears > b.professionalYears ? -1
            : a.professionalYears < b.professionalYears ? 1
            : a.hobbyYears > b.hobbyYears ? -1
            : a.hobbyYears < b.hobbyYears ? 1
            : a.title > b.title ? 1
            : a.title < b.title ? -1
            : 0
    })
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
            <View style={styles.stackContainer}>
                <FlatList
                    data={TechStackData}
                    renderItem={({item}) => <TechStackListItem {...item} />}
                    keyExtractor={tech => tech.title}
                    ItemSeparatorComponent={() => <Spacer height={8} />}
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
    stackContainer: {
        flex: 1,
        flexGrow: 1,
    }
})