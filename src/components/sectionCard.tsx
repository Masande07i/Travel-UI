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
                  <BsHeart/>
                </Pressable>
            </View>

            <View >
                <Text>Iconic Brazil</Text>

                <Text >
                    8 days  *  from $659/person
                </Text>

                <View >
                    <View >
                        <FaRegStar/>
                        <Text >4.6</Text>
                        <Text >56 reviews</Text>
                    </View>

                    <Pressable >
                        <GoArrowRight />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
   card: {
        width: 290,
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
})

      