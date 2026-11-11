import { View, Text, Pressable, StyleSheet } from "react-native";
import { SectionCard } from "./sectionCard";
import { FaRegStar } from "react-icons/fa6";

export const Section = () => {
  return (
   
      <View >
            <View >
                <View>
                    <Text >Rio de Janeiro</Text>

                    <View >
                        <Text >🇧🇷</Text>
                        <Text >Brazil</Text>
                    </View>
                </View>

                <View>
                    <FaRegStar />
                    <Text >5.0</Text>
                </View>
            </View>

            <Pressable>
                <Text >143 reviews</Text>
            </Pressable>

            <Text >
                Rio de Janeiro, often simply called Rio, is one of Brazil's
                most iconic cities, renowned for...
            </Text>

            <Pressable>
                <Text >Read more</Text>
            </Pressable>

             <SectionCard/>
        </View>
    );
};
     
      

    