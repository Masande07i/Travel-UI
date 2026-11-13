import { View, Text, Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SectionCardProps {
    title: string;
    image: ImageSourcePropType;
    duration: string;
    price: string;
    rating: string;
    reviews: string;
}

export const SectionCard = ({
    title,
    image,
    duration,
    price,
    rating,
    reviews,
}: SectionCardProps) => {
    return (
        <View style={styles.card}>
            <View>
                <Image source={image} style={styles.image} />

                <Pressable style={({ hovered, pressed }) => [
                    styles.heartButton,
                    hovered && styles.buttonHovered,
                    pressed && styles.buttonPressed,
                ]}>
                    <Ionicons name="heart-outline" size={27} color="#111111" />
                </Pressable>
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>

                <Text style={styles.info}>
                    {duration} * from {price}/person
                </Text>

                <View style={styles.bottomRow}>
                    <View style={styles.rating}>
                        <Ionicons name="star-outline" size={21} color="#171717" />
                        <Text style={styles.ratingNumber}>{rating}</Text>
                        <Text style={styles.reviews}>{reviews}</Text>
                    </View>

                    <Pressable style={({ hovered, pressed }) => [
                        styles.arrowButton,
                        hovered && styles.buttonHovered,
                        pressed && styles.buttonPressed,
                    ]}>
                        <Ionicons name="arrow-forward" size={25} color="#FFFFFF" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 290,
        backgroundColor: "#ffffffe8",
        borderRadius: 25,
        padding: 12,
        marginRight: 15,
        elevation: 4,
    },
    image: {
        width: "100%",
        height: 185,
        borderRadius: 20,
    },
    heartButton: {
        position: "absolute",
        top: 12,
        right: 12,
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    heart: {
        fontSize: 27,
        color: "#111111",
    },
    details: {
        paddingHorizontal: 5,
        paddingTop: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#171717",
    },
    info: {
        fontSize: 14,
        color: "#999999",
        marginTop: 5,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
    },
    star: {
        fontSize: 21,
        marginRight: 5,
    },
    ratingNumber: {
        fontSize: 14,
        color: "#333333",
    },
    reviews: {
        fontSize: 13,
        color: "#999999",
        marginInlineStart: 10,
    },
    arrowButton: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: "#17191B",
        justifyContent: "center",
        alignItems: "center",
    },
    arrow: {
        fontSize: 25,
        color: "#FFFFFF",
    },
    buttonHovered: {
        backgroundColor: "#E5E5E5",
        transform: [{ scale: 0.95 }],
    },
    buttonPressed: {
        transform: [{ scale: 0.90 }],
        opacity: 0.7,
    },
});
