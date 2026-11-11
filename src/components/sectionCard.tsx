import { View, Text,  Pressable} from "react-native";
import { BsHeart } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";


export const SectionCard = () => {
    return (
        <View>
            <View>
                <Pressable >
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


      