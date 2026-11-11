
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { UpcomingTours } from "@/components/upcoming";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Navbar />
      <Hero />
      <Section />
      <UpcomingTours />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
