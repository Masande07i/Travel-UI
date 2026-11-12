import { View, Text, ScrollView, StyleSheet } from "react-native";
import {SectionCard} from "./sectionCard";

export const UpcomingTours = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Upcoming tours</Text>

                <Text style={styles.seeAll}>See all</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cards}
            >
                <SectionCard
                    title="Iconic Brazil"
                    image={require("../../assets/images/card image.jpg")}
                    duration="8 days"
                    price="$659"
                    rating="4.6"
                    reviews="56 reviews"
                />

                <SectionCard
                    title="Amazon Rainforest Adventure"
                    image={require("../../assets/images/card image.png")}
                    duration="10 days"
                    price="$1,299"
                    rating="4.8"
                    reviews="89 reviews"
                />         
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: "#f3f3f3",
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