import { View, Text, StyleSheet } from 'react-native'
import { IoChevronBackOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";



export const Hero = () => {
  return (
    <View>
       <View style={styles.hero}>
        <IoChevronBackOutline />
        <BsHeart />
        </View>

      <Text>Rio de Janeiro</Text>
      <Text>Brazil</Text>
      <Text>Rio de Janeiro, often simply called Rio, is one of the Brazil's most famous cities, reowned for ...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  hero: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 30,
  },
});
