import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
     

      <Navbar />
      <Hero />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
    justifyContent: "center",
  },
});
