import { View, Text, Image, Pressable, StyleSheet,Button} from "react-native";
import { BsHeart } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";


export const SectionCard = () => {
    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={require("../../assets/images/card image.jpg")}
                    style={styles.image}
                />
                <Pressable style={styles.heartButton} >
                  <BsHeart style={styles.heart}/>
                </Pressable>
            </View>

            <View   style={styles.details}>
                <Text style={styles.title}>Iconic Brazil</Text>

                <Text style={styles.info}>
                    8 days  *  from $659/person
                </Text>

                <View style={styles.bottomRow}>
                    <View style={styles.rating}>
                        <FaRegStar style={styles.star}/>
                        <Text style={styles.ratingNumber}>4.6</Text>
                        <Text style={styles.reviews}>56 reviews</Text>
                    </View>

                    <Pressable style={styles.arrowButton} >
                        <GoArrowRight style={styles.arrow}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
   card: {
        width: 300,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 12,
        marginRight: 15,
   },
   image: {
        width: "100%",
        height: 185,
        borderRadius: 20,
    },
    heartButton: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
       },
    heart: {
        fontSize: 20,
        color: "#111",
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
        marginLeft: 10,
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

})

      