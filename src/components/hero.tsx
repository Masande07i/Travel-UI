import { View,ImageBackground, Pressable, StyleSheet } from "react-native";
import { IoChevronBackOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";



export const Hero = () => {
    return (
        <ImageBackground
            source={require("../../assets/images/Rio de Janeiro at Golden Hour.png")}
            style={styles.hero}
            imageStyle={styles.image}
        >
            <View style={styles.buttons}>
                <Pressable style={styles.button}>
                    <IoChevronBackOutline/>
                </Pressable>

                <Pressable style={styles.button}>
                    <BsHeart/>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    hero: {
        height: 280,
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
    icon: {
        fontSize: 30,
        color: "#111",
    },
});