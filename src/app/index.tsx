import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { UpcomingTours } from "@/components/upcoming";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
     

      <Navbar />
      <Hero />
      <Section />
      <UpcomingTours />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    
    justifyContent: "center",
  },
});
