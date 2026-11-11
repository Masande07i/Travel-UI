import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { SectionCard } from "./sectionCard";

export const UpcomingTours = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Upcoming tours</Text>

                <Pressable>
                    <Text style={styles.seeAll}>See all</Text>
                </Pressable>

            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cards}
            >
                <SectionCard />
                <SectionCard />
               
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        marginBottom: 15,
    },
    title: {
        fontSize: 23,
        fontWeight: "700",
        color: "#171717",
    },
    seeAll: {
        fontSize: 15,
        color: "#171717",
        textDecorationLine: "underline",
    },
    cards: {
        paddingLeft: 25,
        paddingRight: 10,
    },
});