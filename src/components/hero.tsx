import { View, ImageBackground, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Hero = () => {
    return (
        <ImageBackground
            source={require("../../assets/images/Rio de Janeiro at Golden Hour.png")}
            style={styles.hero}
            imageStyle={styles.image}
        >
            <View style={styles.buttons}>
                <Pressable
                    style={({ hovered, pressed }) => [
                        styles.button,
                        hovered && styles.buttonHovered,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Ionicons name="chevron-back-outline" size={24} color="#111" />
                </Pressable>

                <Pressable
                    style={({ hovered, pressed }) => [
                        styles.button,
                        hovered && styles.buttonHovered,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Ionicons name="heart-outline" size={24} color="#111" />
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    hero: {
        height: 290,
        width: "100%",
        justifyContent: "flex-start",
        paddingTop: 50,
    },
    image: {
        resizeMode: "cover",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonHovered: {
        backgroundColor: "#E5E5E5",
    },
    buttonPressed: {
        transform: [{ scale: 0.90 }],
        opacity: 0.7,
    },
});
