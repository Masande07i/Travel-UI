import{ Hero} from "@/components/hero"
import { Section } from "@/components/section";
import { UpcomingTours } from "@/components/upcoming";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      
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
