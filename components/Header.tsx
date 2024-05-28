import { View, Text, StyleSheet, Pressable, TouchableNativeFeedback, TouchableHighlight } from "react-native";
import { colors, spacing } from "../utils/variables";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Templify 🥸</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Klistra in</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Spara</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm
  },
  button: {
    padding: spacing.sm
  },
  title: {
    color: colors.contrast,
    fontSize: 24,
  },
  text: {
    color: colors.contrast,
    fontSize: 18,
  }
});