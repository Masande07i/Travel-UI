import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Section = () => {
  return (
   
      <View style={styles.container}>
            <View style={styles.titleRow}>
                <View>
                    <Text style={styles.title}>Rio de Janeiro</Text>
      

                    <View style={styles.countryRow}>
                       <Image 
                            source={require("../../assets/images/round.png")}
                            style={styles.flag}
                        />
                        <Text style={styles.country}>Brazil</Text>
                    </View>
                </View>

                <View style={styles.rating}>
                    <Ionicons name="star-outline" size={20} color="#171717" />
                    <Text style={styles.ratingText}>5.0</Text>
                </View>
            </View>

            <Pressable>
                <Text style={styles.reviews}>143 reviews</Text>
            </Pressable>

            <Text style={styles.description}>
                Rio de Janeiro, often simply called Rio, is one of Brazil's
                most iconic cities, renowned for...
            </Text>

            <Pressable>
                <Text style={styles.readMore}>Read more</Text>
            </Pressable>

             {/* <SectionCard/> */}
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        backgroundColor: "#f3f3f3",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        marginTop: -35,
        paddingHorizontal: 25,
        paddingTop: 24,
        paddingBottom: 20,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 27,
        fontWeight: "700",
        color: "#171717",
    },
    countryRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    flag: {
        width: 23,
        height: 23,
        marginRight: 8,
    },
    country: {
        fontSize: 16,
        color: "#333",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    star: {
        fontSize: 20,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 15,
        fontWeight: "600",
    },
    reviews: {
        alignSelf: "flex-end",
        fontSize: 15,
        color: "#171717",
        textDecorationLine: "underline",
        marginTop: -2,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        marginTop: 20,
    },
    readMore: {
        fontSize: 15,
        color: "#171717",
        textDecorationLine: "underline",
        marginTop: 8,
    },
})
